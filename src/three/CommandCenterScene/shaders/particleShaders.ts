export const particleVertexShader = `
  attribute float aDepth;
  attribute float aSeed;
  attribute vec3 aColor;

  varying vec3 vColor;
  varying float vAlpha;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  uniform float uScroll;

  void main() {
    vColor = aColor;
    vec3 p = position;
    float depth = clamp((aDepth + 7.5) / 8.5, 0.0, 1.0);
    float parallax = mix(0.025, 0.18, depth);

    p.x += uMouse.x * parallax + sin(uTime * 0.28 + aSeed) * 0.045;
    p.y += uMouse.y * parallax + cos(uTime * 0.22 + aSeed * 1.7) * 0.035;
    p.z += sin(uTime * 0.18 + aSeed) * 0.035 + uScroll * 0.42;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = mix(8.0, 20.0, depth) * uPixelRatio / max(-mvPosition.z, 0.85);
    vAlpha = mix(0.22, 0.88, depth);
  }
`;

export const particleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    float core = smoothstep(0.5, 0.04, dist);
    float halo = smoothstep(0.5, 0.2, dist) * 0.24;
    gl_FragColor = vec4(vColor, (core + halo) * vAlpha);
  }
`;

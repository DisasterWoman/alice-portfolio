import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CustomShaderMaterial from 'three-custom-shader-material/vanilla';

import './HeroSunScene.css';

const sunVertexShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vSunUv;
  varying vec3 vSunWorldPosition;
  varying vec3 vSunNormal;

  float wave(vec3 value) {
    return sin(value.x * 5.0 + uTime * 0.22)
      * sin(value.y * 3.4 - uTime * 0.16)
      * sin(value.z * 4.3 + uTime * 0.12);
  }

  void main() {
    vSunUv = uv;
    vSunNormal = normalize(normalMatrix * normal);

    float turbulence = wave(position) * 0.028;
    vec3 displaced = position + normal * turbulence;
    vSunWorldPosition = (modelMatrix * vec4(displaced, 1.0)).xyz;
    csm_Position = displaced;
  }
`;

const sunFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vSunUv;
  varying vec3 vSunWorldPosition;
  varying vec3 vSunNormal;

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2 c = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 d = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, c.yyy));
    vec3 x0 = v - i + dot(i, c.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + c.xxx;
    vec3 x2 = x0 - i2 + c.yyy;
    vec3 x3 = x0 - d.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * d.wyz - d.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  float fbm(vec3 value) {
    float amplitude = 0.5;
    float total = 0.0;
    for (int i = 0; i < 5; i++) {
      total += amplitude * snoise(value);
      value *= 2.02;
      amplitude *= 0.5;
    }
    return total;
  }

  void main() {
    vec3 p = normalize(vSunWorldPosition) * 2.1;
    float slow = uTime * 0.06;
    float cells = fbm(p * 2.7 + vec3(slow, -slow * 0.72, slow * 1.28));
    float veins = fbm(p * 6.2 + vec3(-uTime * 0.12, uTime * 0.09, uTime * 0.04));
    float heat = smoothstep(-0.48, 0.78, cells + veins * 0.46);

    vec3 ember = vec3(0.7, 0.13, 0.02);
    vec3 orange = vec3(1.0, 0.34, 0.045);
    vec3 gold = vec3(1.0, 0.66, 0.12);
    vec3 whiteHot = vec3(1.0, 0.9, 0.32);
    vec3 color = mix(ember, orange, heat);
    color = mix(color, gold, smoothstep(0.44, 0.88, heat));
    color = mix(color, whiteHot, smoothstep(0.86, 1.0, heat + veins * 0.12));

    vec3 viewDirection = normalize(cameraPosition - vSunWorldPosition);
    vec3 normalDirection = normalize(vSunNormal);
    vec3 lightDirection = normalize(vec3(0.78, 0.28, 0.36));
    float sphereShade = smoothstep(-0.5, 0.78, dot(normalDirection, lightDirection));
    float limbShade = smoothstep(-0.1, 0.92, dot(normalDirection, viewDirection));
    float shadow = mix(0.34, 1.42, sphereShade) * mix(0.58, 1.0, limbShade);
    float rim = pow(1.0 - max(dot(viewDirection, normalDirection), 0.0), 4.6);
    float localHeat = smoothstep(0.46, 0.92, veins + cells * 0.44);
    color = color * shadow;
    color += vec3(1.0, 0.68, 0.08) * rim * 0.42;
    color += vec3(1.0, 0.46, 0.055) * localHeat * 0.3 * sphereShade;

    csm_DiffuseColor = vec4(color, 1.0);
    csm_Emissive = color * 0.78;
    csm_Roughness = 0.86;
    csm_Metalness = 0.0;
  }
`;

const atmosphereVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uFireBoost;
  varying float vPlasmaTongue;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  float lobe(float angle, float center, float width) {
    float delta = atan(sin(angle - center), cos(angle - center));
    return exp(-(delta * delta) / width);
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm2(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p = p * 2.03 + vec2(8.7, 2.4);
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec3 objectNormal = normalize(normal);
    float angle = atan(objectNormal.y, objectNormal.x);
    float flow = uTime * 0.34;
    float plasmaNoise = fbm2(vec2(angle * 2.4 + flow * 0.32, objectNormal.y * 3.0 - flow * 0.18));
    float strandNoise = fbm2(vec2(angle * 15.0 - flow * 0.24, objectNormal.y * 8.0 + flow * 0.16));
    float slowPulse = 0.78 + 0.22 * sin(angle * 3.0 + flow * 0.72);
    float tongues = max(
      max(
        max(lobe(angle, 2.32 + sin(flow) * 0.05, 0.022), lobe(angle, 2.72 + sin(flow * 0.8) * 0.05, 0.018)),
        max(lobe(angle, 3.04 + cos(flow * 0.7) * 0.04, 0.02), lobe(angle, -2.54 + sin(flow * 0.9) * 0.04, 0.016))
      ),
      max(
        max(lobe(angle, -1.42 + cos(flow * 0.62) * 0.05, 0.014), lobe(angle, -0.72 + sin(flow * 0.74) * 0.04, 0.013)),
        max(lobe(angle, 0.28 + cos(flow * 0.58) * 0.04, 0.015), lobe(angle, 1.32 + sin(flow * 0.66) * 0.05, 0.014))
      )
    );
    float edgeBias = 0.68 + smoothstep(0.18, 0.96, abs(objectNormal.x)) * 0.18 + smoothstep(0.24, 0.96, abs(objectNormal.y)) * 0.14;
    float tornStrands = smoothstep(0.42, 0.92, plasmaNoise + strandNoise * 0.48);
    vPlasmaTongue = pow(tongues, 0.88) * edgeBias * slowPulse * tornStrands * (1.0 + uFireBoost * 0.2);

    vec3 displaced = position + objectNormal * (vPlasmaTongue * (0.074 + uFireBoost * 0.016));
    vWorldNormal = normalize(normalMatrix * objectNormal);
    vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const atmosphereFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uFireBoost;
  varying float vPlasmaTongue;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm2(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p = p * 2.11 + vec2(5.3, 9.1);
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    vec3 normalDirection = normalize(vWorldNormal);
    float angle = atan(normalDirection.y, normalDirection.x);
    float fresnel = pow(1.0 - max(dot(viewDirection, normalDirection), 0.0), 8.6);
    float edgeSide = smoothstep(0.08, 0.94, abs(normalDirection.x));
    float topSide = smoothstep(0.04, 0.88, normalDirection.y);
    float edgeFlicker = 0.88 + 0.12 * sin(normalDirection.y * 12.0 + normalDirection.x * 7.0 + uTime * 0.36);
    float tornEdge = fbm2(vec2(angle * 4.8 + uTime * 0.16, normalDirection.y * 7.0 - uTime * 0.08));
    float fineTear = fbm2(vec2(angle * 13.0 - uTime * 0.1, normalDirection.x * 11.0 + uTime * 0.07));
    float strandCut = fbm2(vec2(angle * 18.0 - uTime * 0.2, normalDirection.y * 10.0 + uTime * 0.12));
    float raggedMask = smoothstep(0.5, 0.96, tornEdge + fineTear * 0.46 + strandCut * 0.34 + vPlasmaTongue * 0.54);
    float flameCore = smoothstep(0.1, 0.72, vPlasmaTongue) * raggedMask;
    float thinRim = fresnel * (0.05 + edgeSide * 0.22 + topSide * 0.08) * edgeFlicker * raggedMask;
    float attachedFlame = fresnel * flameCore;
    vec3 color = mix(vec3(1.0, 0.18, 0.018), vec3(1.0, 0.62, 0.08), smoothstep(0.22, 0.86, fresnel + attachedFlame));
    float alpha = thinRim * (0.4 + uFireBoost * 0.04) + attachedFlame * (0.54 + uFireBoost * 0.1);
    if (alpha < 0.048) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;

const particleVertexShader = /* glsl */ `
  attribute float aSeed;
  attribute float aDistance;
  attribute float aSize;
  uniform float uTime;
  uniform float uFireBoost;
  varying float vAlpha;

  void main() {
    float drift = fract(uTime * 0.025 + aSeed);
    vec3 radial = normalize(position);
    vec3 animatedPosition = position + radial * drift * (0.15 + uFireBoost * 0.04);
    float fade = (1.0 - drift) * smoothstep(0.34, 0.0, aDistance);
    vAlpha = fade * (0.44 + 0.56 * sin(aSeed * 31.0 + uTime * 0.35)) * (1.0 + uFireBoost * 0.24);
    vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
    gl_PointSize = aSize * vAlpha * (260.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragmentShader = /* glsl */ `
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float alpha = smoothstep(0.5, 0.0, d) * vAlpha * 0.5;
    gl_FragColor = vec4(1.0, 0.56, 0.1, alpha);
  }
`;

function createCoronaParticleGeometry(radius = 1.1) {
  const count = 210;
  const positions = [];
  const seeds = [];
  const distances = [];
  const sizes = [];

  for (let index = 0; index < count; index += 1) {
    const seed = (index * 37.17) % 101;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.pow(Math.random(), 1.8) * 0.34;
    const adjustedAngle = angle + (Math.random() - 0.5) * 0.12;
    positions.push(Math.cos(adjustedAngle) * (radius + distance), Math.sin(adjustedAngle) * (radius + distance), (Math.random() - 0.5) * 0.08);
    seeds.push(seed * 0.01);
    distances.push(distance);
    sizes.push(4.4 + Math.random() * 4.8);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('aSeed', new THREE.Float32BufferAttribute(seeds, 1));
  geometry.setAttribute('aDistance', new THREE.Float32BufferAttribute(distances, 1));
  geometry.setAttribute('aSize', new THREE.Float32BufferAttribute(sizes, 1));
  return geometry;
}

function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        Object.values(material).forEach((value) => {
          if (value?.isTexture) value.dispose();
        });
        material.dispose();
      });
    }
  });
}

export default function HeroSunScene() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.02;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    root.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 24);
    camera.position.set(0, 0, 5.3);

    const sunUniforms = { uTime: { value: 0 } };
    const atmosphereUniforms = { uTime: { value: 0 }, uFireBoost: { value: 0 } };
    const coronaUniforms = { uTime: { value: 0 }, uFireBoost: { value: 0 } };

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(1.04, 128, 128),
      new CustomShaderMaterial({
        baseMaterial: THREE.MeshPhysicalMaterial,
        vertexShader: sunVertexShader,
        fragmentShader: sunFragmentShader,
        uniforms: sunUniforms,
        color: new THREE.Color('#ff6a12'),
        emissive: new THREE.Color('#c73305'),
        emissiveIntensity: 0.72,
        roughness: 0.86,
        metalness: 0,
      }),
    );
    sun.position.set(2.58, 0.24, 0);
    scene.add(sun);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.078, 128, 128),
      new THREE.ShaderMaterial({
        uniforms: atmosphereUniforms,
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
        depthWrite: false,
      }),
    );
    atmosphere.position.copy(sun.position);
    scene.add(atmosphere);

    const particles = new THREE.Points(
      createCoronaParticleGeometry(),
      new THREE.ShaderMaterial({
        uniforms: coronaUniforms,
        vertexShader: particleVertexShader,
        fragmentShader: particleFragmentShader,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      }),
    );
    particles.position.copy(sun.position);
    scene.add(particles);

    const keyLight = new THREE.PointLight('#ff9b3d', 1.35, 8);
    keyLight.position.set(0.1, 1.25, 2.1);
    scene.add(keyLight);
    scene.add(new THREE.AmbientLight('#24151a', 0.16));

    const pointer = new THREE.Vector2(0, 0);
    const targetPointer = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();
    const projectedSun = new THREE.Vector3();
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let fireBoost = 0;
    let targetFireBoost = 0;

    const resize = () => {
      width = Math.max(root.clientWidth, 1);
      height = Math.max(root.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(width, height, false);
    };

    const handlePointerMove = (event) => {
      const rect = root.getBoundingClientRect();
      targetPointer.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      targetPointer.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;

      projectedSun.copy(sun.position).project(camera);
      const sunX = ((projectedSun.x + 1) / 2) * rect.width;
      const sunY = ((1 - projectedSun.y) / 2) * rect.height;
      const pointerX = event.clientX - rect.left;
      const pointerY = event.clientY - rect.top;
      const distance = Math.hypot(pointerX - sunX, pointerY - sunY);
      const hoverRadius = Math.min(rect.width, rect.height) * 0.28;
      targetFireBoost = THREE.MathUtils.clamp(1 - distance / hoverRadius, 0, 0.42);
    };

    const handlePointerLeave = () => {
      targetFireBoost = 0;
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      pointer.lerp(targetPointer, 0.045);
      sunUniforms.uTime.value = elapsed;
      atmosphereUniforms.uTime.value = elapsed;
      coronaUniforms.uTime.value = elapsed;
      fireBoost += (targetFireBoost - fireBoost) * 0.04;
      atmosphereUniforms.uFireBoost.value = fireBoost;
      coronaUniforms.uFireBoost.value = fireBoost;

      sun.rotation.y = elapsed * 0.055 + pointer.x * 0.08;
      sun.rotation.x = pointer.y * 0.045;
      atmosphere.rotation.copy(sun.rotation);
      particles.rotation.copy(sun.rotation);
      camera.position.x = pointer.x * 0.12;
      camera.position.y = -pointer.y * 0.08;
      camera.lookAt(1.14, 0.08, 0);

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    animate();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      disposeObject(scene);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={rootRef} className="hero-sun-scene" aria-hidden="true" />;
}

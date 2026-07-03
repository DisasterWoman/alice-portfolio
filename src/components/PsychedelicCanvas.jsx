import React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uPointer;
  varying vec2 vUv;

  mat2 rotate2d(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  float ribbon(vec2 p, float offset, float width) {
    return smoothstep(width, 0.0, abs(sin(p.x * 2.5 + p.y * 3.0 + offset)));
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
    vec2 pointer = (uPointer * 2.0 - 1.0) * vec2(0.35, -0.35);
    vec2 p = (uv + pointer) * rotate2d(sin(uTime * 0.16) * 0.45);

    float tunnel = length(p);
    float waveA = sin(9.0 * tunnel - uTime * 1.5 + atan(p.y, p.x) * 4.0);
    float waveB = cos((p.x - p.y) * 6.0 + uTime * 0.9);
    float bands = ribbon(p, uTime * 0.72, 0.24) * 0.62;
    float grid = smoothstep(0.022, 0.0, abs(sin((p.x + waveA * 0.04) * 16.0)))
      * smoothstep(0.055, 0.0, abs(sin((p.y + waveB * 0.03) * 12.0)));

    vec3 ink = vec3(0.015, 0.018, 0.045);
    vec3 magenta = vec3(0.95, 0.12, 0.88);
    vec3 cyan = vec3(0.02, 0.86, 1.0);
    vec3 acid = vec3(0.76, 1.0, 0.18);
    vec3 amber = vec3(1.0, 0.54, 0.12);

    vec3 color = ink;
    color = mix(color, magenta, smoothstep(-0.35, 1.0, waveA) * 0.58);
    color = mix(color, cyan, smoothstep(-0.1, 0.95, waveB) * 0.45);
    color += acid * bands * 0.35;
    color += amber * grid * 0.68;
    color *= 1.0 - smoothstep(0.55, 1.85, tunnel) * 0.55;
    color += vec3(0.01, 0.03, 0.08);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function createCityMaterial(color) {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.35,
    roughness: 0.42,
    metalness: 0.18,
  });
}

export default function PsychedelicCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 4.6, 9.2);
    camera.lookAt(0, 0.8, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
    };

    const backgroundScene = new THREE.Scene();
    const backgroundCamera = new THREE.Camera();
    const background = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms })
    );
    backgroundScene.add(background);

    scene.add(new THREE.HemisphereLight('#f9fbff', '#241244', 2.6));

    const keyLight = new THREE.DirectionalLight('#bffbff', 3.2);
    keyLight.position.set(4, 8, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const magentaLight = new THREE.PointLight('#ff31d2', 8, 18);
    magentaLight.position.set(-4, 2.7, 2.5);
    scene.add(magentaLight);

    const acidLight = new THREE.PointLight('#c8ff2e', 5, 15);
    acidLight.position.set(4.4, 1.5, -2);
    scene.add(acidLight);

    const city = new THREE.Group();
    city.position.set(2.25, -0.75, -0.6);
    city.rotation.set(-0.08, -0.42, 0.02);
    scene.add(city);

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(3.9, 4.45, 0.18, 7),
      new THREE.MeshStandardMaterial({
        color: '#100f22',
        emissive: '#3c1f8f',
        emissiveIntensity: 0.24,
        roughness: 0.65,
      })
    );
    base.receiveShadow = true;
    city.add(base);

    const colors = ['#00e5ff', '#ff2fd6', '#cffc2f', '#ff9b2f', '#7c5cff', '#27ffc2'];
    const buildings = [];

    for (let i = 0; i < 54; i += 1) {
      const angle = i * 0.72;
      const radius = 0.45 + (i % 9) * 0.36;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius * 0.74;
      const height = 0.28 + ((i * 11) % 14) * 0.12;
      const footprint = 0.16 + (i % 4) * 0.035;
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(footprint, height, footprint),
        createCityMaterial(colors[i % colors.length])
      );
      mesh.position.set(x, height / 2 + 0.1, z);
      mesh.rotation.y = angle * 0.25;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      city.add(mesh);
      buildings.push(mesh);
    }

    const curveMaterial = new THREE.LineBasicMaterial({
      color: '#e6ff50',
      transparent: true,
      opacity: 0.72,
    });

    const helix = new THREE.Group();
    for (let strand = 0; strand < 3; strand += 1) {
      const points = [];
      for (let i = 0; i < 150; i += 1) {
        const t = i / 149;
        const angle = t * Math.PI * 5 + strand * 2.09;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * (1.4 + t * 1.2),
            0.25 + t * 2.1,
            Math.sin(angle) * (0.7 + t * 0.5)
          )
        );
      }
      helix.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), curveMaterial));
    }
    city.add(helix);

    const clock = new THREE.Clock();
    let frameId = 0;

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      uniforms.uResolution.value.set(width * renderer.getPixelRatio(), height * renderer.getPixelRatio());
    };

    const handlePointerMove = (event) => {
      uniforms.uPointer.value.set(event.clientX / window.innerWidth, event.clientY / window.innerHeight);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      uniforms.uTime.value = elapsed;
      city.rotation.y = -0.42 + Math.sin(elapsed * 0.22) * 0.18;
      city.rotation.x = -0.08 + Math.cos(elapsed * 0.18) * 0.04;
      helix.rotation.y = elapsed * 0.38;
      helix.rotation.x = Math.sin(elapsed * 0.31) * 0.12;
      buildings.forEach((building, index) => {
        building.scale.y = 1 + Math.sin(elapsed * 1.8 + index * 0.7) * 0.08;
      });

      renderer.autoClear = true;
      renderer.render(backgroundScene, backgroundCamera);
      renderer.autoClear = false;
      renderer.clearDepth();
      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      background.geometry.dispose();
      background.material.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
      });
    };
  }, []);

  return <div className="psyCanvas" ref={mountRef} aria-hidden="true" />;
}

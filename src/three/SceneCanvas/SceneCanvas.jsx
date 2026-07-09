import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import './SceneCanvas.css';

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

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
    vec2 pointer = (uPointer - 0.5) * vec2(0.22, -0.18);
    vec2 p = uv + pointer;

    float aurora = smoothstep(0.72, 0.06, abs(p.y + sin(p.x * 2.1 + uTime * 0.28) * 0.18));
    aurora *= 0.38 + noise(p * 2.0 + uTime * 0.08) * 0.62;
    float halo = smoothstep(1.25, 0.0, length(p - vec2(0.35, -0.08)));
    float stars = step(0.995, noise(gl_FragCoord.xy * 0.45 + uTime * 0.04));

    vec3 ink = vec3(0.025, 0.035, 0.07);
    vec3 blue = vec3(0.05, 0.22, 0.38);
    vec3 teal = vec3(0.04, 0.72, 0.72);
    vec3 rose = vec3(0.84, 0.18, 0.58);
    vec3 gold = vec3(1.0, 0.68, 0.18);

    vec3 color = mix(ink, blue, smoothstep(-0.85, 0.9, p.y));
    color += teal * aurora * 0.34;
    color += rose * aurora * smoothstep(-0.4, 0.9, p.x) * 0.22;
    color += blue * halo * 0.42;
    color += gold * stars * 0.55;
    color *= 1.0 - smoothstep(0.45, 1.8, length(uv)) * 0.42;
    gl_FragColor = vec4(color, 1.0);
  }
`;

function toonMaterial(color, emissive = color) {
  return new THREE.MeshToonMaterial({
    color,
    emissive,
    emissiveIntensity: 0.16,
  });
}

function makeRoundedBox(width, height, depth, color) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth, 1, 1, 1),
    toonMaterial(color)
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export default function SceneCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0.15, 4.9, 10.4);
    camera.lookAt(0.35, 0.95, 0);

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

    scene.add(new THREE.HemisphereLight('#ffffff', '#20305f', 2.8));

    const sun = new THREE.DirectionalLight('#fff2bf', 4.1);
    sun.position.set(-3.8, 7.8, 6.2);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    scene.add(sun);

    const cyanLight = new THREE.PointLight('#2af8ff', 7, 18);
    cyanLight.position.set(4.2, 2.8, 3.2);
    scene.add(cyanLight);

    const pinkLight = new THREE.PointLight('#ff4bb7', 5.5, 16);
    pinkLight.position.set(-4.8, 1.8, -1.8);
    scene.add(pinkLight);

    const island = new THREE.Group();
    island.position.set(2.25, -0.95, -0.7);
    island.rotation.set(-0.1, -0.48, 0.02);
    scene.add(island);

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(4.1, 4.75, 0.28, 7),
      toonMaterial('#252458', '#3b2a8d')
    );
    base.receiveShadow = true;
    island.add(base);

    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(4.12, 4.76, 0.045, 7),
      toonMaterial('#3a3977', '#5b4ed6')
    );
    rim.position.y = 0.17;
    island.add(rim);

    const colors = ['#22f2d0', '#18c9ff', '#ff45bd', '#c7ff2f', '#ffb13b', '#7165ff'];
    const buildings = [];
    for (let i = 0; i < 62; i += 1) {
      const angle = i * 0.58;
      const radius = 0.48 + (i % 11) * 0.32;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius * 0.7;
      const height = 0.34 + ((i * 13) % 17) * 0.105;
      const footprint = 0.16 + (i % 4) * 0.045;
      const building = makeRoundedBox(footprint, height, footprint, colors[i % colors.length]);
      building.position.set(x, height / 2 + 0.18, z);
      building.rotation.y = angle * 0.32;
      building.userData = { baseHeight: height, phase: i * 0.42 };
      island.add(building);
      buildings.push(building);
    }

    const orbitGroup = new THREE.Group();
    const lineMaterial = new THREE.LineBasicMaterial({ color: '#f4ff6a', transparent: true, opacity: 0.78 });
    for (let strand = 0; strand < 5; strand += 1) {
      const points = [];
      for (let i = 0; i < 180; i += 1) {
        const t = i / 179;
        const angle = t * Math.PI * 3.2 + strand * 1.26;
        points.push(new THREE.Vector3(
          Math.cos(angle) * (1.1 + t * 1.9),
          0.4 + Math.sin(t * Math.PI) * 1.75 + strand * 0.04,
          Math.sin(angle) * (0.48 + t * 0.55)
        ));
      }
      orbitGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial));
    }
    island.add(orbitGroup);

    const floaters = [];
    for (let i = 0; i < 10; i += 1) {
      const floater = makeRoundedBox(0.22, 0.22, 0.22, colors[(i + 2) % colors.length]);
      floater.userData = { angle: i * 0.72, radius: 2.6 + (i % 3) * 0.3, speed: 0.45 + i * 0.025 };
      island.add(floater);
      floaters.push(floater);
    }

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

      island.rotation.y = -0.48 + Math.sin(elapsed * 0.2) * 0.2;
      island.rotation.x = -0.1 + Math.sin(elapsed * 0.31) * 0.045;
      island.position.y = -0.95 + Math.sin(elapsed * 0.85) * 0.08;
      orbitGroup.rotation.y = elapsed * 0.42;
      orbitGroup.rotation.x = Math.sin(elapsed * 0.37) * 0.18;

      buildings.forEach((building) => {
        const bounce = 1 + Math.max(0, Math.sin(elapsed * 2.6 + building.userData.phase)) * 0.16;
        building.scale.y = bounce;
        building.position.y = building.userData.baseHeight * bounce / 2 + 0.18;
      });

      floaters.forEach((floater) => {
        const data = floater.userData;
        const angle = data.angle + elapsed * data.speed;
        floater.position.set(
          Math.cos(angle) * data.radius,
          1.35 + Math.sin(elapsed * 1.4 + data.angle) * 0.48,
          Math.sin(angle) * data.radius * 0.55
        );
        floater.rotation.set(elapsed * 0.9 + data.angle, elapsed * 1.2, elapsed * 0.7);
      });

      camera.position.x = Math.sin(elapsed * 0.16) * 0.22;
      camera.lookAt(0.35, 0.95, 0);

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

  return <div className="ambient-scene" ref={mountRef} aria-hidden="true" />;
}

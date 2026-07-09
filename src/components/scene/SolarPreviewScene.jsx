import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import './SolarPreviewScene.css';

const planets = [
  { name: 'Mercury', size: 0.08, distance: 0.62, color: '#aaa393', accent: '#5d574c', speed: 1.8 },
  { name: 'Venus', size: 0.13, distance: 0.86, color: '#d89b4d', accent: '#74451f', speed: 1.35 },
  { name: 'Earth', size: 0.14, distance: 1.1, color: '#2aa9ff', accent: '#75f2c8', speed: 1.06 },
  { name: 'Mars', size: 0.11, distance: 1.33, color: '#c85734', accent: '#6d2a19', speed: 0.86 },
  { name: 'Jupiter', size: 0.21, distance: 1.62, color: '#c49555', accent: '#6b421f', speed: 0.58 },
  { name: 'Saturn', size: 0.18, distance: 1.9, color: '#c7b06d', accent: '#74643f', speed: 0.45, ring: true },
];

function makePlanetTexture({ color, accent, name }) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  const base = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  base.addColorStop(0, color);
  base.addColorStop(0.55, color);
  base.addColorStop(1, accent);
  context.fillStyle = base;
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 22; i += 1) {
    const y = (i / 22) * canvas.height + Math.sin(i * 1.7) * 4;
    context.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.14)';
    context.fillRect(0, y, canvas.width, 2 + Math.random() * 5);
  }

  if (name === 'Earth') {
    context.fillStyle = 'rgba(113, 242, 190, 0.72)';
    for (let i = 0; i < 10; i += 1) {
      context.beginPath();
      context.ellipse(35 + i * 22, 26 + Math.sin(i) * 24, 13, 6, i * 0.4, 0, Math.PI * 2);
      context.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

function makeSunTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  const glow = context.createRadialGradient(92, 72, 8, 128, 128, 142);
  glow.addColorStop(0, '#fff7a8');
  glow.addColorStop(0.18, '#ffd35c');
  glow.addColorStop(0.48, '#ff9f1c');
  glow.addColorStop(0.78, '#e85f00');
  glow.addColorStop(1, '#8a2600');
  context.fillStyle = glow;
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 42; i += 1) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 8 + Math.random() * 26;
    const spot = context.createRadialGradient(x, y, 0, x, y, radius);
    spot.addColorStop(0, 'rgba(255,255,190,0.34)');
    spot.addColorStop(0.45, 'rgba(255,120,0,0.16)');
    spot.addColorStop(1, 'rgba(120,20,0,0)');
    context.fillStyle = spot;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export default function SolarPreviewScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
    camera.position.set(0, 2.38, 5.12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x90a8ff, 0.42));
    const sunLight = new THREE.PointLight(0xffd76a, 8, 18);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const root = new THREE.Group();
    root.rotation.x = -0.68;
    root.scale.setScalar(1.02);
    scene.add(root);

    const sunTexture = makeSunTexture();
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(0.43, 64, 42),
      new THREE.MeshStandardMaterial({
        map: sunTexture,
        emissive: 0xff8a00,
        emissiveMap: sunTexture,
        emissiveIntensity: 0.92,
        roughness: 0.72,
      }),
    );
    root.add(sun);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.76, 48, 32),
      new THREE.MeshBasicMaterial({ color: 0xffb42a, transparent: true, opacity: 0.14, depthWrite: false }),
    );
    root.add(glow);

    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x7cecff, transparent: true, opacity: 0.18 });
    const planetGroups = planets.map((planet, index) => {
      const orbit = new THREE.Mesh(new THREE.TorusGeometry(planet.distance, 0.003, 8, 120), orbitMaterial.clone());
      root.add(orbit);

      const group = new THREE.Group();
      const texture = makePlanetTexture(planet);
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(planet.size, 40, 24),
        new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.64,
          metalness: 0.02,
          emissive: new THREE.Color(planet.color),
          emissiveIntensity: 0.04,
        }),
      );
      group.add(body);
      if (planet.ring) {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(planet.size * 1.72, planet.size * 0.075, 8, 96),
          new THREE.MeshBasicMaterial({ color: 0xd6c89a, transparent: true, opacity: 0.68 }),
        );
        ring.rotation.x = Math.PI / 2.45;
        group.add(ring);
      }
      group.userData = { planet, angle: index * 1.1 };
      root.add(group);
      return { group, body, orbit };
    });

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 700;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 7.2;
      positions[i3 + 1] = (Math.random() - 0.5) * 4.2;
      positions[i3 + 2] = -Math.random() * 4.8;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.011, transparent: true, opacity: 0.82 }),
    );
    scene.add(stars);

    let hover = false;
    const setHover = () => { hover = true; };
    const unsetHover = () => { hover = false; };
    mount.addEventListener('pointerenter', setHover);
    mount.addEventListener('pointerleave', unsetHover);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const speed = hover ? 1.85 : 1;
      root.rotation.z = elapsed * 0.055;
      sun.rotation.y = elapsed * 0.18;
      sun.rotation.x = Math.sin(elapsed * 0.3) * 0.04;
      glow.scale.setScalar(1 + Math.sin(elapsed * 2) * 0.035);
      planetGroups.forEach(({ group, body }, index) => {
        const { planet } = group.userData;
        const angle = group.userData.angle + elapsed * planet.speed * 0.34 * speed;
        group.position.set(Math.cos(angle) * planet.distance, Math.sin(angle) * planet.distance, 0);
        body.rotation.y = elapsed * (0.8 + index * 0.08);
      });
      stars.rotation.y = elapsed * 0.025;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      mount.removeEventListener('pointerenter', setHover);
      mount.removeEventListener('pointerleave', unsetHover);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material.map) material.map.dispose();
            if (material.emissiveMap) material.emissiveMap.dispose();
            material.dispose();
          });
        }
      });
    };
  }, []);

  return <div className="solar-preview-scene" ref={mountRef} aria-hidden="true" />;
}

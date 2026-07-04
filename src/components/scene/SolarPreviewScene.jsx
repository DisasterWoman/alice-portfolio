import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const planets = [
  { size: 0.11, distance: 0.72, color: 0xb7b0a0, speed: 1.8 },
  { size: 0.16, distance: 1.0, color: 0xd6974e, speed: 1.35 },
  { size: 0.17, distance: 1.32, color: 0x2aa9ff, speed: 1.06 },
  { size: 0.14, distance: 1.67, color: 0xd5643f, speed: 0.86 },
  { size: 0.25, distance: 2.1, color: 0xc59b55, speed: 0.6 },
];

export default function SolarPreviewScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
    camera.position.set(0, 2.2, 4.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x90a8ff, 0.38));
    const sunLight = new THREE.PointLight(0xffd76a, 8, 18);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const root = new THREE.Group();
    root.rotation.x = -0.72;
    scene.add(root);

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(0.42, 40, 28),
      new THREE.MeshStandardMaterial({
        color: 0xffa51f,
        emissive: 0xff7b00,
        emissiveIntensity: 1.5,
        roughness: 0.48,
      }),
    );
    root.add(sun);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.68, 40, 28),
      new THREE.MeshBasicMaterial({ color: 0xffb42a, transparent: true, opacity: 0.12 }),
    );
    root.add(glow);

    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x7cecff, transparent: true, opacity: 0.22 });
    const planetGroups = planets.map((planet, index) => {
      const orbit = new THREE.Mesh(new THREE.TorusGeometry(planet.distance, 0.003, 8, 120), orbitMaterial.clone());
      root.add(orbit);

      const group = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(planet.size, 28, 18),
        new THREE.MeshStandardMaterial({
          color: planet.color,
          roughness: 0.58,
          metalness: 0.02,
          emissive: planet.color,
          emissiveIntensity: 0.08,
        }),
      );
      group.add(body);
      group.userData = { planet, angle: index * 1.1 };
      root.add(group);
      return { group, body, orbit };
    });

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 420;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 5;
      positions[i3 + 2] = -Math.random() * 4;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.012, transparent: true, opacity: 0.76 }),
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
      root.rotation.z = elapsed * 0.08;
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
          materials.forEach((material) => material.dispose());
        }
      });
    };
  }, []);

  return <div className="solarPreviewScene" ref={mountRef} aria-hidden="true" />;
}

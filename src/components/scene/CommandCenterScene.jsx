import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const panelLabels = ['Booking', 'Analytics', 'Pricing', 'Payments', 'Users', 'API', 'Reports', 'Notify'];

function makeTextSprite(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'rgba(8, 13, 28, 0.76)';
  context.strokeStyle = 'rgba(42, 248, 255, 0.42)';
  context.lineWidth = 3;
  context.roundRect(18, 18, 220, 54, 12);
  context.fill();
  context.stroke();
  context.fillStyle = '#f7fbff';
  context.font = '800 28px Inter, Arial, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, 128, 46);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.92 });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.52, 0.57, 1);
  return sprite;
}

export default function CommandCenterScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060913, 0.048);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0.2, 2.3, 8.4);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.scale.setScalar(0.86);
    scene.add(root);

    const ambient = new THREE.AmbientLight(0x7adfff, 0.45);
    const key = new THREE.PointLight(0x2af8ff, 7.5, 15);
    key.position.set(-2.2, 3.4, 4.2);
    const accent = new THREE.PointLight(0xd9ff45, 3.2, 12);
    accent.position.set(3.4, 1.6, 2.2);
    scene.add(ambient, key, accent);

    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x28f2ff,
      emissive: 0x0aa3b8,
      emissiveIntensity: 0.72,
      roughness: 0.18,
      metalness: 0.06,
      transmission: 0.25,
      thickness: 0.6,
      transparent: true,
      opacity: 0.78,
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.03, 5), coreMaterial);
    root.add(core);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.42, 48, 32),
      new THREE.MeshBasicMaterial({ color: 0x2af8ff, transparent: true, opacity: 0.08, wireframe: true }),
    );
    root.add(shell);

    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xd9ff45, transparent: true, opacity: 0.24 });
    const rings = [1.85, 2.45, 3.05].map((radius, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.006, 8, 160), orbitMaterial.clone());
      ring.rotation.set(Math.PI / 2 + index * 0.38, index * 0.18, index * 0.34);
      root.add(ring);
      return ring;
    });

    const panelMaterial = new THREE.MeshBasicMaterial({
      color: 0x101827,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
    });
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x2af8ff, transparent: true, opacity: 0.5 });
    const panels = panelLabels.map((label, index) => {
      const angle = (index / panelLabels.length) * Math.PI * 2;
      const radius = 3.2 + (index % 2) * 0.35;
      const group = new THREE.Group();
      group.position.set(Math.cos(angle) * radius, Math.sin(index * 1.7) * 0.5, Math.sin(angle) * 1.35);
      group.rotation.set(0.12 * Math.sin(angle), -angle * 0.28, 0.04 * index);

      const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.52, 0.68), panelMaterial.clone());
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(panel.geometry), edgeMaterial.clone());
      const sprite = makeTextSprite(label);
      sprite.position.z = 0.025;
      group.add(panel, edges, sprite);
      root.add(group);
      return group;
    });

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x2af8ff, transparent: true, opacity: 0.18 });
    panels.forEach((panel) => {
      const points = [new THREE.Vector3(0, 0, 0), panel.position.clone().multiplyScalar(0.78)];
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial.clone());
      root.add(line);
    });

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 800;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 16;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 9;
      starPositions[i3 + 2] = -Math.random() * 8 - 1;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xdde8ff, size: 0.018, transparent: true, opacity: 0.72 }),
    );
    scene.add(stars);

    const pointer = new THREE.Vector2();
    const handlePointer = (event) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * -2;
    };
    mount.addEventListener('pointermove', handlePointer);

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
      const speed = reducedMotion ? 0.12 : 1;
      root.rotation.y = elapsed * 0.13 * speed + pointer.x * 0.12;
      root.rotation.x = -0.08 + pointer.y * 0.08;
      core.rotation.x = elapsed * 0.42 * speed;
      core.rotation.y = elapsed * 0.31 * speed;
      shell.rotation.y = -elapsed * 0.16 * speed;
      stars.rotation.y = elapsed * 0.018 * speed;

      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.12 + index * 0.045) * speed;
      });
      panels.forEach((panel, index) => {
        panel.position.y += Math.sin(elapsed * 1.4 + index) * 0.0016 * speed;
        panel.lookAt(camera.position);
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      mount.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material.map) material.map.dispose();
            material.dispose();
          });
        }
      });
    };
  }, []);

  return <div className="commandScene" ref={mountRef} aria-label="Animated command center scene" />;
}

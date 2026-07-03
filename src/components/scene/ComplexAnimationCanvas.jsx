import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function makePlanetMaterial(color, emissive = color, intensity = 0.06) {
  return new THREE.MeshStandardMaterial({
    color,
    emissive,
    emissiveIntensity: intensity,
    roughness: 0.72,
    metalness: 0.02,
  });
}

function makeOrbit(radius, color = '#8eeeff') {
  const points = [];
  for (let i = 0; i <= 240; i += 1) {
    const angle = (i / 240) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }

  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.28 })
  );
}

function makeStarField(count) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const radius = 9 + Math.random() * 28;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi) * 0.6;
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

    const tint = 0.72 + Math.random() * 0.28;
    colors[i * 3] = tint;
    colors[i * 3 + 1] = tint * (0.86 + Math.random() * 0.14);
    colors[i * 3 + 2] = 1;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.035,
      transparent: true,
      opacity: 0.86,
      vertexColors: true,
      depthWrite: false,
    })
  );
}

export default function ComplexAnimationCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 5.2, 12.2);

    scene.add(new THREE.AmbientLight('#8bb8ff', 0.8));

    const sunLight = new THREE.PointLight('#fff0a8', 12, 40);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const fill = new THREE.DirectionalLight('#79ecff', 1.3);
    fill.position.set(-6, 7, 5);
    scene.add(fill);

    const system = new THREE.Group();
    system.rotation.x = -0.18;
    scene.add(system);

    const stars = makeStarField(900);
    scene.add(stars);

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(0.82, 48, 48),
      new THREE.MeshBasicMaterial({ color: '#ffd84d' })
    );
    system.add(sun);

    const sunHalo = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 48, 48),
      new THREE.MeshBasicMaterial({
        color: '#ff9f2e',
        transparent: true,
        opacity: 0.18,
        depthWrite: false,
      })
    );
    system.add(sunHalo);

    const planetSpecs = [
      { radius: 1.55, size: 0.18, speed: 1.45, color: '#8ef5ff', y: 0.02 },
      { radius: 2.25, size: 0.28, speed: 1.08, color: '#ffb15a', y: -0.03 },
      { radius: 3.1, size: 0.34, speed: 0.82, color: '#35d9ff', y: 0.05, moon: true },
      { radius: 4.05, size: 0.26, speed: 0.64, color: '#ff5ca8', y: -0.04 },
      { radius: 5.15, size: 0.52, speed: 0.43, color: '#d9ff45', y: 0.03 },
      { radius: 6.35, size: 0.42, speed: 0.32, color: '#7d70ff', y: -0.02, rings: true },
      { radius: 7.35, size: 0.3, speed: 0.25, color: '#22f2d0', y: 0.06 },
    ];

    const planets = planetSpecs.map((spec, index) => {
      const orbit = makeOrbit(spec.radius, index % 2 ? '#b4f6ff' : '#fff06a');
      orbit.rotation.y = index * 0.05;
      system.add(orbit);

      const pivot = new THREE.Group();
      pivot.rotation.y = index * 0.8;
      system.add(pivot);

      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(spec.size, 32, 32),
        makePlanetMaterial(spec.color, spec.color, 0.12)
      );
      planet.position.set(spec.radius, spec.y, 0);
      planet.castShadow = true;
      planet.receiveShadow = true;
      pivot.add(planet);

      let moonPivot = null;
      if (spec.moon) {
        moonPivot = new THREE.Group();
        moonPivot.position.copy(planet.position);
        const moonOrbit = makeOrbit(0.56, '#ffffff');
        moonOrbit.material.opacity = 0.22;
        moonPivot.add(moonOrbit);
        const moon = new THREE.Mesh(
          new THREE.SphereGeometry(0.07, 16, 16),
          makePlanetMaterial('#f7fbff', '#ffffff', 0.05)
        );
        moon.position.x = 0.56;
        moonPivot.add(moon);
        pivot.add(moonPivot);
      }

      if (spec.rings) {
        const rings = new THREE.Mesh(
          new THREE.RingGeometry(spec.size * 1.35, spec.size * 2.05, 80),
          new THREE.MeshBasicMaterial({
            color: '#f4ff6a',
            transparent: true,
            opacity: 0.58,
            side: THREE.DoubleSide,
          })
        );
        rings.position.copy(planet.position);
        rings.rotation.set(Math.PI / 2.55, 0.24, 0.18);
        pivot.add(rings);
      }

      return { pivot, planet, moonPivot, speed: spec.speed, baseY: spec.y };
    });

    const comet = new THREE.Group();
    const cometHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 18, 18),
      new THREE.MeshBasicMaterial({ color: '#ffffff' })
    );
    const cometTail = new THREE.Mesh(
      new THREE.ConeGeometry(0.08, 0.9, 18),
      new THREE.MeshBasicMaterial({ color: '#62f6ff', transparent: true, opacity: 0.44 })
    );
    cometTail.rotation.z = Math.PI / 2;
    cometTail.position.x = -0.45;
    comet.add(cometHead, cometTail);
    system.add(comet);

    const clock = new THREE.Clock();
    let frameId = 0;

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      system.rotation.y = elapsed * 0.055;
      stars.rotation.y = elapsed * 0.012;
      sun.scale.setScalar(1 + Math.sin(elapsed * 2.4) * 0.04);
      sunHalo.scale.setScalar(1 + Math.sin(elapsed * 1.7) * 0.08);

      planets.forEach(({ pivot, planet, moonPivot, speed, baseY }, index) => {
        pivot.rotation.y = elapsed * speed + index * 0.8;
        planet.rotation.y = elapsed * (1.2 + index * 0.08);
        planet.position.y = baseY + Math.sin(elapsed * 1.4 + index) * 0.035;
        if (moonPivot) moonPivot.rotation.y = elapsed * 2.4;
      });

      const cometAngle = elapsed * 0.46;
      comet.position.set(
        Math.cos(cometAngle) * 6.1,
        0.8 + Math.sin(elapsed * 1.1) * 0.45,
        Math.sin(cometAngle) * 2.2
      );
      comet.rotation.y = -cometAngle;

      camera.position.x = Math.sin(elapsed * 0.16) * 1.2;
      camera.position.y = 5.2 + Math.sin(elapsed * 0.21) * 0.35;
      camera.lookAt(0.8, 0, 0);

      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
      });
    };
  }, []);

  return <div className="complexCanvas" ref={mountRef} aria-label="Animated solar system scene" />;
}

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function makeTexture(size, paint) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  paint(ctx, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function makeSunTexture() {
  return makeTexture(512, (ctx, size) => {
    const gradient = ctx.createRadialGradient(size * 0.38, size * 0.34, 10, size / 2, size / 2, size * 0.56);
    gradient.addColorStop(0, '#fff8bd');
    gradient.addColorStop(0.28, '#ffd94c');
    gradient.addColorStop(0.58, '#ff8b24');
    gradient.addColorStop(1, '#8e230b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 220; i += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = 8 + Math.random() * 34;
      ctx.globalAlpha = 0.08 + Math.random() * 0.12;
      ctx.fillStyle = Math.random() > 0.45 ? '#fff3a1' : '#ff5a1f';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  });
}

function makePlanetTexture({ base, accent, light, bands = false, clouds = false }) {
  return makeTexture(512, (ctx, size) => {
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, light);
    gradient.addColorStop(0.42, base);
    gradient.addColorStop(1, accent);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    if (bands) {
      for (let y = 0; y < size; y += 18 + Math.random() * 20) {
        ctx.globalAlpha = 0.18 + Math.random() * 0.18;
        ctx.fillStyle = Math.random() > 0.5 ? light : accent;
        ctx.fillRect(0, y, size, 6 + Math.random() * 20);
      }
    }

    for (let i = 0; i < 120; i += 1) {
      ctx.globalAlpha = 0.06 + Math.random() * 0.14;
      ctx.fillStyle = Math.random() > 0.5 ? light : accent;
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * size,
        Math.random() * size,
        12 + Math.random() * 56,
        4 + Math.random() * 22,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    if (clouds) {
      for (let i = 0; i < 90; i += 1) {
        ctx.globalAlpha = 0.08 + Math.random() * 0.16;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(
          Math.random() * size,
          Math.random() * size,
          18 + Math.random() * 70,
          3 + Math.random() * 12,
          Math.random() * Math.PI,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  });
}

function makeGlowTexture(color) {
  return makeTexture(256, (ctx, size) => {
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.28, color);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  });
}

function makePlanetMaterial(texture, color, emissive = '#000000', intensity = 0.02) {
  return new THREE.MeshStandardMaterial({
    color,
    map: texture,
    emissive,
    emissiveIntensity: intensity,
    roughness: 0.82,
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
    const radius = 8 + Math.random() * 44;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi) * 0.72;
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
      size: 0.028,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      depthWrite: false,
    })
  );
}

function makeAsteroidBelt(count, innerRadius, outerRadius) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.08;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
    colors[i * 3] = 0.45 + Math.random() * 0.35;
    colors[i * 3 + 1] = 0.58 + Math.random() * 0.32;
    colors[i * 3 + 2] = 0.72 + Math.random() * 0.26;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.025,
      transparent: true,
      opacity: 0.58,
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
    renderer.domElement.style.cursor = 'grab';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 100);
    camera.position.set(0.3, 5.8, 15.6);

    scene.add(new THREE.AmbientLight('#6f8fd1', 0.42));

    const sunLight = new THREE.PointLight('#fff0a8', 18, 54);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const fill = new THREE.DirectionalLight('#79ecff', 0.9);
    fill.position.set(-6, 7, 5);
    scene.add(fill);

    const system = new THREE.Group();
    system.rotation.x = -0.18;
    scene.add(system);

    const stars = makeStarField(6200);
    scene.add(stars);

    const brightStars = makeStarField(950);
    brightStars.material.size = 0.06;
    brightStars.material.opacity = 0.96;
    scene.add(brightStars);

    const glowStars = makeStarField(260);
    glowStars.material.size = 0.12;
    glowStars.material.opacity = 0.42;
    scene.add(glowStars);

    const sunTexture = makeSunTexture();
    const glowTexture = makeGlowTexture('rgba(255, 183, 55, 0.95)');
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(0.9, 80, 80),
      new THREE.MeshBasicMaterial({ map: sunTexture, color: '#fff0a8' })
    );
    system.add(sun);

    const sunHalo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        color: '#ffb347',
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    sunHalo.scale.set(3.1, 3.1, 1);
    system.add(sunHalo);

    const planetSpecs = [
      { name: 'Mercury', radius: 1.45, size: 0.15, speed: 1.45, color: '#9c9a92', y: 0.02, texture: { base: '#8f8a7a', accent: '#3c3a36', light: '#ddd7c4' } },
      { name: 'Venus', radius: 2.12, size: 0.26, speed: 1.08, color: '#c98b3d', y: -0.03, texture: { base: '#b66d2b', accent: '#5f2f16', light: '#f2bd70', clouds: true } },
      { name: 'Earth', radius: 2.92, size: 0.31, speed: 0.82, color: '#4aa5ff', y: 0.05, moon: true, texture: { base: '#235fbf', accent: '#184076', light: '#58c7ff', clouds: true } },
      { name: 'Mars', radius: 3.72, size: 0.24, speed: 0.64, color: '#c66a42', y: -0.04, texture: { base: '#a94928', accent: '#42180e', light: '#ee9a5d' } },
      { name: 'Jupiter', radius: 4.95, size: 0.55, speed: 0.43, color: '#d4a15f', y: 0.03, texture: { base: '#b98243', accent: '#6a3b1f', light: '#f5d192', bands: true } },
      { name: 'Saturn', radius: 6.22, size: 0.43, speed: 0.32, color: '#c8b78a', y: -0.02, rings: true, texture: { base: '#b9a56f', accent: '#5c4b31', light: '#efe0b1', bands: true } },
      { name: 'Uranus', radius: 7.28, size: 0.31, speed: 0.25, color: '#78d8eb', y: 0.06, texture: { base: '#57b9cf', accent: '#1e6173', light: '#b8f7ff', bands: true } },
    ];

    const asteroidBelt = makeAsteroidBelt(760, 3.95, 4.48);
    system.add(asteroidBelt);
    const orbitLines = [];
    let moonTarget = null;

    const planets = planetSpecs.map((spec, index) => {
      const orbit = makeOrbit(spec.radius, index % 2 ? '#b4f6ff' : '#fff06a');
      orbit.rotation.y = index * 0.05;
      system.add(orbit);
      orbitLines.push(orbit);

      const pivot = new THREE.Group();
      pivot.rotation.y = index * 0.8;
      system.add(pivot);

      const planetTexture = makePlanetTexture(spec.texture);
      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(spec.size, 48, 48),
        makePlanetMaterial(planetTexture, spec.color, spec.color, 0.04)
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
        orbitLines.push(moonOrbit);
        const moon = new THREE.Mesh(
          new THREE.SphereGeometry(0.07, 20, 20),
          makePlanetMaterial(
            makePlanetTexture({ base: '#c9c9c4', accent: '#5d5d5a', light: '#f7f7ef' }),
            '#f7fbff',
            '#ffffff',
            0.02
          )
        );
        moon.position.x = 0.56;
        moonPivot.add(moon);
        pivot.add(moonPivot);
        moonTarget = { name: 'Moon', radius: spec.radius + 0.56, size: 0.07, pivot: moonPivot, planet: moon, moonPivot: null, speed: spec.speed, baseY: spec.y };
      }

      if (spec.rings) {
        const rings = new THREE.Mesh(
          new THREE.RingGeometry(spec.size * 1.35, spec.size * 2.05, 80),
          new THREE.MeshBasicMaterial({
            color: '#e9d8a4',
            transparent: true,
            opacity: 0.72,
            side: THREE.DoubleSide,
          })
        );
        rings.position.copy(planet.position);
        rings.rotation.set(Math.PI / 2.55, 0.24, 0.18);
        pivot.add(rings);
      }

      return { name: spec.name, radius: spec.radius, size: spec.size, pivot, planet, moonPivot, speed: spec.speed, baseY: spec.y };
    });
    const selectableObjects = [
      { name: 'Sun', radius: 0, size: 0.9, pivot: system, planet: sun, moonPivot: null, speed: 0, baseY: 0 },
      ...planets,
      moonTarget,
    ].filter(Boolean);

    const probe = new THREE.Group();
    const probeBody = new THREE.Mesh(
      new THREE.ConeGeometry(0.07, 0.24, 18),
      new THREE.MeshBasicMaterial({ color: '#ffffff' })
    );
    probeBody.rotation.z = -Math.PI / 2;
    const probeGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        color: '#62f6ff',
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    probeGlow.scale.set(0.35, 0.35, 1);
    probe.add(probeBody, probeGlow);
    probe.visible = false;
    system.add(probe);

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
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const cameraGoal = {
      position: new THREE.Vector3(0.3, 5.8, 15.6),
      lookAt: new THREE.Vector3(0.2, 0, 0),
    };
    const cameraLook = new THREE.Vector3(0.2, 0, 0);
    const cameraSpherical = new THREE.Spherical();
    const cameraOffset = new THREE.Vector3();
    const syncCameraSpherical = () => {
      cameraOffset.copy(cameraGoal.position).sub(cameraGoal.lookAt);
      cameraSpherical.setFromVector3(cameraOffset);
    };
    const applyManualCamera = () => {
      cameraSpherical.phi = Math.max(0.36, Math.min(Math.PI - 0.28, cameraSpherical.phi));
      cameraSpherical.radius = Math.max(2.4, Math.min(22, cameraSpherical.radius));
      cameraGoal.position.copy(cameraGoal.lookAt).add(cameraOffset.setFromSpherical(cameraSpherical));
    };
    syncCameraSpherical();
    let launchStart = -100;
    let orbitSpeedMultiplier = 1;
    let cinematicEnabled = true;
    let hoveredPlanet = null;
    let focusedPlanet = null;
    let frameId = 0;
    let isDragging = false;
    let dragMoved = false;
    let suppressClick = false;
    let lastPointerX = 0;
    let lastPointerY = 0;

    const planetWorldPosition = new THREE.Vector3();
    const focusDirection = new THREE.Vector3();
    const focusOffset = new THREE.Vector3();

    const updateFocusedCameraGoal = (planet) => {
      if (!planet) return;
      planet.planet.updateWorldMatrix(true, false);
      planet.planet.getWorldPosition(planetWorldPosition);
      cameraGoal.lookAt.copy(planetWorldPosition);

      focusDirection.set(planetWorldPosition.x, 0, planetWorldPosition.z);
      if (focusDirection.lengthSq() < 0.001) focusDirection.set(1, 0, 0);
      focusDirection.normalize();

      const sideDistance = Math.max(1.15, planet.size * 3.5);
      const lift = Math.max(0.72, planet.size * 2.2);
      focusOffset
        .copy(focusDirection)
        .multiplyScalar(sideDistance)
        .add(new THREE.Vector3(0, lift, 1.45 + planet.size * 2.2));
      cameraGoal.position.copy(planetWorldPosition).add(focusOffset);
    };

    const setCameraToPlanet = (planet) => {
      if (!planet) return;
      focusedPlanet = planet;
      updateFocusedCameraGoal(planet);
      syncCameraSpherical();
    };

    const focusPlanet = (event) => {
      const planet = selectableObjects.find((item) => item.name === event.detail?.planet);
      setCameraToPlanet(planet);
    };

    const resetCamera = () => {
      focusedPlanet = null;
      cameraGoal.position.set(0.3, 5.8, 15.6);
      cameraGoal.lookAt.set(0.2, 0, 0);
      syncCameraSpherical();
    };

    const launchProbe = () => {
      launchStart = clock.getElapsedTime();
      probe.visible = true;
    };

    const setOrbitSpeed = (event) => {
      orbitSpeedMultiplier = Number(event.detail?.speed || 1);
    };

    const toggleOrbits = (event) => {
      orbitLines.forEach((line) => {
        line.visible = Boolean(event.detail?.enabled);
      });
    };

    const toggleCinematic = (event) => {
      cinematicEnabled = Boolean(event.detail?.enabled);
    };

    const setStarDensity = (event) => {
      const density = Math.max(0.3, Math.min(1, Number(event.detail?.density || 100) / 100));
      stars.geometry.setDrawRange(0, Math.floor(6200 * density));
      brightStars.geometry.setDrawRange(0, Math.floor(950 * density));
      glowStars.geometry.setDrawRange(0, Math.floor(260 * density));
    };

    const updatePointer = (event) => {
      if (isDragging) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(selectableObjects.map((item) => item.planet), false);
      const nextPlanet = intersects.length
        ? selectableObjects.find((item) => item.planet === intersects[0].object)
        : null;

      if (hoveredPlanet && hoveredPlanet !== nextPlanet) {
        hoveredPlanet.planet.scale.setScalar(1);
        if ('emissiveIntensity' in hoveredPlanet.planet.material) {
          hoveredPlanet.planet.material.emissiveIntensity = hoveredPlanet.name === 'Sun' ? 1 : 0.04;
        }
      }

      hoveredPlanet = nextPlanet;
      renderer.domElement.style.cursor = hoveredPlanet ? 'pointer' : 'grab';

      if (hoveredPlanet) {
        hoveredPlanet.planet.scale.setScalar(1.16);
        if ('emissiveIntensity' in hoveredPlanet.planet.material) {
          hoveredPlanet.planet.material.emissiveIntensity = hoveredPlanet.name === 'Sun' ? 1.35 : 0.18;
        }
      }
    };

    const clickPlanet = () => {
      if (suppressClick) {
        suppressClick = false;
        return;
      }
      if (!hoveredPlanet) return;
      setCameraToPlanet(hoveredPlanet);
      window.dispatchEvent(new CustomEvent('space-selected-planet', { detail: { planet: hoveredPlanet.name } }));
    };

    const startDrag = (event) => {
      if (!event.isPrimary || event.button !== 0) return;
      isDragging = true;
      focusedPlanet = null;
      dragMoved = false;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      renderer.domElement.style.cursor = 'grabbing';
      renderer.domElement.setPointerCapture?.(event.pointerId);
    };

    const dragCamera = (event) => {
      if (!isDragging) {
        updatePointer(event);
        return;
      }
      const dx = event.clientX - lastPointerX;
      const dy = event.clientY - lastPointerY;
      if (Math.abs(dx) + Math.abs(dy) > 3) dragMoved = true;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      cameraSpherical.theta -= dx * 0.006;
      cameraSpherical.phi -= dy * 0.005;
      applyManualCamera();
    };

    const stopDrag = (event) => {
      if (!isDragging) return;
      isDragging = false;
      suppressClick = dragMoved;
      renderer.domElement.releasePointerCapture?.(event.pointerId);
      renderer.domElement.style.cursor = hoveredPlanet ? 'pointer' : 'grab';
    };

    const zoomCamera = (event) => {
      event.preventDefault();
      const zoomAmount = event.deltaY * 0.006;
      cameraSpherical.radius += zoomAmount;
      applyManualCamera();
    };

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

      system.rotation.y = elapsed * 0.055 * orbitSpeedMultiplier;
      stars.rotation.y = elapsed * 0.012;
      brightStars.rotation.y = -elapsed * 0.018;
      glowStars.rotation.y = elapsed * 0.007;
      asteroidBelt.rotation.y = elapsed * 0.08;
      sun.rotation.y = elapsed * 0.08;
      sun.scale.setScalar(1 + Math.sin(elapsed * 2.4) * 0.025);
      sunHalo.scale.setScalar(1 + Math.sin(elapsed * 1.7) * 0.08);

      planets.forEach(({ pivot, planet, moonPivot, speed, baseY }, index) => {
        pivot.rotation.y = elapsed * speed * orbitSpeedMultiplier + index * 0.8;
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

      if (probe.visible) {
        const progress = Math.min((elapsed - launchStart) / 5, 1);
        const angle = progress * Math.PI;
        const x = 2.92 + (3.72 - 2.92) * progress;
        probe.position.set(
          x,
          0.12 + Math.sin(angle) * 0.9,
          Math.sin(progress * Math.PI * 2) * 0.42
        );
        probe.rotation.y = progress * Math.PI * 2;
        if (progress >= 1) probe.visible = false;
      }

      if (focusedPlanet) updateFocusedCameraGoal(focusedPlanet);

      const idleOffset = cinematicEnabled
        ? new THREE.Vector3(Math.sin(elapsed * 0.16) * 0.22, Math.sin(elapsed * 0.21) * 0.12, 0)
        : new THREE.Vector3(0, 0, 0);
      camera.position.lerp(cameraGoal.position.clone().add(idleOffset), 0.045);
      cameraLook.lerp(cameraGoal.lookAt, 0.055);
      camera.lookAt(cameraLook);

      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    window.addEventListener('space-focus-planet', focusPlanet);
    window.addEventListener('space-reset-camera', resetCamera);
    window.addEventListener('space-launch-probe', launchProbe);
    window.addEventListener('space-set-orbit-speed', setOrbitSpeed);
    window.addEventListener('space-toggle-orbits', toggleOrbits);
    window.addEventListener('space-toggle-cinematic', toggleCinematic);
    window.addEventListener('space-set-star-density', setStarDensity);
    renderer.domElement.addEventListener('pointermove', updatePointer);
    renderer.domElement.addEventListener('pointerdown', startDrag);
    renderer.domElement.addEventListener('pointermove', dragCamera);
    renderer.domElement.addEventListener('pointerup', stopDrag);
    renderer.domElement.addEventListener('pointercancel', stopDrag);
    renderer.domElement.addEventListener('wheel', zoomCamera, { passive: false });
    renderer.domElement.addEventListener('click', clickPlanet);
    renderer.domElement.style.touchAction = 'none';

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('space-focus-planet', focusPlanet);
      window.removeEventListener('space-reset-camera', resetCamera);
      window.removeEventListener('space-launch-probe', launchProbe);
      window.removeEventListener('space-set-orbit-speed', setOrbitSpeed);
      window.removeEventListener('space-toggle-orbits', toggleOrbits);
      window.removeEventListener('space-toggle-cinematic', toggleCinematic);
      window.removeEventListener('space-set-star-density', setStarDensity);
      renderer.domElement.removeEventListener('pointermove', updatePointer);
      renderer.domElement.removeEventListener('pointerdown', startDrag);
      renderer.domElement.removeEventListener('pointermove', dragCamera);
      renderer.domElement.removeEventListener('pointerup', stopDrag);
      renderer.domElement.removeEventListener('pointercancel', stopDrag);
      renderer.domElement.removeEventListener('wheel', zoomCamera);
      renderer.domElement.removeEventListener('click', clickPlanet);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      });
    };
  }, []);

  return <div className="complexCanvas" ref={mountRef} aria-label="Animated solar system scene" />;
}

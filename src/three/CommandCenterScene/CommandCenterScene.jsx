import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import './CommandCenterScene.css';

const panelLayout = [
  { label: 'Projects', meta: 'Selected work', target: '#projects', color: '#d9ff45', position: [2.06, 0.48, 1], node: [1.26, 0.24, 0.18] },
  { label: '3D', meta: 'WebGL systems', target: '#projects', color: '#2af8ff', position: [0.36, 1.36, 1], node: [0.38, 0.74, 0.2] },
  { label: 'Motion', meta: 'GSAP layers', target: '#build', color: '#45f4ce', position: [-2.04, -0.92, 1], node: [-1.12, -0.52, 0.18] },
  { label: 'Architecture', meta: 'Structure & logic', target: '#experience', color: '#7d70ff', position: [-2.08, 0.48, 1], node: [-1.18, 0.2, 0.16] },
  { label: 'Performance', meta: 'Fast interfaces', target: '#stack', color: '#b8ff3f', position: [-0.22, -0.08, 1], node: [-0.26, -0.08, 0.22] },
  { label: 'Stack', meta: 'Tools I use', target: '#stack', color: '#2af8ff', position: [1.68, -0.74, 1], node: [0.98, -0.44, 0.18] },
];

function drawSparkle(context, cx, cy, size) {
  context.beginPath();
  context.moveTo(cx, cy - size);
  context.quadraticCurveTo(cx + size * 0.16, cy - size * 0.18, cx + size, cy);
  context.quadraticCurveTo(cx + size * 0.16, cy + size * 0.18, cx, cy + size);
  context.quadraticCurveTo(cx - size * 0.16, cy + size * 0.18, cx - size, cy);
  context.quadraticCurveTo(cx - size * 0.16, cy - size * 0.18, cx, cy - size);
  context.closePath();
}

function drawSparklesIcon(context, x, y) {
  context.save();
  context.fillStyle = '#d9ff45';
  context.shadowColor = 'rgba(217, 255, 69, 0.72)';
  context.shadowBlur = 18;
  drawSparkle(context, x, y, 26);
  context.fill();
  context.shadowBlur = 10;
  drawSparkle(context, x + 38, y - 28, 11);
  context.fill();
  drawSparkle(context, x - 30, y + 24, 8);
  context.fill();
  context.restore();
}

function makeTextSprite(text, meta, accentColor) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 320;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = context.createLinearGradient(52, 54, 980, 250);
  gradient.addColorStop(0, 'rgba(4, 10, 22, 0.96)');
  gradient.addColorStop(0.72, 'rgba(10, 20, 38, 0.92)');
  gradient.addColorStop(1, 'rgba(4, 10, 22, 0.96)');

  context.fillStyle = gradient;
  context.strokeStyle = accentColor;
  context.globalAlpha = 0.7;
  context.lineWidth = 4;
  context.roundRect(44, 58, 936, 190, 38);
  context.fill();
  context.stroke();
  context.globalAlpha = 1;
  drawSparklesIcon(context, 132, 132);
  context.fillStyle = '#d9ff45';
  const fontSize = text.length > 10 ? 58 : 66;
  context.font = `800 ${fontSize}px Inter, Arial, sans-serif`;
  context.textAlign = 'left';
  context.fillText(text, 216, 138);
  context.fillStyle = 'rgba(217, 255, 69, 0.68)';
  context.font = '650 36px Inter, Arial, sans-serif';
  context.fillText(meta, 216, 184);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.96,
    depthTest: false,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.74, 0.58, 1);
  sprite.renderOrder = 20;
  return sprite;
}

function smoothScrollTo(target) {
  const node = document.querySelector(target);
  if (!node) return;
  const header = document.querySelector('.site-header');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const top = node.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function writeSpherePoint(positions, index, radius) {
  const offset = 2 / radius.count;
  const y = index * offset - 1 + offset / 2;
  const r = Math.sqrt(1 - y * y);
  const phi = index * 2.399963229728653;
  const i3 = index * 3;
  positions[i3] = Math.cos(phi) * r * radius.size;
  positions[i3 + 1] = y * radius.size;
  positions[i3 + 2] = Math.sin(phi) * r * radius.size;
}

export default function CommandCenterScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060913, 0.048);

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0.05, 0.95, 9.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.scale.setScalar(0.96);
    scene.add(root);

    const ambient = new THREE.AmbientLight(0x7adfff, 0.45);
    const key = new THREE.PointLight(0x2af8ff, 7.5, 15);
    key.position.set(-2.2, 3.4, 4.2);
    const accent = new THREE.PointLight(0xd9ff45, 3.2, 12);
    accent.position.set(3.4, 1.6, 2.2);
    const rim = new THREE.DirectionalLight(0x88fff1, 2.6);
    rim.position.set(2.8, -1.8, 4.8);
    scene.add(ambient, key, accent, rim);

    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x091c25,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.02, 5), coreMaterial);
    root.add(core);

    const surface = new THREE.Mesh(
      new THREE.SphereGeometry(1.34, 48, 32),
      new THREE.MeshBasicMaterial({
        color: 0x2af8ff,
        transparent: true,
        opacity: 0.13,
        wireframe: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    root.add(surface);

    const globePointCount = 1550;
    const globePointGeometry = new THREE.BufferGeometry();
    const globePositions = new Float32Array(globePointCount * 3);
    for (let i = 0; i < globePointCount; i += 1) {
      writeSpherePoint(globePositions, i, { count: globePointCount, size: 1.28 + Math.random() * 0.18 });
    }
    globePointGeometry.setAttribute('position', new THREE.BufferAttribute(globePositions, 3));
    const globePoints = new THREE.Points(
      globePointGeometry,
      new THREE.PointsMaterial({
        color: 0x45f4ce,
        size: 0.012,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    root.add(globePoints);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(1.64, 48, 32),
      new THREE.MeshBasicMaterial({
        color: 0x2af8ff,
        transparent: true,
        opacity: 0.055,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    root.add(glow);

    const atmosphereMaterial = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
      uniforms: {
        time: { value: 0 },
        intensity: { value: 0.28 },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform float intensity;
        uniform float time;
        void main() {
          float rim = pow(1.0 - abs(vNormal.z), 3.2);
          float wave = 0.78 + sin(time * 1.4 + vNormal.y * 8.0) * 0.08;
          gl_FragColor = vec4(0.18, 0.96, 1.0, rim * intensity * wave);
        }
      `,
    });
    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.7, 64, 42), atmosphereMaterial);
    root.add(atmosphere);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.52, 36, 24),
      new THREE.MeshBasicMaterial({ color: 0xd9ff45, transparent: true, opacity: 0.024, wireframe: true }),
    );
    root.add(shell);

    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x2af8ff, transparent: true, opacity: 0.2 });
    const rings = [1.62, 1.96, 2.28, 2.64, 2.94].map((radius, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.006, 8, 160), orbitMaterial.clone());
      ring.rotation.set(Math.PI / 2 + index * 0.3, index * 0.15, index * 0.26);
      ring.userData.baseOpacity = index === 0 ? 0.22 : 0.11;
      ring.material.opacity = ring.userData.baseOpacity;
      if (index % 2) ring.material.color.set(0xd9ff45);
      root.add(ring);
      return ring;
    });

    const planetMaterial = [
      new THREE.MeshStandardMaterial({ color: 0xd9ff45, emissive: 0x7ea51a, emissiveIntensity: 0.72, roughness: 0.28, metalness: 0.18 }),
      new THREE.MeshStandardMaterial({ color: 0x2af8ff, emissive: 0x0a8f9a, emissiveIntensity: 0.68, roughness: 0.24, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x7d70ff, emissive: 0x332f8f, emissiveIntensity: 0.62, roughness: 0.3, metalness: 0.16 }),
    ];
    const orbitDots = [1.54, 1.9, 2.24, 2.6, 2.06, 2.38].map((radius, index) => {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.048 + (index % 2) * 0.018, 22, 14),
        planetMaterial[index % planetMaterial.length].clone(),
      );
      const shine = new THREE.Mesh(
        new THREE.SphereGeometry(0.014, 12, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.82 }),
      );
      shine.position.set(-0.018, 0.022, 0.03);
      dot.add(shine);
      dot.userData = {
        radius,
        angle: index * 1.08,
        speed: 0.012 + index * 0.002,
        tilt: 0.18 + index * 0.065,
        depth: 0.44 + index * 0.035,
      };
      root.add(dot);
      return dot;
    });

    const panelNodes = [];
    const panelLines = [];
    const interactiveSprites = [];
    const panels = panelLayout.map(({ label, meta, color, target, position, node: nodePositionArray }, index) => {
      const group = new THREE.Group();
      group.position.set(...position);

      const sprite = makeTextSprite(label, meta, color);
      sprite.position.z = 0.025;
      sprite.scale.set(1.84, 0.64, 1);
      sprite.userData = { index, label, target };
      sprite.material.opacity = 0;
      group.add(sprite);
      group.userData = {
        basePosition: new THREE.Vector3(...position),
        nodePosition: new THREE.Vector3(...nodePositionArray),
        introDelay: 0.42 + index * 0.08,
      };
      root.add(group);
      interactiveSprites.push(sprite);

      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
      });
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.035, 18, 12), nodeMaterial);
      node.position.set(...panelLayout[index].node);
      node.userData.baseScale = 1;
      root.add(node);
      panelNodes.push(node);

      return group;
    });

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x2af8ff, transparent: true, opacity: 0.18 });
    panels.forEach((panel, index) => {
      const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
      const line = new THREE.Line(geometry, lineMaterial.clone());
      line.material.color.set(panelLayout[index].color);
      line.material.opacity = 0.08;
      root.add(line);
      panelLines.push(line);
    });

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 4200;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const palette = [
      new THREE.Color(0xdde8ff),
      new THREE.Color(0x8effff),
      new THREE.Color(0xb8ff3f),
      new THREE.Color(0xffffff),
    ];
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 16;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 9;
      starPositions[i3 + 2] = -Math.random() * 8 - 1;
      const color = palette[Math.floor(Math.random() * palette.length)];
      const brightness = 0.42 + Math.random() * 0.58;
      starColors[i3] = color.r * brightness;
      starColors[i3 + 1] = color.g * brightness;
      starColors[i3 + 2] = color.b * brightness;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        size: 0.009,
        transparent: true,
        opacity: 0.82,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    scene.add(stars);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 320;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleBasePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 1.7 + Math.random() * 2.1;
      const angle = Math.random() * Math.PI * 2;
      const i3 = i * 3;
      particleBasePositions[i3] = Math.cos(angle) * radius;
      particleBasePositions[i3 + 1] = (Math.random() - 0.5) * 3.2;
      particleBasePositions[i3 + 2] = Math.sin(angle) * radius * 0.62;
      particlePositions[i3] = particleBasePositions[i3];
      particlePositions[i3 + 1] = particleBasePositions[i3 + 1];
      particlePositions[i3 + 2] = particleBasePositions[i3 + 2];
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const commandParticles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x45f4ce,
        size: 0.026,
        transparent: true,
        opacity: 0.36,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    root.add(commandParticles);

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const cursorPointer = new THREE.Vector2();
    let activeIndex = -1;
    let focusedIndex = 0;
    let hoverBoost = 0;
    let aliveBoost = 0;
    let sphereBoost = 0;
    let sphereHover = false;
    let pulseUntil = 0;
    let aliveActive = false;

    const handlePointer = (event) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * -2;
      cursorPointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      cursorPointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(cursorPointer, camera);
      const [intersection] = raycaster.intersectObjects(interactiveSprites, false);
      const [sphereIntersection] = raycaster.intersectObjects([surface, core], false);
      activeIndex = intersection?.object?.userData.index ?? -1;
      sphereHover = Boolean(sphereIntersection);
      mount.style.cursor = activeIndex >= 0 ? 'pointer' : '';
    };
    const handlePointerLeave = () => {
      pointer.set(0, 0);
      activeIndex = -1;
      sphereHover = false;
      mount.style.cursor = '';
    };
    const handleClick = () => {
      if (activeIndex >= 0) {
        focusedIndex = activeIndex;
        smoothScrollTo(panelLayout[activeIndex].target);
        return;
      }
      focusedIndex = -1;
    };
    const handleAliveIntent = (event) => {
      aliveActive = Boolean(event.detail?.active);
      if (event.detail?.pulse) pulseUntil = clock.getElapsedTime() + 1;
    };
    mount.addEventListener('pointermove', handlePointer);
    mount.addEventListener('pointerleave', handlePointerLeave);
    mount.addEventListener('click', handleClick);
    window.addEventListener('hero:alive-intent', handleAliveIntent);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      if (width < 2 || height < 2) return;
      const viewportWidth = window.innerWidth || width;
      const isMobile = viewportWidth < 560 || width < 560;
      const isTablet = viewportWidth < 900 || width < 760;
      const aspect = width / Math.max(height, 1);
      const sceneScale = isMobile ? 0.58 : isTablet ? 0.78 : 0.96;

      root.scale.setScalar(sceneScale);
      camera.position.z = isMobile ? 10.9 : isTablet ? 9.5 : aspect > 1.55 ? 8.55 : 8.25;
      camera.position.y = isMobile ? 0.78 : isTablet ? 0.88 : 0.94;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      hoverBoost += ((activeIndex >= 0 ? 1 : 0) - hoverBoost) * 0.08;
      aliveBoost += ((aliveActive ? 1 : 0) - aliveBoost) * 0.07;
      sphereBoost += ((sphereHover ? 1 : 0) - sphereBoost) * 0.06;
      const focusBoost = focusedIndex >= 0 ? 0.34 : 0;
      const pulseFalloff = elapsed < pulseUntil ? Math.max(0, pulseUntil - elapsed) : 0;
      const interaction = Math.max(hoverBoost, aliveBoost, sphereBoost * 0.62, focusBoost, pulseFalloff);
      const speed = reducedMotion ? 0.08 : 0.26 + interaction * 0.12;
      const pulse = 1 + Math.sin(elapsed * 3.2) * 0.01 * interaction;

      root.rotation.y = pointer.x * 0.052;
      root.rotation.x = -0.04 + pointer.y * 0.034;
      core.scale.setScalar(pulse);
      surface.scale.setScalar(1 + interaction * 0.018 + pulseFalloff * 0.035);
      glow.scale.setScalar(1 + interaction * 0.08 + pulseFalloff * 0.12);
      coreMaterial.opacity = 0.46 + interaction * 0.16;
      glow.material.opacity = 0.055 + interaction * 0.065;
      atmosphereMaterial.uniforms.time.value = elapsed;
      atmosphereMaterial.uniforms.intensity.value = 0.26 + interaction * 0.18;
      shell.material.opacity = 0.026 + interaction * 0.026;
      globePoints.material.opacity = 0.86 + interaction * 0.12;
      commandParticles.material.opacity = 0.42 + interaction * 0.16;

      core.rotation.x = elapsed * 0.2 * speed;
      core.rotation.y = elapsed * 0.16 * speed;
      surface.rotation.y = elapsed * 0.035 * speed;
      surface.rotation.x = Math.sin(elapsed * 0.25) * 0.03;
      shell.rotation.y = -elapsed * 0.055 * speed;
      globePoints.rotation.y = elapsed * 0.038 * speed;
      globePoints.rotation.x = Math.sin(elapsed * 0.18) * 0.04;
      atmosphere.rotation.y = elapsed * 0.014 * speed;
      commandParticles.rotation.y = -elapsed * 0.024 * speed;
      commandParticles.rotation.z = Math.sin(elapsed * 0.12) * 0.024;
      stars.rotation.y = elapsed * 0.008 * speed;

      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.035 + index * 0.012) * speed;
        ring.material.opacity = ring.userData.baseOpacity + interaction * 0.055;
      });
      orbitDots.forEach((dot, index) => {
        const angle = dot.userData.angle + elapsed * dot.userData.speed * speed;
        const labelFocus = focusedIndex === index || activeIndex === index;
        const orbitPulse = labelFocus ? 1.22 : 1;
        dot.position.set(
          Math.cos(angle) * dot.userData.radius,
          Math.sin(angle * 1.08) * dot.userData.tilt,
          Math.sin(angle) * dot.userData.radius * dot.userData.depth,
        );
        dot.scale.setScalar(orbitPulse);
        dot.material.opacity = labelFocus ? 0.98 : 0.56 + Math.sin(elapsed * 1.2 + index) * 0.12;
      });
      panels.forEach((panel, index) => {
        const intro = Math.min(1, Math.max(0, (elapsed - panel.userData.introDelay) / 0.55));
        const easedIntro = 1 - (1 - intro) ** 3;
        const isActive = activeIndex === index || focusedIndex === index;
        const isHovered = activeIndex === index;
        const scaleTarget = 0.96 + easedIntro * 0.04;
        const sprite = panel.children[0];
        const nodePosition = panel.userData.nodePosition;

        panel.position.copy(panel.userData.basePosition);
        panel.scale.setScalar(scaleTarget);
        panel.lookAt(camera.position);
        sprite.material.opacity = isActive ? 1 : 0.76 + easedIntro * 0.2;
        panelLines[index].material.opacity = isActive ? 0.46 + Math.sin(elapsed * 2.2) * 0.08 : 0.055;
        panelLines[index].geometry.setFromPoints([new THREE.Vector3(), nodePosition]);
        panelNodes[index].position.copy(nodePosition);
        panelNodes[index].material.opacity = isActive ? 1 : 0.42 + easedIntro * 0.18;
        panelNodes[index].scale.setScalar(isActive ? (isHovered ? 1.45 : 1.28) : 0.9);
      });

      const positions = commandParticles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i += 1) {
        const i3 = i * 3;
        const drift = Math.sin(elapsed * 0.55 + i * 0.37) * 0.035;
        const attraction = interaction * 0.055;
        positions[i3] = particleBasePositions[i3] + drift + pointer.x * attraction * (1 + (i % 5) * 0.14);
        positions[i3 + 1] = particleBasePositions[i3 + 1] + Math.cos(elapsed * 0.42 + i) * 0.025 + pointer.y * attraction;
        positions[i3 + 2] = particleBasePositions[i3 + 2] + Math.sin(elapsed * 0.3 + i) * 0.02;
      }
      commandParticles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      mount.removeEventListener('pointermove', handlePointer);
      mount.removeEventListener('pointerleave', handlePointerLeave);
      mount.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resize);
      window.removeEventListener('hero:alive-intent', handleAliveIntent);
      resizeObserver.disconnect();
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

  return <div className="command-scene" ref={mountRef} aria-label="Animated command center scene" />;
}

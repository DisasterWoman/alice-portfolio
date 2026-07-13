import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import CoreSphere from './CoreSphere';
import OrbitBadge, { type OrbitBadgeConfig } from './OrbitBadge';
import ParticleField from './ParticleField';
import { useDeviceCapability } from './hooks/useDeviceCapability';
import { useMousePosition } from './hooks/useMousePosition';
import './CommandCenterScene.css';

const orbitBadges: OrbitBadgeConfig[] = [
  { label: 'Projects', meta: 'Selected work', target: '#projects', color: '#d9ff45', surface: [0.86, 0.12, 0.5], labelPosition: [2.08, 0.46, 0.85] },
  { label: '3D', meta: 'WebGL systems', target: '#projects', color: '#2af8ff', surface: [0.2, 0.92, 0.35], labelPosition: [0.42, 1.48, 0.88] },
  { label: 'Motion', meta: 'GSAP layers', target: '#build', color: '#45f4ce', surface: [-0.78, -0.48, 0.38], labelPosition: [-2.02, -0.92, 0.82] },
  { label: 'Architecture', meta: 'Structure & logic', target: '#experience', color: '#7d70ff', surface: [-0.9, 0.16, 0.42], labelPosition: [-2.08, 0.48, 0.82] },
  { label: 'Performance', meta: 'Frame budget', target: '#stack', color: '#b8ff3f', surface: [-0.16, -0.1, 0.98], labelPosition: [-0.18, -0.42, 1.04] },
  { label: 'Stack', meta: 'Tools I use', target: '#stack', color: '#2af8ff', surface: [0.72, -0.42, 0.58], labelPosition: [1.82, -0.82, 0.86] },
];

type SceneRigProps = {
  mouseRef: ReturnType<typeof useMousePosition>;
  visibleRef: React.MutableRefObject<boolean>;
  interactionRef: React.MutableRefObject<number>;
};

type SignalRingsProps = {
  interactionRef: React.MutableRefObject<number>;
  visibleRef: React.MutableRefObject<boolean>;
};

function smoothScrollTo(target: string): void {
  const node = document.querySelector(target);
  if (!node) return;

  const header = document.querySelector('.site-header');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const top = node.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function SceneRig({ mouseRef, visibleRef, interactionRef }: SceneRigProps): null {
  const { camera, size } = useThree();
  const baseCamera = useMemo<THREE.Vector3>(() => new THREE.Vector3(0.08, 0.38, 10.7), []);

  useFrame((): void => {
    if (!visibleRef.current) return;

    const width = size.width || window.innerWidth;
    const isMobile = width < 560;
    const isTablet = width < 900;
    baseCamera.set(
      0.08,
      isMobile ? 0.28 : isTablet ? 0.34 : 0.38,
      isMobile ? 12.5 : isTablet ? 11.6 : 10.7,
    );

    const mouse = mouseRef.current;
    const targetX = baseCamera.x + mouse.x * 0.055;
    const targetY = baseCamera.y + mouse.y * 0.04;
    const targetZ = baseCamera.z;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.06);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.06);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.045);
    camera.lookAt(0, -0.06, 0);

    const mousePresence = mouse.active ? 0.2 : 0;
    interactionRef.current = THREE.MathUtils.lerp(interactionRef.current, mousePresence, 0.05);
  });

  return null;
}

function SignalRings({ interactionRef, visibleRef }: SignalRingsProps): React.ReactElement {
  const groupRef = useRef<THREE.Group>(null);
  const ringGeometry = useMemo<THREE.TorusGeometry>(() => new THREE.TorusGeometry(1, 0.006, 8, 180), []);
  const rings = useMemo<Array<{ radius: number; color: string; rotation: [number, number, number]; speed: number; opacity: number }>>(() => (
    [1.78, 2.14, 2.54, 2.9].map((radius, index) => ({
      radius,
      color: index % 2 ? '#d9ff45' : '#2af8ff',
      rotation: [Math.PI / 2 + index * 0.26, index * 0.21, index * 0.32],
      speed: 0.03 + index * 0.014,
      opacity: index % 2 ? 0.07 : 0.12,
    }))
  ), []);
  const materials = useMemo<THREE.MeshBasicMaterial[]>(() => rings.map((ring) => new THREE.MeshBasicMaterial({
    color: ring.color,
    transparent: true,
    opacity: ring.opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })), [rings]);

  useFrame(({ clock }): void => {
    if (!visibleRef.current || !groupRef.current) return;

    const elapsed = clock.getElapsedTime();
    groupRef.current.children.forEach((child, index) => {
      const mesh = child as THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>;
      mesh.rotation.z = rings[index].rotation[2] + elapsed * rings[index].speed;
      mesh.material.opacity = rings[index].opacity + interactionRef.current * 0.035;
      mesh.scale.setScalar(rings[index].radius);
    });
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, index) => (
        <mesh
          key={ring.radius}
          geometry={ringGeometry}
          material={materials[index]}
          rotation={ring.rotation}
          scale={[ring.radius, ring.radius, ring.radius]}
        />
      ))}
    </group>
  );
}

export default function HeroScene(): React.ReactElement {
  const mountRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef<boolean>(true);
  const activeIndexRef = useRef<number>(-1);
  const focusIndexRef = useRef<number>(0);
  const interactionRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const capability = useDeviceCapability();
  const mouseRef = useMousePosition(mountRef);
  const staticScrollRef = useRef<number>(0);

  const handleSelect = useCallback((target: string, index: number): void => {
    focusIndexRef.current = index;
    interactionRef.current = 1;
    smoothScrollTo(target);
  }, []);

  useEffect((): (() => void) | undefined => {
    const node = mountRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]): void => {
      visibleRef.current = entry.isIntersecting;
      setIsVisible(entry.isIntersecting);
    }, { rootMargin: '140px' });

    observer.observe(node);
    return (): void => observer.disconnect();
  }, []);

  useEffect((): (() => void) => {
    const handleAliveIntent = (event: Event): void => {
      const customEvent = event as CustomEvent<{ active?: boolean; pulse?: boolean }>;
      interactionRef.current = customEvent.detail?.active || customEvent.detail?.pulse ? 1 : 0.2;
    };

    window.addEventListener('hero:alive-intent', handleAliveIntent);
    return (): void => window.removeEventListener('hero:alive-intent', handleAliveIntent);
  }, []);

  return (
    <div className="command-scene" ref={mountRef} aria-label="Interactive shader-driven portfolio navigation scene">
      <Canvas
        frameloop={isVisible ? 'always' : 'demand'}
        dpr={capability.pixelRatio}
        camera={{ position: [0.08, 0.38, 10.7], fov: 32, near: 0.1, far: 100 }}
        gl={{ alpha: true, antialias: capability.quality > 0.7, powerPreference: 'high-performance' }}
        onCreated={({ gl }): void => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={[0x060913, 7.5, 22]} />
          <ambientLight color="#7adfff" intensity={0.28} />
          <pointLight color="#2af8ff" intensity={5.8} distance={14} position={[-2.4, 3.4, 4.4]} />
          <pointLight color="#d9ff45" intensity={2.6} distance={12} position={[3.2, 1.5, 2.2]} />
          <SceneRig mouseRef={mouseRef} visibleRef={visibleRef} interactionRef={interactionRef} />
          <ParticleField
            count={capability.particleCount}
            pixelRatio={capability.pixelRatio}
            mouseRef={mouseRef}
            scrollRef={staticScrollRef}
            visibleRef={visibleRef}
          />
          <group position={[0.5, -0.08, 0]} scale={0.99}>
            <CoreSphere
              mouseRef={mouseRef}
              visibleRef={visibleRef}
              quality={capability.quality}
              interactionRef={interactionRef}
            />
            <SignalRings interactionRef={interactionRef} visibleRef={visibleRef} />
            {orbitBadges.map((badge, index) => (
              <OrbitBadge
                key={badge.label}
                {...badge}
                index={index}
                activeIndexRef={activeIndexRef}
                focusIndexRef={focusIndexRef}
                mouseRef={mouseRef}
                visibleRef={visibleRef}
                onSelect={handleSelect}
              />
            ))}
          </group>
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.18} luminanceThreshold={0.86} luminanceSmoothing={0.2} mipmapBlur />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

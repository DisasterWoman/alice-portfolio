import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { coreSphereFragmentShader, coreSphereVertexShader } from './shaders/coreSphereShaders';
import { type NormalizedMouse } from './hooks/useMousePosition';

export type CoreSphereProps = {
  mouseRef: React.RefObject<NormalizedMouse>;
  visibleRef: React.RefObject<boolean>;
  quality: number;
  interactionRef: React.RefObject<number>;
};

type CoreSphereUniforms = {
  uTime: { value: number };
  uMouse: { value: THREE.Vector2 };
  uInteraction: { value: number };
  uOpacity: { value: number };
  uQuality: { value: number };
  uMint: { value: THREE.Color };
  uLime: { value: THREE.Color };
  uDeep: { value: THREE.Color };
};

export default function CoreSphere({
  mouseRef,
  visibleRef,
  quality,
  interactionRef,
}: CoreSphereProps): React.ReactElement {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  const sphereGeometry = useMemo<THREE.SphereGeometry>(
    () => new THREE.SphereGeometry(1.34, quality > 0.75 ? 96 : 56, quality > 0.75 ? 64 : 36),
    [quality],
  );
  const innerGeometry = useMemo<THREE.IcosahedronGeometry>(
    () => new THREE.IcosahedronGeometry(0.96, quality > 0.75 ? 5 : 3),
    [quality],
  );
  const haloGeometry = useMemo<THREE.SphereGeometry>(() => new THREE.SphereGeometry(1.66, 64, 42), []);
  const ringGeometry = useMemo<THREE.TorusGeometry>(() => new THREE.TorusGeometry(1, 0.004, 6, 144), []);

  const uniforms = useMemo<CoreSphereUniforms>(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2() },
    uInteraction: { value: 0 },
    uOpacity: { value: 1 },
    uQuality: { value: quality },
    uMint: { value: new THREE.Color('#45f4ce') },
    uLime: { value: new THREE.Color('#d9ff45') },
    uDeep: { value: new THREE.Color('#071522') },
  }), [quality]);

  const shaderMaterial = useMemo<THREE.ShaderMaterial>(() => new THREE.ShaderMaterial({
    uniforms,
    vertexShader: coreSphereVertexShader,
    fragmentShader: coreSphereFragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), [uniforms]);

  const innerMaterial = useMemo<THREE.MeshBasicMaterial>(() => new THREE.MeshBasicMaterial({
    color: 0x0b2530,
    transparent: true,
    opacity: 0.32,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), []);

  const haloMaterial = useMemo<THREE.MeshBasicMaterial>(() => new THREE.MeshBasicMaterial({
    color: 0x2af8ff,
    transparent: true,
    opacity: 0.05,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.BackSide,
  }), []);

  const ringMaterial = useMemo<THREE.MeshBasicMaterial>(() => new THREE.MeshBasicMaterial({
    color: 0xd9ff45,
    transparent: true,
    opacity: 0.06,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), []);

  const latitudes = useMemo<Array<{ y: number; scale: number; rotation: number }>>(() => (
    [-0.58, -0.18, 0.22, 0.62].map((y, index) => ({
      y,
      scale: Math.sqrt(1.34 * 1.34 - y * y),
      rotation: index * 0.38,
    }))
  ), []);

  useFrame(({ clock }): void => {
    if (!visibleRef.current) return;

    const elapsed = clock.getElapsedTime();
    const mouse = mouseRef.current;
    const interaction = interactionRef.current;

    uniforms.uTime.value = elapsed;
    uniforms.uMouse.value.set(mouse.x, mouse.y);
    uniforms.uInteraction.value = interaction;
    uniforms.uOpacity.value = 0.92;

    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.045 + mouse.x * 0.06;
      groupRef.current.rotation.x = -0.08 + mouse.y * 0.04;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -elapsed * 0.16;
      innerRef.current.rotation.x = elapsed * 0.11;
      (innerRef.current.material as THREE.MeshBasicMaterial).opacity = 0.27 + interaction * 0.12;
    }

    if (haloRef.current) {
      (haloRef.current.material as THREE.MeshBasicMaterial).opacity = (0.045 + interaction * 0.05) * uniforms.uOpacity.value;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={sphereGeometry} material={shaderMaterial} />
      <mesh ref={innerRef} geometry={innerGeometry} material={innerMaterial} />
      <mesh ref={haloRef} geometry={haloGeometry} material={haloMaterial} />
      {latitudes.map(({ y, scale, rotation }, index) => (
        <mesh
          key={y}
          geometry={ringGeometry}
          material={ringMaterial}
          position={[0, y, 0]}
          rotation={[Math.PI / 2, 0, rotation + index * 0.12]}
          scale={[scale, scale, scale]}
        />
      ))}
    </group>
  );
}

import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { particleFragmentShader, particleVertexShader } from './shaders/particleShaders';
import { type NormalizedMouse } from './hooks/useMousePosition';

export type ParticleFieldProps = {
  count: number;
  pixelRatio: number;
  mouseRef: React.RefObject<NormalizedMouse>;
  scrollRef: React.RefObject<number>;
  visibleRef: React.RefObject<boolean>;
};

type ParticleUniforms = {
  uTime: { value: number };
  uMouse: { value: THREE.Vector2 };
  uPixelRatio: { value: number };
  uScroll: { value: number };
};

const palette = ['#dde8ff', '#8effff', '#45f4ce', '#d9ff45', '#ffffff'].map((item) => new THREE.Color(item));

export default function ParticleField({
  count,
  pixelRatio,
  mouseRef,
  scrollRef,
  visibleRef,
}: ParticleFieldProps): React.ReactElement {
  const pointsRef = useRef<THREE.Points>(null);
  const geometry = useMemo<THREE.BufferGeometry>(() => {
    const nextGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const depths = new Float32Array(count);
    const seeds = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      const i3 = index * 3;
      const z = -Math.random() * 8.5 - 0.7;
      const color = palette[Math.floor(Math.random() * palette.length)];
      const brightness = 0.42 + Math.random() * 0.58;

      positions[i3] = (Math.random() - 0.5) * 12.5;
      positions[i3 + 1] = (Math.random() - 0.5) * 7.2;
      positions[i3 + 2] = z;
      colors[i3] = color.r * brightness;
      colors[i3 + 1] = color.g * brightness;
      colors[i3 + 2] = color.b * brightness;
      depths[index] = z;
      seeds[index] = Math.random() * 100;
    }

    nextGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    nextGeometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    nextGeometry.setAttribute('aDepth', new THREE.BufferAttribute(depths, 1));
    nextGeometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    return nextGeometry;
  }, [count]);

  const uniforms = useMemo<ParticleUniforms>(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2() },
    uPixelRatio: { value: pixelRatio },
    uScroll: { value: 0 },
  }), [pixelRatio]);

  const material = useMemo<THREE.ShaderMaterial>(() => new THREE.ShaderMaterial({
    vertexShader: particleVertexShader,
    fragmentShader: particleFragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    uniforms,
  }), [uniforms]);

  useFrame(({ clock }): void => {
    if (!visibleRef.current) return;

    const elapsed = clock.getElapsedTime();
    const mouse = mouseRef.current;
    uniforms.uTime.value = elapsed;
    uniforms.uMouse.value.set(mouse.x, mouse.y);
    uniforms.uScroll.value = scrollRef.current;
    uniforms.uPixelRatio.value = pixelRatio;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = elapsed * 0.006 + mouse.x * 0.018;
      pointsRef.current.rotation.x = mouse.y * -0.012;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} renderOrder={1} />;
}

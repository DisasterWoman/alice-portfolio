import { Html, Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { type NormalizedMouse } from './hooks/useMousePosition';

export type OrbitBadgeConfig = {
  label: string;
  meta: string;
  target: string;
  color: string;
  surface: [number, number, number];
  labelPosition: [number, number, number];
};

export type OrbitBadgeProps = OrbitBadgeConfig & {
  index: number;
  activeIndexRef: React.RefObject<number>;
  focusIndexRef: React.RefObject<number>;
  mouseRef: React.RefObject<NormalizedMouse>;
  visibleRef: React.RefObject<boolean>;
  onSelect: (target: string, index: number) => void;
};

export default function OrbitBadge({
  index,
  label,
  meta,
  target,
  color,
  surface,
  labelPosition,
  activeIndexRef,
  focusIndexRef,
  mouseRef,
  visibleRef,
  onSelect,
}: OrbitBadgeProps): React.ReactElement {
  const groupRef = useRef<THREE.Group>(null);
  const anchorRef = useRef<THREE.Mesh>(null);
  const pingRef = useRef<THREE.Mesh>(null);
  const htmlRef = useRef<HTMLButtonElement>(null);

  const accent = useMemo<THREE.Color>(() => new THREE.Color(color), [color]);
  const surfacePoint = useMemo<THREE.Vector3>(
    () => new THREE.Vector3(...surface).normalize().multiplyScalar(1.36),
    [surface],
  );
  const baseLabelPoint = useMemo<THREE.Vector3>(() => new THREE.Vector3(...labelPosition), [labelPosition]);
  const labelPoint = useMemo<THREE.Vector3>(() => baseLabelPoint.clone(), [baseLabelPoint]);
  const bendPoint = useMemo<THREE.Vector3>(() => new THREE.Vector3(), []);
  const linePoints = useMemo<THREE.Vector3[]>(() => [surfacePoint.clone(), bendPoint, labelPoint.clone()], [bendPoint, labelPoint, surfacePoint]);
  const anchorMaterial = useMemo<THREE.MeshBasicMaterial>(() => new THREE.MeshBasicMaterial({
    color: accent,
    transparent: true,
    opacity: 0.76,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), [accent]);
  const pingMaterial = useMemo<THREE.MeshBasicMaterial>(() => new THREE.MeshBasicMaterial({
    color: accent,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), [accent]);

  useFrame(({ clock }): void => {
    if (!visibleRef.current) return;

    const elapsed = clock.getElapsedTime();
    const mouse = mouseRef.current;
    const isActive = activeIndexRef.current === index || focusIndexRef.current === index;
    const activeBoost = isActive ? 1 : 0;
    const depth = THREE.MathUtils.clamp((baseLabelPoint.z + 1.2) / 2.5, 0.2, 1);
    const parallax = depth * 0.15;

    labelPoint.copy(baseLabelPoint);
    labelPoint.x += mouse.x * parallax;
    labelPoint.y += mouse.y * parallax * 0.72;
    bendPoint.copy(surfacePoint).lerp(labelPoint, 0.45);
    bendPoint.z += 0.24;

    if (anchorRef.current) {
      anchorRef.current.position.copy(surfacePoint);
      (anchorRef.current.material as THREE.MeshBasicMaterial).opacity = 0.55 + activeBoost * 0.22;
    }

    if (pingRef.current) {
      const travel = (elapsed * 0.52 + index * 0.13) % 1;
      pingRef.current.position.copy(surfacePoint).lerp(labelPoint, travel);
      (pingRef.current.material as THREE.MeshBasicMaterial).opacity = 0.46 + activeBoost * 0.18;
    }

    if (htmlRef.current) {
      htmlRef.current.style.opacity = `${0.82 + activeBoost * 0.08}`;
    }
  });

  return (
    <group ref={groupRef}>
      <Line
        points={linePoints}
        color={color}
        lineWidth={1}
        transparent
        opacity={activeIndexRef.current === index ? 0.5 : 0.18}
      />
      <mesh ref={anchorRef} material={anchorMaterial}>
        <sphereGeometry args={[0.042, 18, 12]} />
      </mesh>
      <mesh ref={pingRef} material={pingMaterial}>
        <sphereGeometry args={[0.022, 12, 8]} />
      </mesh>
      <Html position={labelPoint} center occlude={false} zIndexRange={[20, 0]}>
        <button
          ref={htmlRef}
          type="button"
          className="command-scene__badge"
          style={{ '--badge-color': color } as React.CSSProperties}
          onPointerEnter={() => {
            activeIndexRef.current = index;
          }}
          onPointerLeave={() => {
            activeIndexRef.current = -1;
          }}
          onClick={() => onSelect(target, index)}
        >
          <span className="command-scene__badge-spark" aria-hidden="true" />
          <strong>{label}</strong>
          <small>{meta}</small>
        </button>
      </Html>
    </group>
  );
}

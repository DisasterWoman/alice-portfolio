import { useEffect, useState } from 'react';

export type DeviceCapability = {
  quality: number;
  particleCount: number;
  pixelRatio: number;
  bloom: boolean;
};

function readDeviceCapability(): DeviceCapability {
  if (typeof window === 'undefined') {
    return { quality: 0.7, particleCount: 600, pixelRatio: 1.2, bloom: false };
  }

  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compactViewport = window.innerWidth < 760;
  const lowPower = reduceMotion || compactViewport || cores <= 4 || memory <= 4;

  return {
    quality: lowPower ? 0.58 : 1,
    particleCount: lowPower ? 520 : 1100,
    pixelRatio: Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.7),
    bloom: !lowPower,
  };
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>(() => readDeviceCapability());

  useEffect((): (() => void) => {
    const handleResize = (): void => setCapability(readDeviceCapability());
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return capability;
}

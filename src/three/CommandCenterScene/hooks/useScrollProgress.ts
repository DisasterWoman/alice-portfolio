import { type RefObject, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollProgress(targetRef: RefObject<HTMLElement | null>): RefObject<number> {
  const progressRef = useRef<number>(0);

  useEffect((): (() => void) | undefined => {
    const node = targetRef.current;
    if (!node) return undefined;

    const trigger = node.closest('.home-hero') ?? node;
    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self): void => {
        progressRef.current = self.progress;
      },
      onRefresh: (self): void => {
        progressRef.current = self.progress;
      },
    });

    return (): void => scrollTrigger.kill();
  }, [targetRef]);

  return progressRef;
}

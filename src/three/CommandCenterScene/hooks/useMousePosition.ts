import { type RefObject, useEffect, useRef } from 'react';

export type NormalizedMouse = {
  x: number;
  y: number;
  active: boolean;
};

export function useMousePosition(targetRef: RefObject<HTMLElement | null>): RefObject<NormalizedMouse> {
  const mouseRef = useRef<NormalizedMouse>({ x: 0, y: 0, active: false });

  useEffect((): (() => void) | undefined => {
    const node = targetRef.current;
    if (!node) return undefined;

    const handlePointerMove = (event: PointerEvent): void => {
      const rect = node.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      mouseRef.current.y = -(((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2);
      mouseRef.current.active = true;
    };

    const handlePointerLeave = (): void => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
      mouseRef.current.active = false;
    };

    node.addEventListener('pointermove', handlePointerMove);
    node.addEventListener('pointerleave', handlePointerLeave);

    return (): void => {
      node.removeEventListener('pointermove', handlePointerMove);
      node.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [targetRef]);

  return mouseRef;
}

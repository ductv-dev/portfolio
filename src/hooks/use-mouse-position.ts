"use client";

import { useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import { useCallback } from "react";

const pointerSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
} as const;

export function useMousePosition(offset = { x: 28, y: -130 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, pointerSpring);
  const springY = useSpring(y, pointerSpring);

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      x.set(event.clientX + offset.x);
      y.set(event.clientY + offset.y);
    },
    [offset.x, offset.y, x, y],
  );

  return {
    x: springX,
    y: springY,
    onMouseMove,
  };
}

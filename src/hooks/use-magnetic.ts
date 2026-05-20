"use client";

import {
  type MotionStyle,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MouseEvent } from "react";
import { useCallback, useRef } from "react";

const magneticSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
} as const;

export function useMagnetic<T extends HTMLElement>(strength = 0.32) {
  const ref = useRef<T>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);

  const onMouseMove = useCallback(
    (event: MouseEvent<T>) => {
      const node = ref.current;

      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const distanceX = event.clientX - (rect.left + rect.width / 2);
      const distanceY = event.clientY - (rect.top + rect.height / 2);

      x.set(distanceX * strength);
      y.set(distanceY * strength);
    },
    [strength, x, y],
  );

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    style: { x: springX, y: springY } satisfies MotionStyle,
    onMouseMove,
    onMouseLeave,
  };
}

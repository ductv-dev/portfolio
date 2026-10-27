"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const MAX_X = 7;
const MAX_Y = 4;
const MAX_TILT = 5;
const TRACK_DISTANCE = 300;
const SPRING = { stiffness: 180, damping: 18, mass: 0.4 };

export function Mascot({ className, label }: { className?: string; label: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const reduceMotion = useReducedMotion();
  const [blink, setBlink] = useState(false);
  const [happy, setHappy] = useState(false);

  const faceX = useSpring(0, SPRING);
  const faceY = useSpring(0, SPRING);
  const tilt = useSpring(0, SPRING);

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (e: PointerEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      const strength = Math.min(dist / TRACK_DISTANCE, 1);
      faceX.set((dx / dist) * MAX_X * strength);
      faceY.set((dy / dist) * MAX_Y * strength);
      tilt.set((dx / dist) * MAX_TILT * strength);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, faceX, faceY, tilt]);

  useEffect(() => {
    if (reduceMotion) return;

    let blinkTimer: ReturnType<typeof setTimeout>;
    let openTimer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      blinkTimer = setTimeout(() => {
        setBlink(true);
        openTimer = setTimeout(() => setBlink(false), 140);
        schedule();
      }, 2500 + Math.random() * 3000);
    };
    schedule();

    return () => {
      clearTimeout(blinkTimer);
      clearTimeout(openTimer);
    };
  }, [reduceMotion]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 120"
      role="img"
      aria-label={label}
      className={cn("overflow-visible", className)}
      onPointerEnter={() => setHappy(true)}
      onPointerLeave={() => setHappy(false)}
    >
      <motion.g style={{ rotate: tilt, transformBox: "fill-box", transformOrigin: "50% 100%" }}>
        {/* Antenna */}
        <line x1="60" y1="14" x2="60" y2="26" strokeWidth="3" className="stroke-foreground" />
        <motion.rect
          x="54"
          y="4"
          width="12"
          height="12"
          strokeWidth="3"
          className="fill-primary stroke-foreground"
          animate={reduceMotion ? undefined : { opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ears */}
        <rect x="9" y="44" width="10" height="24" strokeWidth="3" className="fill-primary stroke-foreground" />
        <rect x="101" y="44" width="10" height="24" strokeWidth="3" className="fill-primary stroke-foreground" />

        {/* Head + screen */}
        <rect x="18" y="26" width="84" height="66" strokeWidth="3" className="fill-card stroke-foreground" />
        <rect x="27" y="35" width="66" height="44" fill="hsl(20 14% 8%)" />

        {/* Face follows the pointer */}
        <motion.g style={{ x: faceX, y: faceY }}>
          {happy ? (
            <g strokeWidth="3.5" strokeLinecap="square" fill="none" className="stroke-primary">
              <path d="M40 56 L46 49 L52 56" />
              <path d="M68 56 L74 49 L80 56" />
            </g>
          ) : (
            <motion.g
              animate={{ scaleY: blink ? 0.1 : 1 }}
              transition={{ duration: 0.08 }}
              style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
            >
              <rect x="40" y="46" width="12" height="12" className="fill-primary" />
              <rect x="68" y="46" width="12" height="12" className="fill-primary" />
              <rect x="42" y="48" width="4" height="4" fill="white" opacity="0.85" />
              <rect x="70" y="48" width="4" height="4" fill="white" opacity="0.85" />
            </motion.g>
          )}
          <rect x="31" y="62" width="7" height="3" className="fill-primary" opacity="0.5" />
          <rect x="82" y="62" width="7" height="3" className="fill-primary" opacity="0.5" />
          <path
            d={happy ? "M53 64 Q60 73 67 64 Z" : "M54 65 Q60 70 66 65"}
            strokeWidth="2.5"
            strokeLinecap="round"
            className={cn("stroke-primary", happy ? "fill-primary" : "fill-none")}
          />
        </motion.g>
      </motion.g>

      {/* Body */}
      <rect x="34" y="92" width="52" height="24" strokeWidth="3" className="fill-primary stroke-foreground" />
      <text
        x="60"
        y="108"
        textAnchor="middle"
        className="fill-primary-foreground font-mono font-bold"
        fontSize="11"
      >
        {"</>"}
      </text>
    </svg>
  );
}

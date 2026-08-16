"use client";

import { useTypewriter } from "@/hooks/use-typewriter";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const SEEN_KEY = "intro-seen";
const WELCOME = "Welcome.";

// Exact path data from lucide-react's CodeXml ("Code2") icon — drawn in manually
// so each stroke can be animated individually via Framer Motion's `pathLength`.
const CODE_PATHS = [
  "m18 16 4-4-4-4",
  "m6 8-4 4 4 4",
  "m14.5 4-5 16",
];

const DRAW_START = 0.3;
const DRAW_STAGGER = 0.15;
const DRAW_DURATION = 0.7;
const LAST_DRAW_END = DRAW_START + (CODE_PATHS.length - 1) * DRAW_STAGGER + DRAW_DURATION;
const GLOW_DELAY = LAST_DRAW_END - 0.2;
const FILL_DELAY = LAST_DRAW_END - 0.15;
const TEXT_START_DELAY = LAST_DRAW_END + 0.25;

export function IntroScreen() {
  const [visible, setVisible] = useState<boolean | null>(null);
  const { typed, started } = useTypewriter(WELCOME, 90, TEXT_START_DELAY * 1000);

  useEffect(() => {
    setVisible(!sessionStorage.getItem(SEEN_KEY));
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SEEN_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 overflow-hidden bg-background px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
        >
          <div className="relative flex size-28 items-center justify-center sm:size-36">
            <motion.div
              className="absolute inset-0 rounded-full bg-foreground/25 blur-2xl"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 0.9, 0], scale: [0.4, 1.5, 1.7] }}
              transition={{ delay: GLOW_DELAY, duration: 0.9, ease: "easeOut" }}
            />

            <svg
              viewBox="0 0 24 24"
              className="relative size-16 text-muted-foreground sm:size-20"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {CODE_PATHS.map((d, index) => (
                <motion.path
                  key={d}
                  d={d}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: DRAW_START + index * DRAW_STAGGER,
                    duration: DRAW_DURATION,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </svg>

            <motion.svg
              viewBox="0 0 24 24"
              className="absolute size-16 text-foreground sm:size-20"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: FILL_DELAY, duration: 0.6, ease: "easeOut" }}
            >
              {CODE_PATHS.map((d) => (
                <path key={d} d={d} />
              ))}
            </motion.svg>
          </div>

          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {typed}
              {started && (
                <motion.span
                  className="ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[0.08em] bg-foreground align-middle"
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    times: [0, 0.5, 0.5, 1],
                  }}
                />
              )}
            </h1>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: TEXT_START_DELAY + 0.9, duration: 0.4 }}
            >
              A fullstack developer&apos;s corner of the internet.
            </motion.p>
          </div>

          <motion.button
            type="button"
            onClick={dismiss}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: TEXT_START_DELAY + 1.2, duration: 0.4 }}
            className="group inline-flex items-center gap-1.5 rounded-sm border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            View about Đức
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

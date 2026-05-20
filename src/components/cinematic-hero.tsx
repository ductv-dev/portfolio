"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
} as const;

const desktopHeadline =
  "Frontend craft with cinematic motion and product clarity.";
const mobileLines = ["Code that", "feels", "cinematic."];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 44,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring,
  },
};

type CinematicHeroProps = {
  name: string;
  initials: string;
  description: string;
  avatarUrl: string;
};

export function CinematicHero({
  name,
  initials,
  description,
  avatarUrl,
}: CinematicHeroProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const targetRef = useRef<HTMLElement>(null);
  const displayName = name.split(" ").at(-1) ?? name;
  const desktopWords = desktopHeadline.split(" ");
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.18]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -72]);

  return (
    <section
      ref={targetRef}
      id="hero"
      className="relative isolate -mx-4 min-h-[100svh] overflow-hidden rounded-b-[2rem] px-5 pb-8 pt-5 sm:-mx-10 sm:min-h-[88vh] sm:rounded-b-[3rem] sm:px-10 sm:py-10 lg:-mx-16 lg:px-16"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_15%,rgba(251,191,36,0.28),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.22),transparent_28%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--secondary)))]" />
      <div className="absolute inset-0 -z-10 animate-grain bg-grain opacity-[0.16] mix-blend-soft-light dark:opacity-[0.22]" />
      <div className="absolute inset-x-10 bottom-8 -z-10 h-40 rounded-full bg-foreground/10 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100svh-3.25rem)] max-w-md flex-col justify-between gap-8 py-6 md:hidden">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="inline-flex rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground shadow-2xl shadow-foreground/5 backdrop-blur-xl"
          >
            ductv.dev / frontend
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={container}
            className="max-w-[12ch] text-[clamp(3.45rem,15vw,4.9rem)] font-black leading-[0.82] tracking-[-0.085em]"
          >
            {mobileLines.map((line) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span className="block will-change-transform" variants={word}>
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.42 }}
            className="max-w-[30ch] text-pretty text-[15px] leading-7 text-muted-foreground"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.56 }}
            className="flex flex-wrap items-center gap-2"
          >
            <a
              href="#projects"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-xl shadow-foreground/10"
            >
              View work
            </a>
            <span className="rounded-full border border-foreground/10 bg-background/50 px-3 py-2 text-sm font-medium text-foreground/75 backdrop-blur-xl">
              Next.js + Motion
            </span>
          </motion.div>
        </div>

        <motion.button
          type="button"
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ ...spring, delay: 0.2 }}
          onClick={() => setIsFullscreen(true)}
          className="group relative aspect-[1.1] w-full overflow-hidden rounded-[2rem] border border-foreground/10 bg-background/50 p-2 shadow-2xl shadow-foreground/10 backdrop-blur-xl"
          aria-label={`Open ${name} portrait`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.24),transparent_30%)]" />
          <Avatar className="relative h-full w-full rounded-[1.5rem] border-0">
            <AvatarImage
              className="h-full w-full scale-110 rounded-[1.5rem] object-cover object-[50%_35%]"
              alt={name}
              src={avatarUrl}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-left text-white shadow-2xl backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              Building polished UI
            </p>
            <p className="mt-1 text-base font-semibold">Frontend Developer</p>
          </div>
        </motion.button>
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="mx-auto hidden max-w-6xl items-end gap-12 pt-20 md:grid md:grid-cols-[1.15fr_0.85fr] md:pt-28"
      >
        <div className="space-y-5 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="inline-flex max-w-full rounded-full border border-foreground/10 bg-background/55 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-2xl shadow-foreground/5 backdrop-blur-xl sm:bg-background/45 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.28em]"
          >
            ductv.dev / {displayName}
          </motion.div>

          <motion.div
            role="heading"
            aria-level={1}
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-5xl text-balance font-black leading-[0.88] tracking-[-0.08em] sm:text-7xl lg:text-8xl"
          >
            {desktopWords.map((item) => (
              <span
                key={item}
                className="mr-[0.18em] inline-block overflow-hidden pb-2"
              >
                <motion.span className="inline-block will-change-transform" variants={word}>
                  {item}
                </motion.span>
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.55 }}
            className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8"
          >
            {description}
          </motion.p>

        </div>

        <motion.button
          type="button"
          style={{ y: portraitY }}
          whileHover={{ scale: 1.025, rotate: 0.6 }}
          whileTap={{ scale: 0.98 }}
          transition={spring}
          onClick={() => setIsFullscreen(true)}
          className="group relative ml-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[2.25rem] border border-foreground/10 bg-background/45 p-3 shadow-2xl shadow-foreground/10 backdrop-blur-xl will-change-transform"
          aria-label={`Open ${name} portrait`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/25 opacity-80" />
          <Avatar className="h-full w-full rounded-[1.35rem] border-0 sm:rounded-[1.75rem]">
            <AvatarImage
              className="h-full w-full scale-110 rounded-[1.75rem] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.16]"
              alt={name}
              src={avatarUrl}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-black/35 px-3 py-2 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:px-4 sm:py-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-xs sm:tracking-[0.22em]">
              Available for craft
            </p>
            <p className="mt-1 text-sm font-semibold sm:text-lg">
              Frontend Developer
            </p>
          </div>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
          >
            <button
              className="absolute right-5 top-5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:text-white"
              onClick={() => setIsFullscreen(false)}
              type="button"
            >
              Close
            </button>
            <motion.img
              src={avatarUrl}
              alt={name}
              className="max-h-[88vh] max-w-[88vw] rounded-[2rem] object-contain shadow-2xl"
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={spring}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const projects = DATA.projects;
const TOTAL = projects.length;
const ANIM_LOCK = 520;
const WHEEL_THR = 25;
const TOUCH_THR = 35;

const ACCENTS = [
  "#f97316", "#8b5cf6", "#06b6d4",
  "#10b981", "#f59e0b", "#ec4899",
] as const;

const SLIDE_BG_DARK  = ["#0c0c0c","#0a0c0a","#0c0a0e","#0a0c0c","#0e0a0a","#0a0a0e"] as const;
const SLIDE_BG_LIGHT = ["#f9f9f9","#f7faf7","#f6f5fc","#f5fafa","#fdf6f5","#faf5fc"] as const;

// ─── Sub-components ──────────────────────────────────────────────

function BrowserChrome({ href }: { href?: string }) {
  const url =
    href?.startsWith("https://github") ? "localhost:3000" : href || "localhost:3000";
  return (
    <div className="bg-gray-100 dark:bg-[#1c1c1c] px-4 py-2.5 flex items-center gap-2.5 border-b border-gray-200 dark:border-white/[0.05]">
      <div className="flex gap-1.5 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <div className="flex-1 h-5 bg-gray-200/70 dark:bg-white/[0.05] rounded-full mx-2 flex items-center px-3 min-w-0">
        <span className="text-[10px] text-gray-400 dark:text-white/25 font-mono truncate">
          {url}
        </span>
      </div>
    </div>
  );
}

type Project = (typeof projects)[number];

function ProjectVisual({ project, i }: { project: Project; i: number }) {
  const accent = ACCENTS[i % ACCENTS.length];

  if (project.image) {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <BrowserChrome href={project.href} />
        <div className="relative aspect-[16/9]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>
      </div>
    );
  }

  if (project.video) {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <BrowserChrome href={project.href} />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={project.video as string}
          autoPlay
          muted
          loop
          playsInline
          className="w-full bg-black aspect-[9/16] object-contain max-h-[420px]"
        />
      </div>
    );
  }

  return (
    <div
      className="w-full aspect-[16/9] rounded-xl overflow-hidden border flex flex-col items-center justify-center gap-3"
      style={{
        background: `linear-gradient(135deg, ${accent}16, ${accent}06)`,
        borderColor: `${accent}28`,
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ background: `${accent}20`, border: `1px solid ${accent}35` }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill={accent}>
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="text-sm text-gray-400 dark:text-white/35">Không có preview</p>
    </div>
  );
}

function ProjectInfo({ project, i, clamp }: { project: Project; i: number; clamp: boolean }) {
  const accent = ACCENTS[i % ACCENTS.length];

  return (
    <>
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide mb-7"
        style={{ border: `0.5px solid ${accent}44`, background: `${accent}12`, color: accent }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
        {String(i + 1).padStart(2, "0")} / {TOTAL} dự án
      </div>

      <p className="text-[10px] font-semibold tracking-[0.13em] uppercase text-gray-400 dark:text-white/30 mb-3">
        {project.dates}
      </p>

      <h1 className="text-[clamp(22px,2.3vw,34px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white/95 mb-4">
        {project.title}
      </h1>

      <p className={cn("text-sm leading-[1.75] text-gray-500 dark:text-white/45 mb-7", clamp && "line-clamp-4")}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {(project.technologies as readonly string[]).slice(0, 8).map((tech) => (
          <span key={tech} className="px-2.5 py-1 text-[11px] font-medium rounded-full border border-gray-200 dark:border-white/[0.09] bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-white/50">
            {tech}
          </span>
        ))}
        {project.technologies.length > 8 && (
          <span className="px-2.5 py-1 text-[11px] font-medium rounded-full border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.03] text-gray-400 dark:text-white/25">
            +{project.technologies.length - 8}
          </span>
        )}
      </div>

      {project.links.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {project.links.map((link, li) => (
            <Link
              key={li}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
                li === 0
                  ? "bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  : "border border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:border-white/15 dark:bg-white/[0.07] dark:text-white/70 dark:hover:bg-white/[0.11]",
              )}
            >
              {link.icon}
              {link.type}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

// ─── Main page ───────────────────────────────────────────────────

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const currentRef    = useRef(0);
  const isAnimating   = useRef(false);
  const trackRef      = useRef<HTMLDivElement>(null);   // desktop right track
  const mobileTrackRef = useRef<HTMLDivElement>(null);  // mobile full track
  const leftColRef    = useRef<HTMLDivElement>(null);   // desktop left col (for wheel)
  const rightColRef   = useRef<HTMLDivElement>(null);   // desktop right col (for wheel)
  const touchStartY   = useRef(0);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // ── Unified navigation ────────────────────────────────────────
  const goTo = useCallback((next: number) => {
    if (isAnimating.current) return;
    const clamped = Math.max(0, Math.min(TOTAL - 1, next));
    if (clamped === currentRef.current) return;

    isAnimating.current = true;
    currentRef.current = clamped;
    setCurrent(clamped);

    // Update whichever track is in the DOM
    const vh = window.innerHeight;
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      trackRef.current.style.transform  = `translateY(-${clamped * vh}px)`;
    }
    if (mobileTrackRef.current) {
      mobileTrackRef.current.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      mobileTrackRef.current.style.transform  = `translateY(-${clamped * 100}vh)`;
    }

    setTimeout(() => { isAnimating.current = false; }, ANIM_LOCK);
  }, []);

  // ── Wheel on BOTH desktop columns ─────────────────────────────
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current) return;
      if (e.deltaY > WHEEL_THR)       goTo(currentRef.current + 1);
      else if (e.deltaY < -WHEEL_THR) goTo(currentRef.current - 1);
    };

    const left  = leftColRef.current;
    const right = rightColRef.current;
    left?.addEventListener("wheel",  onWheel, { passive: false });
    right?.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      left?.removeEventListener("wheel",  onWheel);
      right?.removeEventListener("wheel", onWheel);
    };
  }, [goTo]);

  // ── Theme helpers ─────────────────────────────────────────────
  const isDark = mounted ? resolvedTheme === "dark" : false;
  const getSlideBg = (i: number) =>
    mounted ? (isDark ? SLIDE_BG_DARK : SLIDE_BG_LIGHT)[i % SLIDE_BG_DARK.length] : undefined;
  const dotActive   = isDark ? "#e8e8e8" : "#1a1a1a";
  const dotInactive = isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.14)";

  return (
    <div className="h-screen w-screen overflow-hidden bg-white dark:bg-[#080808]">

      {/* ════════════ MOBILE (< md) ════════════ */}
      <div className="md:hidden h-screen overflow-hidden relative">

        {/* Dot progress pill */}
        <div className="absolute top-5 inset-x-0 flex justify-center z-20 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 dark:bg-white/10 backdrop-blur-sm">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Project ${i + 1}`}
                className="h-[4px] rounded-full transition-[width] ease-out"
                style={{
                  width: i === current ? 18 : 4,
                  background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
                  transitionDuration: "380ms",
                }}
              />
            ))}
          </div>
        </div>

        {/* Mobile track */}
        <div ref={mobileTrackRef} className="flex flex-col will-change-transform">
          {projects.map((project, i) => (
            <div
              key={i}
              className="w-full h-screen flex-shrink-0 flex flex-col bg-background"
              style={{ background: getSlideBg(i) }}
            >
              {/* Visual — swipe zone */}
              <div
                className="relative flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-black"
                style={{ height: "42svh" }}
                onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY; }}
                onTouchEnd={(e) => {
                  const dy = touchStartY.current - e.changedTouches[0].clientY;
                  if (Math.abs(dy) > TOUCH_THR) goTo(currentRef.current + (dy > 0 ? 1 : -1));
                }}
              >
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" priority={i === 0} />
                ) : project.video ? (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video src={project.video as string} autoPlay muted loop playsInline className="w-full h-full object-contain" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${ACCENTS[i % ACCENTS.length]}22, ${ACCENTS[i % ACCENTS.length]}08)` }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill={ACCENTS[i % ACCENTS.length]}><path d="M8 5v14l11-7z" /></svg>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                  style={{ background: `${ACCENTS[i % ACCENTS.length]}dd` }}>
                  {String(i + 1).padStart(2, "0")} / {TOTAL}
                </div>
                <div className="absolute bottom-3 right-4 flex gap-1.5">
                  {i > 0 && (
                    <button onClick={() => goTo(i - 1)} className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" /></svg>
                    </button>
                  )}
                  {i < TOTAL - 1 && (
                    <button onClick={() => goTo(i + 1)} className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
                    </button>
                  )}
                </div>
              </div>
              {/* Info scrollable */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-5 pt-5 pb-28">
                <ProjectInfo project={project} i={i} clamp={false} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════ DESKTOP (md+) ════════════ */}
      <div className="hidden md:flex h-screen w-screen overflow-hidden">

        {/* Left column — static content, wheel navigates */}
        <div
          ref={leftColRef}
          className="w-[44%] h-screen flex flex-col border-r border-gray-100 dark:border-white/[0.04]"
          data-lenis-prevent
        >
          {/* Animated slide content */}
          <div className="relative flex-1 min-h-0 px-[clamp(32px,5vw,72px)] pt-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="absolute inset-x-[clamp(32px,5vw,72px)] top-16 bottom-0 overflow-y-auto pr-1"
                animate={{ opacity: i === current ? 1 : 0, y: i === current ? 0 : 14 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ pointerEvents: i === current ? "auto" : "none" }}
              >
                <ProjectInfo project={project} i={i} clamp />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 border-t border-gray-200 dark:border-white/[0.07] px-[clamp(32px,5vw,72px)] py-5 flex flex-col gap-3">
            <p className="text-xs text-gray-400 dark:text-white/20 tracking-wide">
              Dự án cá nhân &amp; thực tập
            </p>
            <p className="text-[24px] font-bold tracking-tight leading-none">
              <span style={{ color: "#25f4ee" }}>duc</span>
              <span className="text-gray-900 dark:text-white">tv</span>
              <span className="text-gray-300 dark:text-white/30">.dev</span>
            </p>
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Project ${i + 1}`}
                  className="h-[5px] rounded-full transition-[width] ease-out"
                  style={{
                    width: i === current ? 22 : 6,
                    background: i === current ? dotActive : dotInactive,
                    transitionDuration: "380ms",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right column — visual carousel */}
        <div
          ref={rightColRef}
          className="flex-1 h-screen overflow-hidden"
          data-lenis-prevent
          onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY; }}
          onTouchEnd={(e) => {
            const dy = touchStartY.current - e.changedTouches[0].clientY;
            if (Math.abs(dy) > TOUCH_THR) goTo(currentRef.current + (dy > 0 ? 1 : -1));
          }}
        >
          <div ref={trackRef} className="flex flex-col will-change-transform">
            {projects.map((project, i) => (
              <div
                key={i}
                className="w-full h-screen flex-shrink-0 flex flex-col items-center justify-center gap-5 bg-background"
                style={{ background: getSlideBg(i) }}
              >
                <div className="w-[clamp(300px,44%,520px)]">
                  <ProjectVisual project={project} i={i} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700 dark:text-white/60">{project.title}</p>
                  <p className="text-xs text-gray-400 dark:text-white/25 mt-1">{project.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

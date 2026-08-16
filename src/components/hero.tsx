"use client";

import { useTypewriter } from "@/hooks/use-typewriter";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const HEADLINE = "Build fast. Ship clean.";

type HeroProps = {
  name: string;
  description: string;
};

export function Hero({ name, description }: HeroProps) {
  const displayName = name.split(" ").at(-1) ?? name;
  const { typed } = useTypewriter(HEADLINE, 45);

  return (
    <div className="space-y-4 pb-2 pt-10 sm:pt-16">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
        ductv.dev / {displayName}
      </div>

      <h1
        aria-label={HEADLINE}
        className="flex items-center gap-3 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
      >
        <Terminal className="size-7 shrink-0 sm:size-10" aria-hidden="true" />
        <span aria-hidden="true">
          {typed}
          <motion.span
            className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-foreground align-middle"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
          />
        </span>
      </h1>

      <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2 pt-2">
        <a
          href="#projects"
          className="rounded-sm border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          View work
        </a>
        <a
          href="mailto:vietducdtu@gmail.com"
          className="rounded-sm border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Contrast } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      className={cn("inline-flex items-center justify-center text-inherit", className)}
      aria-label="Toggle theme"
      theme={resolvedTheme === "dark" ? "dark" : resolvedTheme === "light" ? "light" : undefined}
      onThemeChange={setTheme}
    >
      <Contrast className="h-full w-full" />
    </AnimatedThemeToggler>
  );
}

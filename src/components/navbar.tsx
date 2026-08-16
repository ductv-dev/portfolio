"use client";

import { DATA } from "@/data/resume";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { Dock, DockIcon, type DockIconProps } from "./magicui/dock";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
} as const;

const MotionLink = motion(Link);

type MagneticDockLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  isExternal?: boolean;
  children: ReactNode;
} & Pick<DockIconProps, "mousex" | "magnification" | "distance">;

function MagneticDockLink({
  href,
  label,
  isActive = false,
  isExternal = false,
  children,
  mousex,
  magnification,
  distance,
}: MagneticDockLinkProps) {
  const magnetic = useMagnetic<HTMLAnchorElement>(0.28);

  return (
    <DockIcon mousex={mousex} magnification={magnification} distance={distance}>
      <MotionLink
        ref={magnetic.ref}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "relative size-10 overflow-hidden rounded-full transition-colors will-change-transform sm:size-12",
          isActive
            ? "text-primary-foreground hover:text-primary-foreground"
            : "text-foreground/75 hover:text-foreground",
        )}
        style={magnetic.style}
        onMouseMove={magnetic.onMouseMove}
        onMouseLeave={magnetic.onMouseLeave}
        whileTap={{ scale: 0.94 }}
        transition={spring}
        aria-label={label}
        title={label}
      >
        {isActive && (
          <motion.span
            layoutId="active-dock-link"
            className="absolute inset-1 rounded-full bg-primary shadow-lg shadow-foreground/15"
            transition={spring}
          />
        )}
        <span className="relative z-10">{children}</span>
      </MotionLink>
    </DockIcon>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-[calc(0.75rem+env(safe-area-inset-bottom))] flex h-full max-h-14 origin-bottom px-2 sm:mb-7 sm:max-h-16 sm:px-4 md:hidden print:hidden">
      <div className="fixed inset-x-0 bottom-0 h-20 w-full border-t border-white/10 bg-background/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background/40 dark:border-white/20" />

      <Dock
        magnification={52}
        distance={96}
        className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full max-w-[calc(100vw-1rem)] transform-gpu items-center rounded-[1.25rem] border border-foreground/10 bg-background/70 px-1.5 pb-1.5 shadow-2xl shadow-foreground/10 backdrop-blur-2xl dark:bg-background/60 sm:rounded-[1.5rem] sm:px-2 sm:pb-2"
      >
        {DATA.navbar.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href);

          return (
            <MagneticDockLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={isActive}
            >
              <item.icon className="size-4" />
            </MagneticDockLink>
          );
        })}

        <Separator orientation="vertical" className="mx-0.5 h-7 sm:mx-1 sm:h-8" />

        {Object.entries(DATA.contact.social)
          .filter(([, social]) => social.navbar)
          .map(([name, social]) => (
            <MagneticDockLink
              key={name}
              href={social.url}
              label={name}
              isExternal
            >
              <social.icon className="size-4" />
            </MagneticDockLink>
          ))}

        <Separator orientation="vertical" className="mx-0.5 h-7 sm:mx-1 sm:h-8" />

        <div className="px-1">
          <AnimatedThemeToggler className="inline-flex size-10 items-center justify-center rounded-full text-foreground/75 transition-colors hover:bg-accent hover:text-foreground sm:size-12" />
        </div>
      </Dock>
    </div>
  );
}

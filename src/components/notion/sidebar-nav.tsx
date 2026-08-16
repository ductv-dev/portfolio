"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  ChevronsLeft,
  ChevronsRight,
  FileText,
  GraduationCap,
  Mail,
  Rocket,
  User,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BLOCK_LINKS = [
  { id: "about", icon: User, label: "About" },
  { id: "work", icon: Briefcase, label: "Work" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "skills", icon: Wrench, label: "Stack" },
  { id: "projects", icon: Rocket, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
] as const;

// Desktop only — mobile navigation is handled by the floating dock (components/navbar.tsx).
export function SidebarNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--sidebar-w",
      collapsed ? "3.5rem" : "16rem",
    );
  }, [collapsed]);

  const socials = Object.entries(DATA.contact.social).filter(
    ([, social]) => social.navbar,
  );

  const handleBlockClick = (id: string) => (event: React.MouseEvent) => {
    if (isHome) {
      event.preventDefault();
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 hidden flex-col border-r border-border bg-card md:flex",
        collapsed ? "w-14" : "w-64",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-4",
          collapsed && "justify-center px-0",
        )}
      >
        <FileText className="size-[18px] shrink-0 text-foreground" aria-hidden />
        {!collapsed && (
          <span className="truncate text-sm font-semibold text-foreground">
            ductv.dev
          </span>
        )}
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2">
        {DATA.navbar.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent",
                active ? "bg-accent font-medium text-foreground" : "text-muted-foreground",
                collapsed && "justify-center px-0",
              )}
              title={item.label}
            >
              <item.icon className="size-4 shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}

        {!collapsed && (
          <p className="px-2 pb-1 pt-3 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
            On this page
          </p>
        )}
        {BLOCK_LINKS.map((block) => (
          <Link
            key={block.id}
            href={`/#${block.id}`}
            onClick={handleBlockClick(block.id)}
            className={cn(
              "flex items-center gap-2 rounded-sm py-1.5 pl-5 pr-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
              collapsed && "justify-center pl-0",
            )}
            title={block.label}
          >
            <block.icon className="size-4 shrink-0" aria-hidden />
            {!collapsed && <span className="truncate">{block.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="space-y-0.5 border-t border-border px-2 py-2">
        {socials.map(([name, social]) => (
          <a
            key={name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
              collapsed && "justify-center px-0",
            )}
            title={social.name}
          >
            <social.icon className="size-4 shrink-0" />
            {!collapsed && <span className="truncate">{social.name}</span>}
          </a>
        ))}
        <AnimatedThemeToggler
          className={cn(
            "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
            collapsed && "justify-center px-0",
          )}
        />
      </div>

      <button
        type="button"
        onClick={() => setCollapsed((value) => !value)}
        className="flex items-center justify-center gap-2 border-t border-border py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <ChevronsRight className="size-4" />
        ) : (
          <ChevronsLeft className="size-4" />
        )}
      </button>
    </aside>
  );
}

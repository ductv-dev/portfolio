"use client";

import { NotionBlock } from "@/components/notion/notion-block";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

type CollapsibleSectionProps = {
  id: string;
  icon: ReactNode;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export function CollapsibleSection({
  id,
  icon,
  title,
  defaultOpen = true,
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <NotionBlock id={id} className="scroll-mt-24 py-3">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-2 rounded-sm px-1 py-1 text-left transition-colors hover:bg-accent"
        aria-expanded={open}
      >
        <ChevronRight
          className={`size-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-90" : "rotate-0"}`}
        />
        <span className="shrink-0 text-muted-foreground [&>svg]:size-[18px]" aria-hidden>
          {icon}
        </span>
        <span className="text-lg font-semibold text-foreground">{title}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-1 pb-2 pl-7 pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </NotionBlock>
  );
}

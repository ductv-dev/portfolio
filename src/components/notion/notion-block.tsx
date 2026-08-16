import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";
import type { ReactNode } from "react";

type NotionBlockProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

// Purely decorative "this is an editable block" affordance — no real drag-and-drop.
export function NotionBlock({ children, className, id }: NotionBlockProps) {
  return (
    <div id={id} className={cn("group relative", className)}>
      <span className="pointer-events-none absolute -left-6 top-1 opacity-0 transition-opacity group-hover:opacity-100 sm:-left-7">
        <GripVertical className="size-4 text-muted-foreground" />
      </span>
      {children}
    </div>
  );
}

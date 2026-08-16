import { getTagColorClass } from "@/lib/notion-colors";
import { cn } from "@/lib/utils";

type NotionTagProps = {
  children: string;
  className?: string;
};

export function NotionTag({ children, className }: NotionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] px-2 py-0.5 text-xs font-medium leading-5",
        getTagColorClass(children),
        className,
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-muted-foreground"
    >
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && <span className="text-muted-foreground/60">/</span>}
          {item.href ? (
            <Link href={item.href} className="rounded-sm px-1 py-0.5 transition-colors hover:bg-accent hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span className="px-1 py-0.5 text-foreground">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}

export function BackLink({
  href,
  children,
  onClick,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center gap-1.5 rounded-sm px-1.5 py-1 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
    className,
  );

  if (onClick && !href) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        <ArrowLeft className="size-3.5" />
        {children}
      </button>
    );
  }

  return (
    <Link href={href ?? "#"} onClick={onClick} className={classes}>
      <ArrowLeft className="size-3.5" />
      {children}
    </Link>
  );
}

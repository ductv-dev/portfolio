"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NotionTag } from "@/components/notion/notion-tag";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer rounded-sm px-2 py-2 transition-colors hover:bg-accent"
      onClick={handleClick}
    >
      <div className="flex gap-3">
        <Avatar className="size-9 flex-none border border-border bg-card">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-x-2">
            <h3 className="inline-flex flex-wrap items-center gap-1.5 text-sm font-medium text-foreground">
              {title}
              {badges?.map((badge, index) => (
                <NotionTag key={index}>{badge}</NotionTag>
              ))}
              <ChevronRight
                className={cn(
                  "size-3.5 text-muted-foreground transition-transform duration-200",
                  isExpanded ? "rotate-90" : "rotate-0",
                )}
              />
            </h3>
            <div className="shrink-0 text-xs tabular-nums text-muted-foreground">{period}</div>
          </div>
          {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden text-sm leading-6 text-muted-foreground"
            >
              <p className="pt-2">{description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </Link>
  );
};

"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import Markdown from "react-markdown";

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
} as const;

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  index?: number;
}

function ProjectMedia({
  title,
  image,
  video,
  className,
}: Pick<Props, "title" | "image" | "video"> & { className?: string }) {
  if (video) {
    return (
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className={cn("h-full w-full object-cover object-top", className)}
      />
    );
  }

  if (image) {
    return (
      <Image
        src={image}
        alt={title}
        width={1100}
        height={720}
        className={cn("h-full w-full object-cover object-top", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.28),transparent_28%),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--background)))]",
        className,
      )}
    >
      <span className="px-8 text-center text-3xl font-black tracking-[-0.06em] text-foreground/70">
        {title}
      </span>
    </div>
  );
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
  index = 0,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pointer = useMousePosition();
  const mediaId = `project-media-${title.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <>
      <motion.article
        className={cn(
          "group relative cursor-pointer border-t border-foreground/10 py-6 outline-none last:border-b focus-visible:ring-1 focus-visible:ring-ring sm:py-10",
          className,
        )}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ ...spring, delay: index * 0.04 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={pointer.onMouseMove}
        onClick={() => setIsExpanded(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsExpanded(true);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="grid gap-4 sm:gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <motion.h3
              layout="position"
              className="text-balance text-2xl font-black leading-[0.98] tracking-[-0.06em] transition-colors group-hover:text-foreground sm:text-4xl md:text-5xl"
            >
              {title}
            </motion.h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-3">
              {dates}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            View
            <span className="h-px w-10 origin-left bg-foreground/30 transition-transform duration-500 group-hover:scale-x-150" />
          </div>
        </div>

        <motion.div
          layoutId={`${mediaId}-mobile`}
          className="mt-5 h-44 overflow-hidden rounded-[1.25rem] border border-foreground/10 bg-secondary shadow-xl shadow-foreground/5 sm:h-56 md:hidden"
          transition={spring}
        >
          <ProjectMedia title={title} image={image} video={video} />
        </motion.div>

        <AnimatePresence>
          {isHovered && !isExpanded && (
            <motion.div
              layoutId={mediaId}
              className="pointer-events-none fixed left-0 top-0 z-40 hidden h-64 w-[24rem] overflow-hidden rounded-[1.75rem] border border-white/20 bg-background shadow-2xl shadow-foreground/20 will-change-transform md:block"
              style={{ x: pointer.x, y: pointer.y }}
              initial={{ opacity: 0, scale: 0.82, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 1 }}
              transition={spring}
            >
              <ProjectMedia title={title} image={image} video={video} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-background/85 px-3 py-3 backdrop-blur-2xl sm:px-8 sm:py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-card shadow-2xl sm:rounded-[2rem]"
              initial={{ y: 42 }}
              animate={{ y: 0 }}
              exit={{ y: 24 }}
              transition={spring}
              onClick={(event) => event.stopPropagation()}
            >
              <motion.div
                layoutId={mediaId}
                className="relative h-[32vh] min-h-56 overflow-hidden bg-secondary sm:h-[42vh] sm:min-h-72"
                transition={spring}
              >
                <ProjectMedia title={title} image={image} video={video} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-black/45 sm:right-4 sm:top-4"
                  aria-label="Close project details"
                >
                  <X className="size-4" />
                </button>
              </motion.div>

              <div className="grid gap-6 p-5 sm:gap-8 sm:p-10 md:grid-cols-[1fr_0.75fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {dates}
                  </p>
                  <h2 className="mt-3 text-balance text-3xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl">
                    {title}
                  </h2>
                  <Markdown className="prose mt-6 max-w-none text-pretty text-sm leading-7 text-muted-foreground dark:prose-invert">
                    {description}
                  </Markdown>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {links?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants({ size: "sm" }),
                          "gap-2 rounded-full",
                        )}
                      >
                        {item.icon}
                        {item.type}
                      </Link>
                    ))}
                    {href && (
                      <Link
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" }),
                          "gap-2 rounded-full",
                        )}
                      >
                        Open project
                        <ExternalLink className="size-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

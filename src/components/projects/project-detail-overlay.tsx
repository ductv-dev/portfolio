"use client";

import { BackLink } from "@/components/notion/breadcrumb";
import { NotionTag } from "@/components/notion/notion-tag";
import type { Project } from "@/components/projects/types";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

type ProjectDetailOverlayProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDetailOverlay({ project, onClose }: ProjectDetailOverlayProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto bg-background/95 px-4 py-6 sm:px-8 sm:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <BackLink onClick={onClose}>Back to Projects</BackLink>

            <h2 className="mt-4 text-2xl font-semibold text-foreground">{project.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{project.dates}</p>

            <Markdown className="prose prose-sm mt-5 max-w-none text-pretty leading-7 text-muted-foreground dark:prose-invert">
              {project.description}
            </Markdown>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <NotionTag key={tech}>{tech}</NotionTag>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.links?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-accent"
                >
                  {link.icon}
                  {link.type}
                </Link>
              ))}
              {project.href && (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  Open project
                  <ExternalLink className="size-3.5" />
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

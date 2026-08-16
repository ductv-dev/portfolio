"use client";

import { ProjectDetailOverlay } from "@/components/projects/project-detail-overlay";
import { ProjectGalleryCard } from "@/components/projects/project-gallery-card";
import { ProjectTableRow } from "@/components/projects/project-table-row";
import type { Project } from "@/components/projects/types";
import { cn } from "@/lib/utils";
import { LayoutGrid, Table2 } from "lucide-react";
import { useState } from "react";

type ProjectDatabaseProps = {
  projects: readonly Project[];
};

type ViewMode = "gallery" | "table";

export function ProjectDatabase({ projects }: ProjectDatabaseProps) {
  const [view, setView] = useState<ViewMode>("gallery");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <div>
      <div className="mb-3 flex items-center justify-end gap-1">
        <button
          type="button"
          onClick={() => setView("gallery")}
          aria-pressed={view === "gallery"}
          title="Gallery view"
          className={cn(
            "flex size-7 items-center justify-center rounded-sm transition-colors hover:bg-accent",
            view === "gallery" ? "bg-accent text-foreground" : "text-muted-foreground",
          )}
        >
          <LayoutGrid className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => setView("table")}
          aria-pressed={view === "table"}
          title="Table view"
          className={cn(
            "flex size-7 items-center justify-center rounded-sm transition-colors hover:bg-accent",
            view === "table" ? "bg-accent text-foreground" : "text-muted-foreground",
          )}
        >
          <Table2 className="size-4" />
        </button>
      </div>

      {view === "gallery" ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectGalleryCard
              key={project.title}
              project={project}
              onOpen={() => setOpenProject(project)}
            />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-card text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-3 py-2 font-medium">Name</th>
                <th className="px-3 py-2 font-medium">Dates</th>
                <th className="px-3 py-2 font-medium">Tech stack</th>
                <th className="px-3 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <ProjectTableRow
                  key={project.title}
                  project={project}
                  onOpen={() => setOpenProject(project)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ProjectDetailOverlay project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}

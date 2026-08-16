import type { Project } from "@/components/projects/types";
import { ImageOff } from "lucide-react";
import Image from "next/image";

type ProjectGalleryCardProps = {
  project: Project;
  onOpen: () => void;
};

export function ProjectGalleryCard({ project, onOpen }: ProjectGalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card text-left transition-shadow hover:shadow-sm"
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-top"
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={360}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" aria-hidden>
            <ImageOff className="size-6 text-muted-foreground" />
          </div>
        )}
      </div>
      <div className="space-y-1 p-3">
        <p className="text-sm font-medium text-foreground">{project.title}</p>
        <p className="text-xs text-muted-foreground">{project.dates}</p>
      </div>
    </button>
  );
}

import { NotionTag } from "@/components/notion/notion-tag";
import type { Project } from "@/components/projects/types";

type ProjectTableRowProps = {
  project: Project;
  onOpen: () => void;
};

export function ProjectTableRow({ project, onOpen }: ProjectTableRowProps) {
  return (
    <tr
      onClick={onOpen}
      className="cursor-pointer border-b border-border transition-colors last:border-b-0 hover:bg-accent"
    >
      <td className="px-3 py-2.5 text-sm font-medium text-foreground">{project.title}</td>
      <td className="px-3 py-2.5 text-sm text-muted-foreground">{project.dates}</td>
      <td className="px-3 py-2.5">
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <NotionTag key={tech}>{tech}</NotionTag>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1 text-xs text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </td>
      <td className="px-3 py-2.5">
        <NotionTag>{project.active ? "In progress" : "Shipped"}</NotionTag>
      </td>
    </tr>
  );
}

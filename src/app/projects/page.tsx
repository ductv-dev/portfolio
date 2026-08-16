import { Breadcrumb } from "@/components/notion/breadcrumb";
import { Footer } from "@/components/footer";
import { ProjectDatabase } from "@/components/projects/project-database";
import { DATA } from "@/data/resume";
import { Rocket } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected work by ${DATA.name}.`,
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-5 pb-24 pt-8 sm:px-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />

      <div className="space-y-2">
        <h1 className="flex items-center gap-2.5 text-3xl font-semibold text-foreground">
          <Rocket className="size-7" aria-hidden />
          Projects
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          Shipping thoughtful interfaces across web, mobile, and full-stack product systems.
        </p>
      </div>

      <ProjectDatabase projects={DATA.projects} />

      <Footer />
    </main>
  );
}

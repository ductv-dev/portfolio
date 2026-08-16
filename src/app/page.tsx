import { CollapsibleSection } from "@/components/notion/collapsible-section";
import { NotionTag } from "@/components/notion/notion-tag";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectDatabase } from "@/components/projects/project-database";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { Briefcase, GraduationCap, Mail, Rocket, User, Wrench } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl space-y-2 px-5 pb-24 pt-2 sm:px-10">
      <Hero name={DATA.name} description={DATA.description} />

      <CollapsibleSection id="about" icon={<User />} title="About">
        <Markdown className="prose prose-sm max-w-none text-pretty leading-7 text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </CollapsibleSection>

      <CollapsibleSection id="work" icon={<Briefcase />} title="Work">
        <div className="space-y-1">
          {DATA.work.map((work) => (
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection id="education" icon={<GraduationCap />} title="Education">
        <div className="space-y-1">
          {DATA.education.map((education) => (
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection id="skills" icon={<Wrench />} title="Stack">
        <div className="flex flex-wrap gap-1.5">
          {DATA.skills.map((skill) => (
            <NotionTag key={skill}>{skill}</NotionTag>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection id="projects" icon={<Rocket />} title="Projects">
        <div className="space-y-3">
          <ProjectDatabase projects={DATA.projects.slice(0, 4)} />
          <Link
            href="/projects"
            className="inline-flex text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </CollapsibleSection>

      <CollapsibleSection id="contact" icon={<Mail />} title="Contact">
        <p className="max-w-lg text-pretty text-sm leading-7 text-muted-foreground">
          Send me an email at{" "}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vietducdtu@gmail.com&su=Hello&body=Hi"
            className="font-medium text-foreground underline underline-offset-4"
          >
            {DATA.contact.email}
          </Link>{" "}
          and I&apos;ll get back to you as soon as possible.
        </p>
      </CollapsibleSection>

      <Footer />
    </main>
  );
}

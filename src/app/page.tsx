"use client";

import { CinematicHero } from "@/components/cinematic-hero";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { IconCloud } from "@/components/ui/icon-cloud";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.06;

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
} as const;

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
  "figma",
  "reactnative",
];

export default function Page() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <main className="min-h-[100dvh] overflow-hidden pb-24 sm:pb-28">
      <CinematicHero
        name={DATA.name}
        initials={DATA.initials}
        description={DATA.description}
        avatarUrl={DATA.avatarUrl}
      />

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:space-y-28 sm:px-10 sm:py-24 lg:px-16">
        <motion.section
          id="about"
          className="grid gap-10 md:grid-cols-[0.65fr_1fr]"
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-18% 0px" }}
          transition={spring}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              01 / About
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl">
              Build the thing until it feels inevitable.
            </h2>
          </div>
          <Markdown className="prose max-w-none text-pretty text-base leading-8 text-muted-foreground dark:prose-invert sm:text-lg sm:leading-9">
            {DATA.summary}
          </Markdown>
        </motion.section>

        <section id="work" className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                02 / Experience
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-7xl">
                Work
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Shipping thoughtful interfaces across web, mobile, and full-stack
              product systems.
            </p>
          </div>

          <div className="grid gap-3">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="education" className="space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              03 / Education
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-7xl">
              Formation
            </h2>
          </div>
          <div className="grid gap-3">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
              >
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="skills" className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              04 / Stack
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl">
              Tools with sharp edges.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 4 + id * 0.025}>
                  <Badge className="rounded-full px-3 py-1" variant="secondary">
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-secondary/35 sm:min-h-[360px] sm:rounded-[2rem]">
            <div className="absolute inset-0 animate-grain bg-grain opacity-10" />
            <IconCloud images={images} />
          </div>
        </section>

        <section id="projects" className="space-y-8 sm:space-y-12">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              05 / Selected Work
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[0.92] tracking-[-0.08em] sm:text-8xl">
              Tap the title. Let the work surface.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              Minimal rows stay quiet until the cursor arrives on desktop. On
              mobile, each project keeps a compact preview ready to tap into a
              seamless detail view.
            </p>
          </div>

          <div>
            {DATA.projects.map((project, id) => (
              <ProjectCard
                key={project.title}
                index={id}
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[1.75rem] border border-foreground/10 bg-foreground p-6 text-background shadow-2xl shadow-foreground/10 sm:rounded-[2.5rem] sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/60">
            06 / Contact
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl">
            Have a product idea that needs a little voltage?
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-background/70 sm:mt-6 sm:text-lg sm:leading-8">
            Send me an email at{" "}
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vietducdtu@gmail.com&su=Hello&body=Hi"
              className="font-semibold text-background underline underline-offset-4"
            >
              vietducdtu@gmail.com
            </Link>{" "}
            and I’ll get back to you as soon as possible.
          </p>
        </section>
      </div>
    </main>
  );
}

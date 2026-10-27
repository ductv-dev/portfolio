/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import AiSection from "@/components/section/ai-section";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Mascot } from "@/components/mascot";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-6 flex flex-col-reverse sm:flex-row sm:items-start justify-between">
            <div className="gap-4 flex flex-col flex-1 min-w-0">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping bg-primary opacity-75" />
                    <span className="relative inline-flex size-2 bg-primary" />
                  </span>
                  Hi, I&apos;m {DATA.name.split(" ").at(-1)} · Available for hire
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-balance">
                  {DATA.hook.split(/(Claude)/).map((part, index) =>
                    part === "Claude" ? (
                      <span key={index} className="text-primary underline decoration-4 underline-offset-[6px]">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </h1>
              </BlurFade>
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg"
                delay={BLUR_FADE_DELAY * 3}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={DATA.contact.social.Email.url}
                    className="inline-flex items-center gap-2 h-11 px-5 bg-primary text-primary-foreground font-medium border-2 border-foreground transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Hire me
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                  <Link
                    href="#ai"
                    className="inline-flex items-center gap-2 h-11 px-5 bg-background text-foreground font-medium border-2 border-foreground transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    How I work with AI
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="flex-none">
              <div className="size-24 md:size-32 border-2 border-foreground shadow-brutal bg-accent p-2">
                <Mascot className="size-full" label={`${DATA.name}'s robot mascot`} />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="size-2.5 bg-primary" aria-hidden />
              About
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="ai" className="scroll-mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <AiSection />
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="size-2.5 bg-primary" aria-hidden />
              Work Experience
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="size-2.5 bg-primary" aria-hidden />
              Skills
            </h2>
          </BlurFade>
          {DATA.skills.map((skill, index) => (
            <BlurFade key={skill.group} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm text-muted-foreground">{skill.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="border bg-card border-border h-8 w-fit px-4 flex items-center gap-2 transition-colors hover:border-primary"
                    >
                      {"icon" in item && (
                        <item.icon className="size-4 overflow-hidden object-contain" />
                      )}
                      <span className="text-foreground text-sm font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="size-2.5 bg-primary" aria-hidden />
              Education
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 14 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}

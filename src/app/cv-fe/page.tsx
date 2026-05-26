"use client";

import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { GlobeIcon, MailIcon, MapPin, Phone } from "lucide-react";

function stripMd(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

const skillGroups: Record<string, string[]> = {
  "Core Frontend": ["TypeScript", "JavaScript (ES6+)", "React.js", "Next.js", "React Native"],
  "Styling & UI": ["Tailwind CSS", "Shadcn UI", "Framer Motion", "React Hook Form"],
  "State & Data": ["TanStack Query", "Zustand", "Jotai"],
  "Tools & Infra": ["Git", "Docker", "Node.js", "Figma"],
};

const featuredProjects = [
  "Taskflow - Monorepo Productivity Platform",
  "Website Spa - Personal Portfolio Template",
  "TunerVN - Cross-Platform Mobile App",
  "Interactive Wedding Invitation",
];

const feSummary =
  "Information Technology graduate with solid hands-on experience in frontend and mobile development. Specialized in building modern, pixel-perfect web applications with Next.js and cross-platform mobile apps with React Native. Experienced in translating high-fidelity Figma designs into clean, maintainable interfaces, managing complex UI states with TanStack Query and Zustand, and crafting smooth animations with Framer Motion. Holds a TOEIC score of 490. Brings a strong eye for design, component architecture expertise, and a proactive approach to delivering polished user experiences.";

export default function CVFEPage() {
  const projects = DATA.projects.filter((p) => featuredProjects.includes(p.title));

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          html, body { background: white !important; }
          .cv-paper { box-shadow: none !important; }
          @page { margin: 10mm 8mm; size: A4; }
        }
      `}</style>

      {/* Floating buttons */}
      <div className="no-print fixed right-6 top-6 z-50 flex gap-2">
        <a
          href="/"
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-lg transition hover:bg-neutral-50"
        >
          ← Back
        </a>
        <a
          href="/cv"
          className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-lg transition hover:bg-blue-50"
        >
          ⇄ Fullstack CV
        </a>
        <button
          onClick={() => window.print()}
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-700"
        >
          ↓ Save as PDF
        </button>
      </div>

      <main className="min-h-screen bg-neutral-300 py-10 print:bg-white print:py-0">
        <div className="cv-paper mx-auto max-w-[860px] bg-white shadow-2xl print:max-w-none print:shadow-none">

          {/* ── Header ── */}
          <header className="bg-neutral-900 px-10 py-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h1 className="text-[2rem] font-black leading-none tracking-tight">
                  {DATA.name}
                </h1>
                <p className="mt-2 text-[15px] font-medium text-neutral-400">
                  Frontend Developer
                </p>
                <p className="mt-3 max-w-[420px] text-[12px] leading-[1.6] text-neutral-500">
                  Passionate about crafting pixel-perfect, high-performance web and mobile experiences with React, Next.js & React Native.
                </p>
              </div>
              <div className="shrink-0 space-y-1.5 text-right text-[12px] text-neutral-400">
                <p className="flex items-center justify-end gap-2">
                  <span>{DATA.location}</span>
                  <MapPin className="size-3 shrink-0 text-neutral-500" />
                </p>
                <p className="flex items-center justify-end gap-2">
                  <span>{DATA.contact.email}</span>
                  <MailIcon className="size-3 shrink-0 text-neutral-500" />
                </p>
                <p className="flex items-center justify-end gap-2">
                  <span>{DATA.contact.tel}</span>
                  <Phone className="size-3 shrink-0 text-neutral-500" />
                </p>
                <p className="flex items-center justify-end gap-2">
                  <span>github.com/ductv-dev</span>
                  <Icons.github className="size-3 shrink-0 fill-neutral-500" />
                </p>
                <p className="flex items-center justify-end gap-2">
                  <span>ductv.dev</span>
                  <GlobeIcon className="size-3 shrink-0 text-neutral-500" />
                </p>
              </div>
            </div>
          </header>

          {/* ── Body ── */}
          <div className="flex divide-x divide-neutral-100">

            {/* ── Main column ── */}
            <div className="flex-1 space-y-6 px-9 py-7">

              {/* About */}
              <section>
                <h2 className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  About
                </h2>
                <p className="text-[12.5px] leading-[1.8] text-neutral-600">
                  {feSummary}
                </p>
              </section>

              <hr className="border-neutral-100" />

              {/* Experience */}
              <section>
                <h2 className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  Experience
                </h2>
                <div className="space-y-5">
                  {/* Weebuild first — most FE-relevant */}
                  {[...DATA.work].reverse().map((job) => (
                    <div key={job.company}>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-[13.5px] font-bold text-neutral-900">
                          {job.company.trim()}
                        </h3>
                        <span className="text-[11px] tabular-nums text-neutral-400">
                          {job.start} – {job.end ?? "Present"}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[12px] font-semibold text-neutral-500">
                        {job.title.trim()}
                        <span className="font-normal"> · {job.location.trim()}</span>
                      </p>
                      <p className="mt-1.5 text-[12px] leading-[1.7] text-neutral-600">
                        {job.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-neutral-100" />

              {/* Projects */}
              <section>
                <h2 className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  Featured Projects
                </h2>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.title}>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-[13px] font-bold text-neutral-900">
                          {project.title}
                        </h3>
                        <span className="text-[11px] tabular-nums text-neutral-400">
                          {project.dates}
                        </span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="mt-1.5 text-[11.5px] leading-[1.65] text-neutral-500">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ── Sidebar ── */}
            <aside className="w-[230px] shrink-0 space-y-6 bg-neutral-50 px-6 py-7">

              {/* Skills */}
              <section>
                <h2 className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  Skills
                </h2>
                <div className="space-y-3">
                  {Object.entries(skillGroups).map(([group, skills]) => (
                    <div key={group}>
                      <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
                        {group}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[10px] font-medium text-neutral-600"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-neutral-200" />

              {/* Education */}
              <section>
                <h2 className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  Education
                </h2>
                {DATA.education.map((edu) => (
                  <div key={edu.school}>
                    <h3 className="text-[13px] font-bold text-neutral-900">
                      {edu.school}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-[1.6] text-neutral-500">
                      {edu.degree}
                    </p>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      {edu.start} – {edu.end}
                    </p>
                  </div>
                ))}
              </section>

              <hr className="border-neutral-200" />

              {/* Languages */}
              <section>
                <h2 className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  Languages
                </h2>
                <div className="space-y-1.5 text-[12px] text-neutral-600">
                  <div className="flex justify-between">
                    <span>Vietnamese</span>
                    <span className="text-neutral-400">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-neutral-400">TOEIC 490</span>
                  </div>
                </div>
              </section>

              <hr className="border-neutral-200" />

              {/* Links */}
              <section>
                <h2 className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  Links
                </h2>
                <div className="space-y-2 text-[11.5px] text-neutral-500">
                  <p className="flex items-center gap-2">
                    <GlobeIcon className="size-3 shrink-0 text-neutral-400" />
                    <span>ductv.dev</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icons.github className="size-3 shrink-0 fill-neutral-400" />
                    <span>github.com/ductv-dev</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icons.facebook className="size-3 shrink-0 fill-neutral-400" />
                    <span>fb.com/ductv.devl</span>
                  </p>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

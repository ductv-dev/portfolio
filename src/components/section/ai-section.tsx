import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const TERMINAL_LINES = [
  { prefix: "$", text: "claude", tone: "text-foreground" },
  {
    prefix: ">",
    text: "Add refresh-token rotation to the NestJS auth module",
    tone: "text-foreground",
  },
  { prefix: "●", text: "Reading auth.service.ts, auth.controller.ts…", tone: "text-muted-foreground" },
  { prefix: "●", text: "Plan: 4 steps · 2 trade-offs flagged for review", tone: "text-muted-foreground" },
  { prefix: "✓", text: "Implementation + 12 tests passing", tone: "text-primary" },
  { prefix: "✓", text: "Reviewed & approved by Đức", tone: "text-primary" },
];

function Terminal() {
  return (
    <div className="border-2 border-foreground bg-card shadow-brutal font-mono text-xs sm:text-sm">
      <div className="flex items-center gap-2 border-b-2 border-foreground px-3 py-2">
        <span className="size-2.5 bg-primary" />
        <span className="size-2.5 bg-muted-foreground/40" />
        <span className="size-2.5 bg-muted-foreground/40" />
        <span className="ml-2 text-muted-foreground">~/projects — claude code</span>
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        {TERMINAL_LINES.map((line) => (
          <div key={line.text} className={`flex gap-2 ${line.tone}`}>
            <span className="text-primary flex-none">{line.prefix}</span>
            <span className="min-w-0">{line.text}</span>
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-primary">&gt;</span>
          <span className="w-2 h-4 bg-primary animate-blink" aria-hidden />
        </div>
      </div>
    </div>
  );
}

export default function AiSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 px-4 py-1">
            <span className="text-primary-foreground text-xs font-mono font-medium uppercase tracking-widest">
              AI-Native Workflow
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-balance">
            Claude is my co-pilot. <span className="text-primary">I&apos;m still the pilot.</span>
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            {DATA.ai.intro}
          </p>
        </div>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <Terminal />
      </BlurFade>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {DATA.ai.workflow.map((item, index) => (
          <BlurFade key={item.step} delay={BLUR_FADE_DELAY * 3 + index * 0.05} className="h-full">
            <div className="group h-full border border-border bg-card p-5 flex flex-col gap-2 transition-all duration-200 hover:border-primary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal">
              <span className="font-mono text-xs text-primary">{item.step}</span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mr-1">
            Toolkit
          </span>
          {DATA.ai.tools.map((tool) => (
            <span
              key={tool}
              className="border border-primary/40 bg-accent text-accent-foreground h-7 px-3 flex items-center text-xs font-mono font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-primary-foreground text-xs font-mono font-medium uppercase tracking-widest">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          color="hsl(var(--primary))"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-balance">
          Let&apos;s build something <span className="text-primary">great</span>
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Want to chat? Send me an email at{" "}
          <Link
            href={DATA.contact.social.Email.url}
            className="text-primary font-medium hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {DATA.contact.email}
          </Link>{" "}
          and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}


import { Icons } from "@/components/icons";
import { Docker } from "@/components/ui/svgs/docker";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Trần Viết Đức",
  initials: "TVĐ",
  url: "https://ductv.dev",
  hook: "Hire me. I build great products with Claude.",
  description:
    "AI-native Fullstack Developer. I pair my engineering fundamentals with Claude to ship scalable systems and pixel-perfect apps — faster, without cutting corners.",
  summary:
    "IT graduate from Duy Tan University. I build web apps with Next.js and NestJS and mobile apps with React Native, with hands-on experience in microservices, Docker, Redis and RabbitMQ. I care about clear system design and turning Figma designs into clean, maintainable code.",
  avatarUrl: "/avatar-new.JPG",
  ai: {
    intro:
      "AI doesn't replace engineering judgment — it multiplies it. I use Claude as a pair-programming teammate across the whole lifecycle, while I stay accountable for the architecture and every line that ships.",
    workflow: [
      {
        step: "01",
        title: "Plan before code",
        description:
          "Explore unfamiliar codebases with Claude Code, draft implementation plans and weigh trade-offs before writing a single line.",
      },
      {
        step: "02",
        title: "Ship faster",
        description:
          "Delegate scaffolding, boilerplate, migrations and refactors so my time goes into system design and product decisions.",
      },
      {
        step: "03",
        title: "Review & test",
        description:
          "AI-assisted code review, edge-case hunting and test generation before every PR — then I verify everything myself.",
      },
      {
        step: "04",
        title: "Document & learn",
        description:
          "Ramp up on new libraries in hours, not days, and keep READMEs, API docs and PR descriptions clear for the whole team.",
      },
    ],
    tools: [
      "Claude Code",
      "Claude API",
      "MCP",
      "Prompt Engineering",
      "Agentic Workflows",
      "Gemini API",
    ],
  },
  skills: [
    {
      group: "Frontend",
      items: [
        { name: "TypeScript", icon: Typescript },
        { name: "React.js", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "React Native", icon: ReactLight },
        { name: "TanStack Query" },
        { name: "Tailwind CSS" },
        { name: "Shadcn UI" },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "NestJS" },
        { name: "Node.js", icon: Nodejs },
        { name: "PostgreSQL", icon: Postgresql },
        { name: "MySQL" },
        { name: "Prisma ORM" },
        { name: "Redis" },
        { name: "RabbitMQ" },
        { name: "Socket.IO" },
      ],
    },
    {
      group: "Infra & Architecture",
      items: [
        { name: "Docker", icon: Docker },
        { name: "Microservices" },
        { name: "System Design" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ductvdev@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ductv-dev",
        icon: Icons.github,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ductvdev@gmail.com?subject=Hello%20from%20Portfolio",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: undefined,
      badges: ["Freelance"],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "",
      start: "June 2026",
      end: undefined,
      highlights: [
        "Building a point-of-sale (POS) system for a Nepali client based in Japan.",
        "Backend API with NestJS and Prisma, documented with Swagger.",
        "Admin dashboard with React (Vite) and shadcn/ui.",
      ],
    },
    {
      company: "The Black Ants",
      href: "https://theblackants.com/",
      badges: [],
          title: "Fullstack Developer",
      logoUrl: "/the-black-ants.png",
      start: "April 2026",
      end: "June 2026",
      highlights: [
        "Built production applications on a microservice architecture during a fullstack internship.",
        "Containerized services with Docker; used Redis for caching and session management and RabbitMQ for asynchronous inter-service communication.",
        "Designed database schemas for scalable, maintainable backend systems.",
      ],
    },
    {
      company: "Weebuild Viet Nam",
      href: "https://weebuild.io/",
      badges: [],
      location: "Ha Noi, Viet Nam (Remote)",
      title: "Frontend Developer (React & React Native)",
      logoUrl: "/weebuild.svg",
      start: "Aug 2025",
      end: "Dec 2025",
      highlights: [
        "Built responsive web interfaces with React, Tailwind CSS and shadcn/ui, managing server state with TanStack Query.",
        "Translated Figma designs into a React Native mobile app, with a focus on smooth UI and performance.",
      ],
    },
  ],
  education: [
    {
      school: "Duy Tan University",
      href: "https://duytan.edu.vn/",
      degree: "Bachelor of Information Technology (Software Engineering)",
      logoUrl: "/dtu.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Uni Crypto - Token Trading Exchange",
      href: "https://github.com/ductv-dev/uni_crypto-monorepo",
      dates: "Apr 2026 - May 2026",
      active: true,
      description:
        "A full-stack cryptocurrency trading platform: Next.js client, Next.js admin dashboard and NestJS backend in one pnpm + Turbo monorepo with shared Zod schemas. An event-driven matching engine per trading pair uses RabbitMQ and the Outbox pattern for order processing, with Redis pub/sub and Socket.IO for real-time trade updates.",
      technologies: [
        "NestJS",
        "Microservices",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "WebSocket",
        "Docker",
        "Prisma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ductv-dev/uni_crypto-monorepo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/uni-crypto.png",
      video: "",
    },
    {
      title: "Taskflow - Monorepo Productivity Platform",
      href: "https://github.com/ductv-dev/task-flow",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "A Todoist-inspired productivity app in a strictly typed monorepo, sharing Zod schemas and TypeScript types between the Next.js frontend and NestJS backend. REST APIs are secured with JWT in HTTP-only cookies, and UI state is managed with Zustand.",
      technologies: [
        "Monorepo",
        "TypeScript",
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Zustand",
        "Zod",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ductv-dev/task-flow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/demo-taskflow.png",
      video: "",
    },
    {
      title: "Website Spa - Personal Portfolio Template",
      href: "https://leospa-website.vercel.app/",
      dates: "Mar 2026 - Present",
      active: true,
      description:
        "A responsive, customizable personal portfolio template built with Next.js and Tailwind CSS, focused on clean UI and performance.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
        "Vercel",
        "Motion Frames",
      ],
      links: [
        {
          type: "Website",
          href: "https://leospa-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/leospa.png",
      video: "",
    },
    {
      title: "TunerVN - Cross-Platform Mobile App",
      href: "https://res.cloudinary.com/diu7vuhpk/video/upload/v1767470222/ScreenRecording_02-27-2026_17-18-44_1_ano2b3.mp4",
      dates: "Nov 2025 - Present",
      active: true,
      description:
        "A cross-platform mobile app built with Expo and React Native, turning Figma designs into a pixel-perfect UI for iOS and Android. Uses Jotai for state management and mock JSON data in place of an API.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Jotai",
        "Figma",
        "JSON Mock Data",
      ],
      links: [
        {
          type: "Demo Video",
          href: "https://res.cloudinary.com/diu7vuhpk/video/upload/v1767470222/ScreenRecording_02-27-2026_17-18-44_1_ano2b3.mp4",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/chord.jpg",
      video: "",
    },
    {
      title: "Homestay Booking Management System",
      href: undefined,
      dates: "2024 - 2025",
      active: true,
      description:
        "A full-stack platform for homestay owners to manage bookings and for customers to pay online, with VietQR automated payments and a Gemini AI chatbot. Led the 5-member Agile team as Scrum Master.",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "VietQR API",
        "Gemini AI",
        "Scrum/Agile",
      ],
      links: [],
      image: "/homes.png",
      video: "",
    },
    {
      title: "Interactive Wedding Invitation",
      href: "https://nanhvduc.ductv.dev/",
      dates: "Oct 2025 - Nov 2025",
      active: true,
      description:
        "A personalized digital wedding invitation that maps guest names from a JSON dataset, with Framer Motion entrance animations and a background audio player.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://nanhvduc.ductv.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ductv-dev/nhagai-wedding",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/diu7vuhpk/video/upload/v1767468386/demo-iv_uydubr.mov",
    },
  ],
} as const;

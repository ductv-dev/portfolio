import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { ReactNode } from "react";

type InfoItem = {
  icon: ReactNode;
  title: string;
  value?: string;
  href?: string;
};

export const DATA = {
  name: "Trần Viết Đức",
  initials: "DUCTV",
  url: "https://ductv.dev",
  location: "168 Nguyen Van Linh, Da Nang, Viet Nam",
  locationLink: "https://www.google.com/maps/place/Da+Nang,+Viet+Nam",
  description:
    "Fullstack Developer. I love architecting scalable distributed systems and crafting high-performance, pixel-perfect web applications.",
  summary:
    "Information Technology graduate with solid hands-on experience across the full development stack. Skilled in building modern web applications with [Next.js and NestJS](/#skills) and cross-platform mobile apps with React Native. Completed a fullstack internship where I applied microservice architecture, containerized services with [Docker](/#skills), leveraged [Redis](/#skills) for caching and [RabbitMQ](/#skills) for asynchronous event-driven communication, and designed scalable relational database schemas. Holds a TOEIC score of 490. I bring a proactive mindset, strong system-analysis thinking, and a keen eye for translating Figma designs into clean, maintainable code.",
  avatarUrl: "/avatar-new.JPG",
  skills: [
    "TypeScript",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "React Native",
    "NestJS",
    "Node.js",
    "Microservices",
    "PostgreSQL",
    "MySQL",
    "Prisma ORM",
    "Redis",
    "RabbitMQ",
    "Socket.IO",
    "Docker",
    "System Design",
    "TanStack Query",
    "Tailwind CSS",
    "Shadcn UI",
    "React Hook Form",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/infor", icon: Icons.user, label: "Info" },
  ],
  contact: {
    email: "vietducdtu@gmail.com",
    tel: "0866791931",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ductv-dev",
        icon: Icons.github,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/ductv.devl",
        icon: Icons.facebook,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/maprill.29/",
        icon: Icons.instagram,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:vietducdtu@gmail.com?subject=Hello%20from%20Portfolio",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "The Black Ants ",
      href: "https://theblackants.com/",
      badges: [],
      location: "Da Nang, Viet Nam ",
      title: "Fullstack Developer ",
      logoUrl: "/the-black-ants.png",
      start: "April 2026",
      end: "June 2026",
      description:
        "Completed a fullstack internship building production-grade applications with a microservice architecture. Gained hands-on experience containerizing and orchestrating services with Docker, using Redis for high-performance caching and session management, and RabbitMQ for asynchronous inter-service communication. Applied system analysis and database design principles to architect scalable, maintainable backend systems in a real-world team environment.",
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
      description:
        "Collaborated under senior mentorship to build modern web and mobile applications. Developed responsive web interfaces using React, Tailwind CSS, and shadcn/ui, while managing server state with TanStack Query. Translated high-fidelity Figma designs into a React Native mobile app focusing on smooth UI/UX and optimized performance.",
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
        "Architected an enterprise-grade, full-stack cryptocurrency trading platform using a strictly-typed Monorepo structure (pnpm workspaces + Turbo), sharing Zod validation schemas and TypeScript interfaces seamlessly across a Next.js client, Next.js admin dashboard, and NestJS backend. Engineered a distributed, event-driven matching engine per trading pair (BTC-USDT, ETH-USDT, BNB-USDT) with RabbitMQ message brokering, Outbox pattern for exactly-once order processing, and Redis pub/sub for real-time trade broadcasts via Socket.IO WebSocket gateway.",
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
        "Architected a Todoist-inspired, full-stack application utilizing a strictly typed Monorepo structure. Seamlessly shared Zod validation schemas and TypeScript interfaces between the Next.js frontend and NestJS backend. Built secure RESTful APIs with advanced JWT HTTP-only cookies and managed UI states smoothly using Zustand.",
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
        "Designed and developed a modern, responsive personal portfolio template using Next.js and Tailwind CSS. The website features a clean UI/UX design, optimized performance, and is fully customizable for developers to showcase their projects and skills effectively.",
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
        "Developed a frontend-focused mobile application using Expo and React Native. Translated high-fidelity Figma designs into a pixel-perfect user interface for both iOS and Android. Utilized Jotai for atomic state management and mock JSON files to simulate API responses, ensuring smooth data flow and seamless user interactions.",
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
      href: "https://github.com/ductv-dev",
      dates: "2024 - 2025",
      active: true,
      description:
        "Led a 5-member Agile team as Scrum Master. Developed a full-stack platform for homestay owners to manage bookings and customers to pay online. Integrated VietQR for automated payments and deployed a Gemini AI chatbot to support real-time customer interaction.",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "VietQR API",
        "Gemini AI",
        "Scrum/Agile",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ductv-dev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/homes.png",
      video: "",
    },
    {
      title: "Interactive Wedding Invitation",
      href: "https://nanhvduc.ductv.dev/",
      dates: "Oct 2025 - Nov 2025",
      active: true,
      description:
        "Developed a personalized digital wedding experience replacing traditional paper invitations. The platform dynamically maps guest names from a JSON dataset and is enhanced with smooth entrance animations via Framer Motion and an integrated background audio player.",
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
  hackathons: [],
  infor: [
    {
      icon: <Icons.location className="size-4" />,
      title: "Đà Nẵng, Việt Nam",
    },
    {
      icon: <Icons.tiktok className="size-4" />,
      title: "Kênh TikTok Đà Nẵng . Zip",
      value: "@danangzip.site",
      href: "https://www.tiktok.com/@danangzip.site",
    },
    {
      icon: <Icons.universisy className="size-4" />,
      title: "Duy Tân University",
    },
    {
      icon: <Icons.heart className="size-4" />,
      title: "Ngọc Anh",
    },
    {
      icon: <Icons.home className="size-4" />,
      title: "Quảng Trị, Việt Nam",
    },
  ] satisfies InfoItem[],
} as const;

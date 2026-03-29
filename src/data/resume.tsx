import { Icons } from "@/components/icons";
import { HomeIcon, Icon, icons, NotebookIcon, UserCheck } from "lucide-react";

export const DATA = {
  name: "Trần Viết Đức",
  initials: "DUCTV",
  url: "https://ductv.dev",
  location: "Da Nang, Viet Nam",
  locationLink: "https://www.google.com/maps/place/Da+Nang,+Viet+Nam",
  description:
    "Web and Mobile Developer. I love crafting pixel-perfect interfaces and architecting scalable full-stack applications.",
  summary:
    "Highly motivated Information Technology graduate with a strong foundation in modern JavaScript and TypeScript ecosystems. Experienced in building full-stack web and cross-platform mobile applications from scratch using [Next.js, NestJS, and React Native](/#skills). Equipped with strong logical thinking and a proactive learning attitude, I thrive on translating high-fidelity Figma designs into clean code and building robust database architectures with [PostgreSQL and Prisma](/#skills).",
  avatarUrl: "/avt.jpg",
  skills: [
    "TypeScript",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js ",
    "React Native",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Prisma ORM",
    "Tailwind CSS",
    "Shadcn UI",
    "React Hook Form",
    "Docker",
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
      end: "Present",
      description:
        "Internship at The Black Ants, working on building modern web and mobile applications.",
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
    {
      company: "Tmore 247",
      href: "https://www.facebook.com/tmorecaurong/?locale=vi_VN",
      badges: [],
      location: "Da Nang, Viet Nam",
      title: "Store Manager & Barista",
      logoUrl:
        "https://www.facebook.com/photo/?fbid=853691077268635&set=a.160689179902165&locale=vi_VN", // Bạn có thể thêm icon tách cà phê nếu có
      start: "2023",
      end: "2025",
      description:
        "Managed daily operations of a large-scale coffee shop, ensuring high-quality customer service. Developed strong interpersonal, communication, and problem-solving skills by handling scheduling and resolving on-site issues under fast-paced environments.",
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
    {
      title: "Chord Components Library",
      href: "https://chord.ductv.dev/",
      dates: "Aug 2025 - Sep 2025",
      active: true,
      description:
        "Designed and developed a collection of reusable, animated UI components for developers, focusing on modern web aesthetics and accessibility.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chord.ductv.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chord.png",
      video: "",
    },
  ],
  hackathons: [],
  infor: [
    {
      icon: <Icons.location className="size-4" />,
      title: "Đà Nẵng, Việt Nam",
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
  ],
} as const;

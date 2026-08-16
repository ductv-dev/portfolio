import type { ReactNode } from "react";

export type Project = {
  title: string;
  href?: string;
  dates: string;
  active?: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly { type: string; href: string; icon: ReactNode }[];
  image?: string;
  video?: string;
};

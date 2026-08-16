import { IntroScreen } from "@/components/intro-screen";
import Navbar from "@/components/navbar";
import { SidebarNav } from "@/components/notion/sidebar-nav";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { LinkifyProvider } from "@/provider/linkify";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  applicationName: "ductv.dev",
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon-v2.svg",
        type: "image/svg+xml",
      },
    ],
  },
  title: {
    default: `${DATA.name} | Fullstack Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: `Portfolio of ${DATA.name} - a Fullstack Developer specializing in Next.js, NestJS, microservices, Docker, and React Native, based in Da Nang. ${DATA.description}`,
  keywords: [
    DATA.name,
    "Trần Viết Đức",
    "Tran Viet Duc",
    "ductv.dev",
    "Fullstack Developer Da Nang",
    "NestJS Developer Vietnam",
    "React Developer Vietnam",
    "Software Engineer Portfolio",
    "Microservices Developer",
  ],
  openGraph: {
    title: `${DATA.name} | Fullstack Developer`,
    description: `Portfolio of ${DATA.name} - a Fullstack Developer specializing in Next.js, NestJS, microservices, and Docker, based in Da Nang.`,
    url: "/",
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | Fullstack Developer`,
    description: DATA.description,
  },
  verification: {
    google: "r28wTyKNPxZoMi0Fdqh7JCV6neoucMobgInEyhlASMo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    alternateName: "Tran Viet Duc",
    url: DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    jobTitle: "Fullstack Developer",
    worksFor: {
      "@type": "Organization",
      name: "The Black Ants",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Da Nang",
      addressCountry: "VN",
    },
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.Facebook.url,
      DATA.contact.social.Instagram.url,
    ],
    description: DATA.description,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen overflow-x-clip bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <LinkifyProvider>
            <SmoothScrollProvider>
              <IntroScreen />
              <SidebarNav />
              <div className="md:pl-[var(--sidebar-w,16rem)]">{children}</div>
              <Navbar />
            </SmoothScrollProvider>
          </LinkifyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

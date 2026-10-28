import Navbar from "@/components/navbar";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, JetBrains_Mono as FontMono } from "next/font/google";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
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
  title: {
    default: `${DATA.name} | AI-Native Fullstack Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.name} – Fullstack Developer in Da Nang building web and mobile apps with Next.js, NestJS and React Native.`,
  keywords: [
    DATA.name,
    "Tran Viet Duc",
    "ductv.dev",
    "Fullstack Developer Da Nang",
    "NestJS Developer Vietnam",
    "React Developer Vietnam",
    "Software Engineer Portfolio",
    "Microservices Developer",
    "AI-Native Developer",
    "Claude Code Developer",
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Da Nang",
      addressCountry: "VN",
    },
    sameAs: [DATA.contact.social.GitHub.url],
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
          "relative min-h-screen overflow-x-clip bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <SmoothScrollProvider>
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGrid
                  className="h-full w-full"
                  color="hsl(var(--primary))"
                  squareSize={2}
                  gridGap={2}
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                  }}
                />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
                {children}
              </div>
              <Navbar />
            </SmoothScrollProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

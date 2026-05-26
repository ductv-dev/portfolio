import Navbar from "@/components/navbar";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Grotesk as FontSans } from "next/font/google";

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
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  title: {
    default: `${DATA.name} | Fullstack Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: `Portfolio của ${DATA.name} - Fullstack Developer chuyên về Next.js, NestJS, microservices, Docker và React Native tại Đà Nẵng. ${DATA.description}`,
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
    description: `Portfolio của ${DATA.name} - Fullstack Developer chuyên về Next.js, NestJS, microservices và Docker tại Đà Nẵng.`,
    url: "/",
    siteName: DATA.name,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/avatar-new.JPG", // Đảm bảo file này tồn tại trong folder public
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
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
    images: ["/avatar-new.JPG"],
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
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <LinkifyProvider>
            <SmoothScrollProvider>
              {children}
              <Navbar />
            </SmoothScrollProvider>
          </LinkifyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

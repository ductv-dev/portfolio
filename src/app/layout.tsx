import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    // Thêm cả tên tiếng Việt có dấu để Google dễ nhận diện
    default: `${DATA.name} | Software Engineer & Frontend Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: `Portfolio của ${DATA.name} - Frontend Developer chuyên về React và React Native tại Đà Nẵng. ${DATA.description}`,
  keywords: [
    DATA.name,
    "Trần Viết Đức",
    "Tran Viet Duc",
    "ductv.dev",
    "Frontend Developer Da Nang",
    "React Developer Vietnam",
    "Software Engineer Portfolio",
  ],
  openGraph: {
    title: `${DATA.name} | Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/me.jpg", // Đảm bảo file này tồn tại trong folder public
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
    title: DATA.name,
    card: "summary_large_image",
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
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Weebuild Viet Nam",
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
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

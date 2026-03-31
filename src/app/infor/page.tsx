"use client";

import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import InforSection from "./sections/infor";
import ImageSection from "./sections/image";
import BlogSection from "./sections/blog";

type Tab = "thong-tin" | "anh" | "blog";

const TABS: { id: Tab; label: string }[] = [
  { id: "thong-tin", label: "Thông tin" },
  { id: "anh", label: "Ảnh" },
  { id: "blog", label: "Blog" },
];

export default function InfoPage() {
  const [activeTab, setActiveTab] = useState<Tab>("thong-tin");

  return (
    <div className="min-h-screen pb-20 pt-0 md:pt-6">

      {/* Container chính gom tất cả */}
      <div className="max-w-[1024px] mx-auto space-y-4 md:space-y-6">

        {/* Header Content */}
        <div className="bg-card shadow-sm dark:shadow-none dark:border border-border/50 md:rounded-xl overflow-hidden">
          {/* Cover Image */}
          <div className="relative w-full h-[180px] md:h-[280px] lg:h-[320px] bg-muted">
            <Image
              src="/ninhbinh.jpg"
              alt="Cover"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Subtle gradient for cover bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50" />
          </div>

          {/* Avatar & Info Container */}
          <div className="px-4 md:px-8 relative pb-0 md:pb-2">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 -mt-16 md:-mt-20 relative z-10">

              {/* Avatar */}
              <div className="relative size-[120px] md:size-[160px] rounded-full border-4 border-card overflow-hidden bg-muted shadow-md hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src={DATA.avatarUrl}
                  alt={`Ảnh đại diện ${DATA.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name and Job & Socials */}
              <div className="flex-1 flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-4 text-center md:text-left mt-2 md:mt-0 pb-4 md:pb-4">

                {/* Title */}

                <div className="">

                  <h1 className="text-[28px] md:text-[32px] leading-tight font-bold text-foreground">
                    {DATA.name}
                  </h1>
                  <p className="text-[15px] md:text-[16px] text-muted-foreground font-medium">
                    Fullstack Developer
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <Link
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all shadow-sm"
                      title={social.name}
                    >
                      <social.icon className="size-[18px]" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  ))}
                </div>

              </div>
            </div>

            {/* ── Tab Menu ── */}
            <div className="flex items-end gap-1 border-t border-border/50 mt-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-4 py-3 text-[15px] font-semibold transition-colors rounded-none
                    ${activeTab === tab.id
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:rounded-full after:bg-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tab Content ── */}

        {/* Thông tin tab: 2-col layout (left sidebar + right main) */}
        {activeTab === "thong-tin" && (

          <InforSection />
        )}

        {/* Ảnh tab: full width */}
        {activeTab === "anh" && (
          <div className="px-0">
            <ImageSection />
          </div>
        )}

        {/* Blog tab: centered feed */}
        {activeTab === "blog" && (
          <div className="max-w-[680px] mx-auto px-4 md:px-0">
            <BlogSection />
          </div>
        )}

      </div>
    </div>
  );
}

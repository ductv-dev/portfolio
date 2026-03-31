"use client";

import { DATA } from "@/data/resume";
import { BLOG_POSTS } from "@/data/blog-posts";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import ReactMarkdown from "react-markdown";

export default function BlogSection() {
  return (
    <div className="space-y-4 md:space-y-6">
      {BLOG_POSTS.map((post) => (
        <Card
          key={post.id}
          className="shadow-sm border-none bg-card rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          <CardHeader className="p-4 md:p-5 flex flex-row items-center gap-3 space-y-0 pb-2">
            <div className="size-10 rounded-full relative overflow-hidden bg-muted shrink-0 border border-border cursor-pointer hover:brightness-95">
              <Image src={DATA.avatarUrl} alt="Avatar" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-[15px] hover:underline cursor-pointer text-foreground">
                {DATA.name}
              </h3>
              <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
                <span className="hover:underline cursor-pointer">{post.date}</span>
                <span>·</span>
                <Icons.globe className="size-3" />
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-4 md:p-5 pt-0">
            <h4 className="font-bold text-[16px] md:text-[18px] mb-2">{post.title}</h4>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] leading-relaxed text-foreground/90">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

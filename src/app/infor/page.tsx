"use client";

import { DATA } from "@/data/resume";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Icons } from "@/components/icons";

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Container chính cho Header Profile */}
      <div className="relative">
        {/* Cover Image */}
        <div className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden group">
          <Image
            src="/avt2.jpg"
            alt="Thumbnail"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>

        {/* Avatar Container */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 translate-y-1/2 z-10">
          <div className="relative size-32 sm:size-40 md:size-48 lg:size-52 xl:size-56 group/avatar">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/80 to-blue-500/80 animate-pulse opacity-20 blur-xl group-hover/avatar:opacity-40 transition-opacity duration-500" />
            <div className="relative size-full rounded-full border-4 border-background overflow-hidden shadow-2xl">
              <Image
                src={DATA.avatarUrl}
                alt={`Ảnh đại diện ${DATA.name}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-28 lg:mt-32 border-t border-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar (Sticky on Desktop) */}
          <div className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="lg:sticky lg:top-24 space-y-8">
              
              {/* Profile Intro */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                  {DATA.name}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground font-medium">
                  Fullstack Developer / Software Engineer
                </p>
                <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                  <Badge variant="secondary" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                    Available for work
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    {DATA.location}
                  </Badge>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                  {Object.entries(DATA.contact.social).map(([name, social]) => {
                    // Check if navbar true or false is needed? Currently the social map has all.
                    return (
                      <Link 
                        key={name}
                        href={social.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2.5 rounded-full border border-border/50 bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm"
                        title={social.name}
                      >
                        <social.icon className="size-5" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Personal Details Card */}
              <Card className="border-border/50 shadow-sm overflow-hidden bg-card/40 backdrop-blur-sm">
                <CardHeader className="pb-3 border-b border-border/50 bg-muted/10">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icons.user className="size-5 text-primary" />
                    Thông tin liên hệ
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 space-y-4">
                  {DATA.infor.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="p-2 shrink-0 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link href={`mailto:${DATA.contact.email}`} className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-2 text-sm font-medium transition-all rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20">
                      <Icons.email className="size-4" />
                      Liên hệ qua Email
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* About Me Section */}
            <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-both">
              <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-border pb-3">
                <span className="text-primary tracking-widest text-lg">01.</span> Giới thiệu
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <ReactMarkdown>{DATA.summary}</ReactMarkdown>
              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
              <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-border pb-3">
                <span className="text-primary tracking-widest text-lg">02.</span> Kỹ năng
              </h2>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {DATA.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-4 py-1.5 text-sm hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default bg-card/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

             {/* Work Experience Section */}
            {DATA.work && DATA.work.length > 0 && (
              <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-both">
                <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-border pb-3">
                  <span className="text-primary tracking-widest text-lg">03.</span> Kinh nghiệm làm việc
                </h2>
                <div className="space-y-8 pt-2">
                  {DATA.work.map((work, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-muted before:absolute before:left-[-9px] before:top-2 before:size-4 before:rounded-full before:bg-primary before:border-4 before:border-background">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                         <h3 className="font-semibold text-lg text-foreground">{work.title}</h3>
                         <span className="text-sm font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                           {work.start} - {work.end}
                         </span>
                      </div>
                      {work.company && (
                        <Link href={work.href || "#"} target="_blank" className="inline-block font-medium text-primary mb-3 hover:underline">
                          {work.company}
                        </Link>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                        {work.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education Section */}
            <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700 fill-mode-both">
              <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-border pb-3">
                <span className="text-primary tracking-widest text-lg">04.</span> Học vấn
              </h2>
              <div className="grid gap-4 pt-2">
                {DATA.education.map((edu, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-5 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow group">
                    {edu.logoUrl ? (
                      <div className="relative size-16 shrink-0 rounded-lg overflow-hidden border bg-white p-1 group-hover:scale-105 transition-transform">
                        <Image src={edu.logoUrl} alt={edu.school} fill className="object-contain p-1" />
                      </div>
                    ) : (
                      <div className="relative size-16 shrink-0 rounded-lg border bg-muted/50 flex items-center justify-center">
                        <Icons.universisy className="size-8 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">{edu.school}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <div className="sm:text-right mt-3 sm:mt-0">
                       <Badge variant="secondary" className="text-primary font-medium bg-primary/10">
                         {edu.start} - {edu.end}
                       </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
}

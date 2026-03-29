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
    <div className="min-h-screen bg-[#F0F2F5] dark:bg-zinc-950 pb-20 pt-0 md:pt-6">
      
      {/* Container chính gom tất cả */}
      <div className="max-w-[1024px] mx-auto space-y-4 md:space-y-6">
        
        {/* Header Content */}
        <div className="bg-card shadow-sm dark:shadow-none dark:border border-border/50 md:rounded-xl overflow-hidden">
          {/* Cover Image */}
          <div className="relative w-full h-[180px] md:h-[280px] lg:h-[320px] bg-muted">
            <Image
              src="/avt2.jpg"
              alt="Cover"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Subtle gradient for cover bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50" />
          </div>

          {/* Avatar & Info Container */}
          <div className="px-4 md:px-8 relative pb-6 md:pb-8">
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
              
              {/* Name and Job & Socials (flex-1 to push everything in row) */}
              <div className="flex-1 flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-4 text-center md:text-left mt-2 md:mt-0">
                
                {/* Title */}
                <div>
                  <h1 className="text-[28px] md:text-[32px] leading-tight font-bold text-foreground">
                    {DATA.name}
                  </h1>
                  <p className="text-[15px] md:text-[16px] text-muted-foreground font-medium mt-1">
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
          </div>
        </div>

        {/* CSS Grid for Mobile (1 col) and Desktop (2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 px-4 md:px-0">
          
          {/* Left Column: Intro Card */}
          <div className="lg:col-span-4 shrink-0">
            <div className="sticky top-20 space-y-4 md:space-y-6">
              <Card className="shadow-sm border-none bg-card rounded-xl">
                <CardHeader className="p-4 md:p-5 pb-2">
                  <CardTitle className="text-lg font-bold">Giới thiệu</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-5 pt-0 space-y-4">
                  
                  {/* Bio */}
                  <p className="text-center lg:text-left text-foreground/90 text-[15px] italic mb-4">
                    "{DATA.description}"
                  </p>

                  {/* Info details array */}
                  <div className="space-y-4 pt-4 border-t border-border/50">
                    {DATA.work && DATA.work[0] && (
                      <div className="flex items-center gap-3">
                        <Icons.globe className="size-5 text-muted-foreground shrink-0" />
                        <span className="text-[15px]">Làm việc tại <span className="font-semibold">{DATA.work[0].company}</span></span>
                      </div>
                    )}
                    {DATA.education && DATA.education[0] && (
                      <div className="flex items-center gap-3">
                        <Icons.universisy className="size-5 text-muted-foreground shrink-0" />
                        <span className="text-[15px]">Từng học tại <span className="font-semibold">{DATA.education[0].school}</span></span>
                      </div>
                    )}
                    {DATA.infor.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="text-muted-foreground shrink-0 [&>svg]:size-5">{item.icon}</div>
                        <span className="text-[15px]">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Message / Contact button below info */}
                  <Link href={`mailto:${DATA.contact.email}`} className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-[15px] font-semibold transition-all rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                     <Icons.email className="size-[18px]" /> Liên hệ qua Email
                  </Link>

                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Main Content Details (Summary, Skills, Exp, Edu) */}
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            
            {/* About Me Section */}
            <Card className="shadow-sm border-none bg-card rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CardHeader className="p-4 md:p-6 pb-2 border-b border-border/30">
                <CardTitle className="text-xl font-bold">Về tôi</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 text-[15px] text-muted-foreground leading-relaxed">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <ReactMarkdown>{DATA.summary}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="shadow-sm border-none bg-card rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
              <CardHeader className="p-4 md:p-6 pb-2 border-b border-border/30">
                <CardTitle className="text-xl font-bold">Kỹ năng chuyên môn</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {DATA.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 md:px-4 py-1.5 text-[13px] md:text-sm hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all cursor-default bg-muted/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work Experience Section */}
            {DATA.work && DATA.work.length > 0 && (
              <Card className="shadow-sm border-none bg-card rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                <CardHeader className="p-4 md:p-6 pb-2 border-b border-border/30">
                  <CardTitle className="text-xl font-bold">Kinh nghiệm làm việc</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-6">
                    {DATA.work.map((work, index) => (
                      <div key={index} className="relative pl-6 md:pl-8 border-l-2 border-muted before:absolute before:left-[-9px] before:top-2 before:size-4 before:rounded-full before:bg-primary before:border-4 before:border-background">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4 mb-2">
                          <h3 className="font-bold text-[16px] text-foreground">{work.title}</h3>
                          <Badge variant="outline" className="w-fit text-xs bg-muted/30">
                            {work.start} - {work.end}
                          </Badge>
                        </div>
                        {work.company && (
                          <Link href={work.href || "#"} target="_blank" className="inline-block font-semibold text-primary mb-2 hover:underline text-[14px]">
                            {work.company}
                          </Link>
                        )}
                        <p className="text-muted-foreground text-[14px] md:text-[15px] leading-relaxed text-justify">
                          {work.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Education Section */}
            {DATA.education && DATA.education.length > 0 && (
              <Card className="shadow-sm border-none bg-card rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                <CardHeader className="p-4 md:p-6 pb-2 border-b border-border/30">
                  <CardTitle className="text-xl font-bold">Học vấn</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="grid gap-4">
                    {DATA.education.map((edu, index) => (
                      <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors">
                        {edu.logoUrl ? (
                          <div className="relative size-14 shrink-0 rounded-md overflow-hidden bg-white p-1 shadow-sm">
                            <Image src={edu.logoUrl} alt={edu.school} fill className="object-contain p-1" />
                          </div>
                        ) : (
                          <div className="relative size-14 shrink-0 rounded-md bg-muted flex items-center justify-center">
                            <Icons.universisy className="size-6 text-muted-foreground" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-bold text-[16px] text-foreground">{edu.school}</h3>
                          <p className="text-[14px] text-muted-foreground mt-0.5">{edu.degree}</p>
                        </div>
                        <div className="sm:text-right mt-2 sm:mt-0">
                          <Badge variant="secondary" className="text-primary font-medium bg-primary/10 border-primary/20">
                            {edu.start} - {edu.end}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

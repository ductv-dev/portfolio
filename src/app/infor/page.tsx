"use client";

import Image from "next/image";

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Container chính cho Header Profile */}
      <div className="relative">
        {/* === BƯỚC 2: Thẻ wrapper có overflow-hidden cho riêng ảnh bìa === */}
        <div className="relative w-full h-[180px] md:h-[250px] lg:h-[350px] overflow-hidden group">
          <Image
            src="/avt2.jpg"
            alt="Thumbnail"
            fill
            priority
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
        </div>

        {/* === BƯỚC 1: Đặt Container Avatar ở ngoài thẻ Cover và sử dụng relative === */}
        {/* Container Avatar - Bây giờ nó nằm đè lên trên nhờ z-index và không bị cắt */}
        <div
          className="
            absolute bottom-0
            left-1/2 -translate-x-1/2
            lg:left-12 lg:translate-x-0
            translate-y-1/2
            z-10
          "
        >
          <div className="relative size-32 sm:size-40 md:size-48 lg:size-52 xl:size-56">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-400 animate-pulse opacity-20 blur-lg" />
            <Image
              src="/avt.jpg"
              alt="Ảnh đại diện Viết Đức"
              fill
              className="object-cover rounded-full border-4 border-white dark:border-zinc-900 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Info Section - Phần này giữ nguyên */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            pt-20 md:pt-24 lg:pt-8
            flex flex-col items-center text-center
            lg:flex-row lg:items-end lg:text-left
            gap-4 lg:gap-8
          "
        >
          {/* Spacer */}
          <div className="hidden lg:block lg:w-52 xl:w-56 shrink-0" />

          {/* Text Content */}
          <div className="flex-1 mt-2 pb-2">
            <h1 className="text-3xl text-nowrap md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Trần Viết Đức
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Fullstack Developer
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <p className="text-base md:text-lg font-medium italic">
                Black Ants JSC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Line */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <hr className="border-border" />
      </div>
    </div>
  );
}

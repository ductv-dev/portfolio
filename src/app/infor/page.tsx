"use client";

import { DATA } from "@/data/resume";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Icons } from "@/components/icons";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Vừa ra trường đã... lấy vợ: Khi 'Senior' của cuộc đời hơn mình 6 tuổi",
    date: "27 Tháng 12, 2025",
    content: `Người ta thường nói, sau khi tốt nghiệp **Đại học Duy Tân**, việc quan trọng nhất là tìm một "Offer" xịn. Nhưng với mình, mình đã tìm thấy "Bản hợp đồng" quan trọng nhất đời mình từ trước khi cầm tấm bằng trên tay.
    
Hôm nay, gác lại những dòng code React hay Next.js, mình muốn chia sẻ về một hành trình khác: **Hành trình trở thành người đàn ông của gia đình.**

**1. Khoảng cách 6 tuổi: Khi số tuổi chỉ là một "Variable"**  
Vợ mình – Ngọc Anh – hơn mình 6 tuổi. Trong thế giới lập trình, 6 năm có thể là khoảng cách giữa một công nghệ cũ và một Framework hiện đại. Nhưng trong tình yêu, 6 năm ấy lại là sự bù trừ hoàn hảo.

Cô ấy mang đến sự điềm tĩnh, thấu hiểu và kinh nghiệm của một người đã va chạm với đời. Còn mình mang đến sự nhiệt huyết, năng nổ và cả cái "liều" của một chàng trai vừa ra trường. Chúng mình không nhìn vào con số, chúng mình nhìn vào sự **đồng nhất về tần số (Frequency Compatibility).**`,
    likes: "3.2K",
    comments: "450",
    shares: "128"
  },
  {
    id: 2,
    title: "Từ Đà Nẵng đến Hà Nội: Hành trình tìm kiếm 'Art' trong những dòng Code",
    date: "23 Tháng 12, 2025",
    content: `Chào mọi người, mình là **Viết Đức** (hay còn được biết đến với cái tên **DUCTV**).

Nếu bạn đang đọc những dòng này, có lẽ chúng ta có chung một niềm đam mê: **Sự giao thoa giữa logic và thẩm mỹ.** Mình vừa khép lại 4 năm rực rỡ tại **Đại học Duy Tân (DTU)** với tấm bằng Kỹ thuật phần mềm trên tay. Nhưng thay vì chọn một bến đỗ quen thuộc tại quê hương Đà Nẵng, mình đã quyết định xách balo ra Hà Nội – bắt đầu hành trình "tầm sư học đạo" tại **Weebuild Viet Nam**.

**Rời xa vùng an toàn**  
Hà Nội đón mình bằng cái lạnh đặc trưng và nhịp sống hối hả, rất khác với sự bình yên của biển Mỹ Khê. Tại đây, mình may mắn được làm việc và học hỏi dưới sự dẫn dắt của những "người anh" Senior dày dặn kinh nghiệm.

Hành trình này không chỉ là thay đổi địa lý, mà là bước ngoặt để mình nâng cấp tư duy từ một sinh viên sang một **Software Engineer** thực thụ.`,
    likes: "1.8K",
    comments: "215",
    shares: "85"
  },
  {
    id: 3,
    title: "Tại sao lại là Đà Nẵng? Nơi 'Sóng Biển' Gặp Gỡ 'Dòng Code'",
    date: "22 Tháng 12, 2025",
    content: `Có người hỏi mình: _"Tại sao không chọn Sài Gòn sôi động hay ở lại hẳn Thủ đô để thăng tiến, mà lại luôn hướng về Đà Nẵng?"_

Với mình, Đà Nẵng không chỉ là nơi mình sinh ra hay lớn lên, mà đó là thành phố của sự **cân bằng** – một yếu tố sống còn đối với một người làm nghề sáng tạo và kỹ thuật như lập trình viên.

**1. Trạm sạc năng lượng cho tâm hồn**  
Lập trình là một công việc tiêu tốn rất nhiều năng lượng não bộ. Những lúc đối mặt với một chiếc Bug "khó nhằn" hay một Logic phức tạp, việc được chạy xe dọc con đường biển Võ Nguyên Giáp, hít hà mùi muối mặn và nghe tiếng sóng vỗ là cách mình "reset" bản thân nhanh nhất.

**2. Hệ sinh thái IT đang "chuyển mình" mạnh mẽ**  
Nhiều người lầm tưởng Đà Nẵng chỉ mạnh về du lịch. Nhưng thực tế, những năm gần đây, thành phố quê hương mình đang dần trở thành một **"Silicon Valley" của miền Trung**. Từ những ngày còn ngồi trên ghế nhà trường tại Đại học Duy Tân, mình đã thấy sự gắn kết trong cộng đồng anh em Developer miền Trung thật sự rất tuyệt vời.`,
    likes: "2.5K",
    comments: "530",
    shares: "150"
  }
];

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

              {/* Name and Job & Socials */}
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

                <CardContent className="p-4 md:p-5 pt-0 space-y-4">
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

          {/* Right Column: Newsfeed & Main Content Details */}
          <div className="lg:col-span-8 space-y-4 md:space-y-6">

            {/* --- NEWSFEED (BÀI VIẾT) --- */}



            {/* Render Blog Posts */}
            {BLOG_POSTS.map((post) => (
              <Card key={post.id} className="shadow-sm border-none bg-card rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CardHeader className="p-4 md:p-5 flex flex-row items-center gap-3 space-y-0 pb-2">
                  <div className="size-10 rounded-full relative overflow-hidden bg-muted shrink-0 border border-border cursor-pointer hover:brightness-95">
                    <Image src={DATA.avatarUrl} alt="Avatar" fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-[15px] hover:underline cursor-pointer text-foreground">{DATA.name}</h3>
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
        </div>
      </div>
    </div>
  );
}

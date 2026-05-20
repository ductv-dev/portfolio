import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Thông tin cá nhân | ${DATA.name}`,
  description: `Thông tin cá nhân, hình ảnh và blog ngắn của ${DATA.name} - Frontend Developer tại Đà Nẵng.`,
  alternates: {
    canonical: "/infor",
  },
  openGraph: {
    title: `Thông tin cá nhân | ${DATA.name}`,
    description: `Thông tin cá nhân, hình ảnh và blog ngắn của ${DATA.name}.`,
    url: "/infor",
    images: [
      {
        url: "/banner.JPG",
        width: 1200,
        height: 630,
        alt: `${DATA.name} cover image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Thông tin cá nhân | ${DATA.name}`,
    description: `Thông tin cá nhân, hình ảnh và blog ngắn của ${DATA.name}.`,
    images: ["/banner.JPG"],
  },
};

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

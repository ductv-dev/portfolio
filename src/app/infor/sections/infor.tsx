"use client";

import { DATA } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default function InforSection() {
  return (
    <Card className="shadow-sm border-none bg-card rounded-xl">
      <CardContent className="p-4 md:p-5 pt-0 space-y-4">
        {/* Info details array */}
        <div className="space-y-4 pt-4 border-t border-border/50">
          {DATA.work && DATA.work[0] && (
            <div className="flex items-center gap-3">
              <Icons.globe className="size-5 text-muted-foreground shrink-0" />
              <span className="text-[15px]">
                Làm việc tại{" "}
                <span className="font-semibold">{DATA.work[0].company}</span>
              </span>
            </div>
          )}
          {DATA.education && DATA.education[0] && (
            <div className="flex items-center gap-3">
              <Icons.universisy className="size-5 text-muted-foreground shrink-0" />
              <span className="text-[15px]">
                Từng học tại{" "}
                <span className="font-semibold">{DATA.education[0].school}</span>
              </span>
            </div>
          )}
          {DATA.infor.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-muted-foreground shrink-0 [&>svg]:size-5">
                {item.icon}
              </div>
              <span className="text-[15px]">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Direct Message / Contact button below info */}
        <Link
          href={`mailto:${DATA.contact.email}`}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-[15px] font-semibold transition-all rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Icons.email className="size-[18px]" /> Liên hệ qua Email
        </Link>
      </CardContent>
    </Card>
  );
}

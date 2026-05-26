import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Trần Viết Đức | Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const techs = ["Next.js", "NestJS", "Docker", "Redis", "TypeScript"];

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #07090D 0%, #0d1524 60%, #07090D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          gap: "64px",
          position: "relative",
        }}
      >
        {/* Subtle grid accent */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 15% 50%, rgba(56,189,248,0.07) 0%, transparent 40%), radial-gradient(circle at 85% 30%, rgba(251,191,36,0.07) 0%, transparent 35%)",
            display: "flex",
          }}
        />

        {/* Left: text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            position: "relative",
          }}
        >
          {/* Domain badge */}
          <div
            style={{
              display: "flex",
              fontSize: 13,
              color: "#475569",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            ductv.dev
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 900,
              color: "#f8fafc",
              lineHeight: 1,
              letterSpacing: "-0.035em",
              marginBottom: "16px",
            }}
          >
            Trần Viết Đức
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#94a3b8",
              fontWeight: 500,
              marginBottom: "36px",
            }}
          >
            Fullstack Developer
          </div>

          {/* Tech tags */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            {techs.map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 18px",
                  background: "#0f172a",
                  borderRadius: "999px",
                  color: "#7dd3fc",
                  fontSize: 15,
                  border: "1px solid #1e3a5f",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: 15,
              color: "#334155",
            }}
          >
            Da Nang, Vietnam
          </div>
        </div>

        {/* Right: avatar card */}
        <div
          style={{
            width: 260,
            height: 330,
            borderRadius: 28,
            overflow: "hidden",
            border: "2px solid #1e293b",
            flexShrink: 0,
            display: "flex",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ductv.dev/avatar-new.JPG"
            alt="Trần Viết Đức"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Uses the font bundled with next/og, so nothing is fetched at build time.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#ffffff",
          color: "#0a0a0a",
        }}
      >
        <div style={{ width: 96, height: 12, background: "#2563eb", marginBottom: 48 }} />
        <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 36, color: "#525252", marginTop: 24 }}>
          {profile.role}
        </div>
      </div>
    ),
    size,
  );
}

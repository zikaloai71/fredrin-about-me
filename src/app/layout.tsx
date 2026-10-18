import type { Metadata } from "next";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name,
  description: profile.hero,
};

// Runs before paint: stored choice wins, else the system theme. No flash.
const themeScript = `(function(){var d=matchMedia("(prefers-color-scheme: dark)").matches;try{var t=localStorage.theme;if(t)d=t==="dark"}catch(e){}document.documentElement.classList.toggle("dark",d)})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

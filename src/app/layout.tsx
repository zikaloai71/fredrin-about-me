import type { Metadata } from "next";
import PersonJsonLd from "@/components/PersonJsonLd";
import { profile } from "@/content/profile";
import { siteUrl } from "@/content/site";
import "./globals.css";

const title = `${profile.name}, ${profile.jobTitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.hero,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    title,
    description: profile.hero,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.hero,
  },
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
      <body>
        {children}
        <PersonJsonLd />
      </body>
    </html>
  );
}

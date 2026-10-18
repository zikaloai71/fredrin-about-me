import { cacheLife } from "next/cache";
import { profile } from "@/content/profile";

export default async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="mt-18 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <a
        href={profile.source.href}
        className="text-accent underline underline-offset-3"
      >
        {profile.source.label}
      </a>
    </footer>
  );
}

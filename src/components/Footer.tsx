import { cacheLife } from "next/cache";
import { profile } from "@/content/profile";
import ExternalLink from "./ExternalLink";

export default async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="mt-18 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <ExternalLink
        href={profile.source.href}
        className="text-accent underline underline-offset-3"
      >
        {profile.source.label}
      </ExternalLink>
    </footer>
  );
}

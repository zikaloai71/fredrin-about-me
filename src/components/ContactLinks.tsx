import { profile } from "@/content/profile";
import ExternalLink from "./ExternalLink";

export default function ContactLinks() {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-5">
      <a
        href={profile.email.href}
        className="rounded-lg bg-accent px-[18px] py-2.5 text-[15px] font-medium text-accent-fg hover:brightness-90 motion-safe:transition-[filter]"
      >
        {profile.email.label}
      </a>
      <ul className="flex flex-wrap gap-4 text-[15px]">
        {profile.links.map((link) => (
          <li key={link.href}>
            <ExternalLink
              href={link.href}
              className="text-accent underline underline-offset-3"
            >
              {link.label}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

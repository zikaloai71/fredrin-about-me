import { cacheLife } from "next/cache";
import { profile } from "@/content/profile";

export default async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="mt-18 text-sm text-muted">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}

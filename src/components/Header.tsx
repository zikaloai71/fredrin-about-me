import { profile } from "@/content/profile";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="mb-18 flex items-center justify-between">
      <span className="text-[15px] font-semibold">{profile.name}</span>
      <ThemeToggle />
    </header>
  );
}

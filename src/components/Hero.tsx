import { profile } from "@/content/profile";
import ContactLinks from "@/components/ContactLinks";

export default function Hero() {
  return (
    <section aria-labelledby="hero">
      <h1
        id="hero"
        className="text-[28px] leading-tight font-semibold tracking-[-0.02em]"
      >
        {profile.name}
      </h1>
      <p className="mt-2 text-[17px] text-muted">{profile.role}</p>
      <p className="mt-5 text-[17px]">{profile.hero}</p>
      <ContactLinks />
    </section>
  );
}

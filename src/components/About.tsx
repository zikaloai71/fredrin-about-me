import { profile } from "@/content/profile";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title={profile.headings.about}>
      <div className="space-y-3.5">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

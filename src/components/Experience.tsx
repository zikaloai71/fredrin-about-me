import { profile } from "@/content/profile";
import Entry from "@/components/Entry";
import Section from "@/components/Section";

export default function Experience() {
  return (
    <Section id="experience" title={profile.headings.experience}>
      <ul>
        {profile.experience.map((item) => (
          <Entry key={item.role} title={item.role} {...item} />
        ))}
      </ul>
    </Section>
  );
}

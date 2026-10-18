import { profile } from "@/content/profile";
import Entry from "@/components/Entry";
import Section from "@/components/Section";

export default function Shipped() {
  return (
    <Section id="shipped" title={profile.headings.shipped}>
      <ul>
        {profile.shipped.map((item) => (
          <Entry key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}

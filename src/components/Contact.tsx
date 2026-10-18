import { profile } from "@/content/profile";
import ContactLinks from "@/components/ContactLinks";
import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section id="contact" title={profile.headings.contact}>
      <p>{profile.contact}</p>
      <ContactLinks />
    </Section>
  );
}

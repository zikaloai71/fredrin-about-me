import { profile } from "@/content/profile";
import Section from "@/components/Section";

export default function BuildNotes() {
  // Hidden until profile.buildNotes has real content.
  if (profile.buildNotes.length === 0) return null;

  return (
    <Section id="build-notes" title={profile.headings.buildNotes}>
      <div className="space-y-3.5">
        {profile.buildNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </Section>
  );
}

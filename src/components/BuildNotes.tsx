import { profile } from "@/content/profile";
import Section from "@/components/Section";

export default function BuildNotes() {
  const { intro, points } = profile.buildNotes;
  // Hidden if the build notes are ever removed.
  if (points.length === 0) return null;

  return (
    <Section id="build-notes" title={profile.headings.buildNotes}>
      <p>{intro}</p>
      <ul className="mt-3.5 list-disc space-y-2 pl-5">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Section>
  );
}

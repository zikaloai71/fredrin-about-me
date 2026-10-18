import { profile } from "@/content/profile";
import { siteUrl } from "@/content/site";

export default function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.jobTitle,
    description: profile.hero,
    url: siteUrl,
    email: profile.email.href,
    sameAs: profile.links.map((link) => link.href),
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.locality,
      addressCountry: profile.location.country,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

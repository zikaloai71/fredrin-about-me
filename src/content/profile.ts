export const profile = {
  name: "Zakaria Loai",
  role: "Frontend engineer, React and TypeScript. Cairo, Egypt.",
  // SEO fields: page title, Open Graph and Person JSON-LD.
  jobTitle: "Frontend engineer",
  location: { locality: "Cairo", country: "Egypt" },
  hero: "I build data-rich web apps in React and TypeScript, and I write the specs that make them clear.",
  email: {
    label: "Email me",
    href: "mailto:zakarialoai71@gmail.com",
  },
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zakaria-loai/" },
    { label: "GitHub", href: "https://github.com/zikaloai71" },
    { label: "Medium", href: "https://medium.com/@zikaloai" },
  ],
  about: [
    "I have built production React and TypeScript apps for nearly 3 years, fully remote with a Dubai team. I also spent a year as a Business Analyst on the same products, writing the specs and acceptance criteria that developers built against. Today I build with AI coding agents every day, and I review every change before it ships.",
    "I am open to frontend and full-stack roles, remote or in Cairo. Email is the fastest way to reach me.",
  ],
  shipped: [
    {
      title: "Donation Hub Back Office",
      dates: "2024 – 2025",
      summary:
        "Built the Back Office and a design editor that publishes each charity's layout as JSON. One codebase grew from 1 to 9 UAE charities, and onboarding went from weeks to days.",
    },
    {
      title: "Agents feature, Donation Hub",
      dates: "2025 – 2026",
      summary:
        "Coordinated delivery and contributed code. It drove over 1M AED in donations for Sharjah Charity.",
    },
    {
      title: "Anna Coins",
      dates: "2024 – 2025",
      href: "https://annacoins.shj.ae/",
      summary:
        "Led the Back Office dashboard, built a reusable component library and automated visitor reports with Google Analytics.",
    },
    {
      title: "Feh-Zikrokm",
      dates: "2026",
      summary:
        "Arabic-first admin panel for a Quran mentorship platform, built with Claude Code.",
    },
    {
      title: "InnovaTek website",
      dates: "2023",
      summary:
        "Built from Figma with top PageSpeed scores for performance, SEO and accessibility. It led to a full-time offer.",
    },
  ],
  experience: [
    {
      role: "Frontend Developer, Freelance",
      dates: "Jul 2026 – Present",
      summary: "Building the Feh-Zikrokm admin panel in React and TypeScript.",
    },
    {
      role: "Business Analyst, InnovaTek SWD (remote, Dubai)",
      dates: "Sep 2025 – Aug 2026",
      summary:
        "Requirements, user stories and delivery for Donation Hub and a facility maintenance platform with 8 user roles.",
    },
    {
      role: "Frontend Web Developer, InnovaTek SWD (remote, Dubai)",
      dates: "Jan 2024 – Aug 2025",
      summary:
        "Built the Donation Hub and Anna Coins Back Offices in React and TypeScript.",
    },
    {
      role: "Freelance Web Developer, Upwork",
      dates: "Dec 2023 – Jan 2024",
      summary: "Built the InnovaTek marketing site from Figma designs.",
    },
  ],
  headings: {
    about: "About",
    shipped: "Shipped",
    experience: "Experience",
    buildNotes: "How this page was built",
    contact: "Contact",
  },
  contact: "The best way to reach me is email.",
  // TODO: Zakaria will write "How this page was built" from real build notes.
  buildNotes: [] as string[],
};

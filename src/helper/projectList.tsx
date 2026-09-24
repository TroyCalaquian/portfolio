import skills from "./skills";
import chunithmPreview from "../assets/chunithm-preview.png";
import portfolioPreview from "../assets/portfolio-preview.png";

const projects = [
  {
    title: "Portfolio Website (This Website)",
    image: portfolioPreview,
    description:
      "Built with React and TypeScript, paired with a custom Mantine theme designed to feel personal rather than templated. Animations are done with GSAP. The biggest challenge was designing a color palette and font pairing that felt eye-catching while still staying true to who I am, refined through several rounds of feedback and iteration. This is an ongoing project, and will receive updates as time goes on, such as a blog.",
    tech: [skills.React, skills.TypeScript, skills.GSAP, skills.Mantine],
    website: "https://troycalaquian.com",
    github: "https://github.com/TroyCalaquian/portfolio",
  },
  {
    title: "Chunithm Game Info",
    image: chunithmPreview,
    description:
      "A web application that shows users stats about songs in Chunithm, from album covers to level difficulty and version release, along with links to charts. The goal was to put all chart info into one English-language resource, since most existing sources are in Japanese. Built solo, from page design to database structure. The biggest challenge was structuring song data in Supabase, linking each entry to its album image and storing difficulty tiers as JSON. The database currently covers four versions and roughly 400 songs, with more being added over time.",
    tech: [skills.React, skills.TypeScript, skills.GSAP, skills.Supabase, skills.HeroUI],
    website: "https://warm-mooncake-33e06b.netlify.app/",
    github: "https://github.com/TroyCalaquian/rhythm-game-info",
  },
];

export default projects;

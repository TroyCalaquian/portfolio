import skills from "./skills";
import chunithmPreview from "../assets/chunithm-preview.png";
import portfolioPreview from "../assets/portfolio-preview.png";

const projects = [
  {
    title: "Portfolio Website (This Website)",
    image: portfolioPreview,
    description:
      "A personal portfolio website to showcase my projects and skills.",
    tech: [skills.React, skills.TypeScript, skills.GSAP, skills.Mantine],
    link: "https://github.com/TroyCalaquian/portfolio",
  },
  {
    title: "Chunithm Game Info",
    image: chunithmPreview,
    description:
      "A web application that allows users to search for and view information about songs from the rhythm game Chunithm.",
    tech: [skills.React, skills.TypeScript, skills.GSAP, skills.Supabase, skills.HeroUI],
    link: "https://github.com/TroyCalaquian/rhythm-game-info",
  },
];

export default projects;

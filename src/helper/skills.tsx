import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiHeroui, SiGsap, SiSupabase, SiMantine } from "react-icons/si";

const skills = {
  React:      { name: "React",       icon: <FaReact size={48}/> },
  NodeJS:     { name: "Node.js",     icon: <FaNode size={48}/> },
  JavaScript: { name: "JavaScript",  icon: <IoLogoJavascript size={48}/> },
  TypeScript: { name: "TypeScript",  icon: <BiLogoTypescript size={48}/> },
  HeroUI:     { name: "Hero UI",     icon: <SiHeroui size={48}/> },
  HTML:       { name: "HTML",        icon: <FaHtml5 size={48}/> },
  CSS:        { name: "CSS",         icon: <FaCss3Alt size={48}/> },
  GSAP:       { name: "GSAP",        icon: <SiGsap size={48}/> },
  Git:        { name: "Git",         icon: <FaGitAlt size={48}/> },
  Python:     { name: "Python",      icon: <FaPython size={48}/> },
  Supabase:   { name: "Supabase",    icon: <SiSupabase size={48}/> },
  Mantine:    { name: "Mantine",     icon: <SiMantine size={48}/> },
};

export default skills;
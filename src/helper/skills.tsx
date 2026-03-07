import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiHeroui, SiGsap } from "react-icons/si";

const skills = [
    {name: "React", icon: <FaReact size={48}/>},
    {name: "Node.js", icon: <FaNode size={48}/>},
    {name: "JavaScript", icon: <IoLogoJavascript size={48}/>},
    {name: "TypeScript", icon: <BiLogoTypescript size={48}/>},
    {name: "Hero UI", icon: <SiHeroui size={48}/>},
    {name: "HTML", icon: <FaHtml5 size={48}/>},
    {name: "CSS", icon: <FaCss3Alt size={48}/>},
    {name: "GSAP", icon: <SiGsap size={48}/>},
    {name: "Git", icon: <FaGitAlt size={48}/>},
    {name: "Python", icon: <FaPython size={48}/>},
];

export default skills;
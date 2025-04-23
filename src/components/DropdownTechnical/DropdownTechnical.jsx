import React from "react";
import cssSkill from '../../assets/skills/CSS.svg'
import HTML from '../../assets/skills/HTML.svg'
import JavaScript from '../../assets/skills/JavaScript.svg'
import Node from '../../assets/skills/NodeJS-Dark.svg'
import PostgreSQL from '../../assets/skills/PostgreSQL-Dark.svg'
import MySQL from '../../assets/skills/MySQL-Dark.svg'
import TypeScript from '../../assets/skills/TypeScript.svg'
import ReactSkill from '../../assets/skills/React-Dark.svg'
import ViteSkill from '../../assets/skills/Vite-Dark.svg'
import Tailwind from '../../assets/skills/TailwindCSS-Dark.svg'
import Sass from '../../assets/skills/Sass.svg'
import Express from '../../assets/skills/ExpressJS-Dark.svg'
import Dropdown from "../Dropdown/Dropdown";

const techSkills = [
    { name: "CSS", icon: cssSkill },
    { name: "HTML", icon: HTML},
    { name: "JavaScript", icon: JavaScript},
    { name: "Node.js", icon: Node},
    { name: "PostgreSQL", icon: PostgreSQL},
    { name: "MySQL", icon: MySQL},
    { name: "TypeScript", icon: TypeScript},
    { name: "React", icon: ReactSkill},
    { name: "Vite", icon: ViteSkill},
    { name: "TailwindCSS", icon: Tailwind},
    { name: "SASS", icon: Sass},
    { name: "Express", icon: Express},
];

const DropdownTechnical = () => {
    return (

        <Dropdown title="Technical" skills={techSkills}/>

      
    )
}

export default DropdownTechnical

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
    { name: "HTML", icon: HTML},
    { name: "CSS", icon: cssSkill },
    { name: "JAVASCRIPT", icon: JavaScript},
    { name: "NODE.JS", icon: Node},
    { name: "MYSQL", icon: MySQL},
    { name: "TYPESCRIPT", icon: TypeScript},
    { name: "REACT", icon: ReactSkill},
    { name: "EXPRESS", icon: Express},
    { name: "TAILWIND", icon: Tailwind},
    { name: "SASS", icon: Sass},
    { name: "VITE", icon: ViteSkill},
    { name: "POSTGRESQL", icon: PostgreSQL},
];

const DropdownTechnical = () => {
    return (
        <Dropdown title="Technical" skills={techSkills}/>
    )
}

export default DropdownTechnical

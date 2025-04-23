import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import github from '../../assets/skills/Github-Dark.svg'
import postman from '../../assets/skills/Postman.svg'
import figma from '../../assets/skills/Figma-Dark.svg'
import heroku from '../../assets/skills/Heroku.svg'
import netlify from '../../assets/skills/Netlify-Dark.svg'
import vscode from '../../assets/skills/VSCode-Dark.svg'
import vercel from '../../assets/skills/Vercel-Dark.svg'

const toolSkills = [
    { name: "GITHUB", icon: github },
    { name: "POSTMAN", icon: postman},
    { name: "FIGMA", icon: figma},
    { name: "HEROKU", icon: heroku},
    { name: "NETLIFY", icon: netlify},
    { name: "VSCODE", icon: vscode},
    { name: "VERCEL", icon: vercel},
]

const DropdownTool = () => {
    return (
        <Dropdown 
            title="Tool" 
            skills={toolSkills}
            otherTitle="Others"
            otherText="Jira, RESTful API Development and Intergration, Axios, Agile (scrum)."
        />

    )
}

export default DropdownTool
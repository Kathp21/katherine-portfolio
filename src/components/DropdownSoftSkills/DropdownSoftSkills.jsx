import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const softSkills = [
    {name: "Communication", icon: "💬"},
    {name: "Attention to Details", icon:"🧐"},
    {name: "User-centred Thinking", icon: "👥💭"},
    {name: "Leadership", icon:"⭐"},
    {name: "Organization", icon:"🗓️"},
    {name: "Problem Solving", icon: "🛠️"},
    {name: "Project Management", icon:"📋"},
    {name: "Collaboration", icon:"🤝"},
    {name: "Critical Thinking", icon:"💡"},
    {name: "Multi-tasking", icon: "🤹"},
    {name: "Documentation", icon:"📝"},
    
    
    
   
    
]
const DropdownSoftSkills = () => {
    return(
        <Dropdown
            title="Soft"
            skills={softSkills}
        />
    )
}

export default DropdownSoftSkills
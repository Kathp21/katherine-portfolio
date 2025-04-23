import React, {useState} from "react";
import './Dropdown.scss'
import { RiArrowDropDownLine } from "react-icons/ri";

 const Dropdown = ({title, skills}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="dropdown">
            <div className="dropdown__menu-container">
                <div className="dropdown__menu-title">
                    <h3>{title}</h3>
                    <RiArrowDropDownLine 
                        size={24} 
                        onClick={() => setIsOpen(!isOpen)}
                        style={{cursor: "pointer"}}
                    />
                </div>
                {isOpen && (
                    <ul className="dropdown__menu dropdown__menu--tech-skills">
                        {skills.map((skill) => (
                            <li key={skill.name} className="dropdown__item">
                            <img src={skill.icon} alt={skill.name} className="dropdown__icon"/>
                                <span className="dropdown__skill-name">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Dropdown
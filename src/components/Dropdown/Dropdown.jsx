import React, {useState} from "react";
import './Dropdown.scss'
import { RiArrowDropDownLine } from "react-icons/ri";

 const Dropdown = ({title, skills, otherTitle, otherText}) => {
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
                        className={`dropdown__arrow ${isOpen ? "open" : ""}`}
                    />
                </div>
                {isOpen && (
                    <ul className="dropdown__menu">
                        {skills.map((skill) => (
                            <li key={skill.name} className="dropdown__item">
                                {typeof skill.icon === "string" && skill.icon.includes('/') ?(
                                    <img src={skill.icon} alt={skill.name} className="dropdown__icon"/> 
                                ): (
                                    <span className="dropdown__icon-emoji">{skill.icon}</span>
                                )}
                                <span className="dropdown__skill-name dropdown__skill-name--style">{skill.name}</span>
                            </li>
                        ))}
                        {otherTitle &&(
                            <li className="dropdown__other-section">
                                <h4 className="dropdown__other-title">{otherTitle}</h4>
                                <p className="dropdown__other-text">{otherText}</p>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Dropdown
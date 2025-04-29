import React from "react";
import './ProjectCard.scss'

const ProjectCard = ({projects}) => {

    return(
        <section className="project-card">
            {projects.map((project, index) => (
                <div key={index} className="project-card__container">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="project-card__image"
                    />
                        
                    <div className="project-card__hover-box"> 
                        <h2 className="project-card__summary-title">{project.name}</h2>
                        <div className="project-card__details">
                            <p className="project-card__summary-text">{project.summary}</p>
                            <div>
                                <button>GitHub</button>
                                <button>Live Demo</button>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </section>
    )
}

export default ProjectCard
import React from "react";
import './ProjectCard.scss'

const ProjectCard = ({projects}) => {

    return(
        <section className="project-card">
            {projects.map((project, index) => (
                <div key={index} className="project-card__container">
                    <div
                        className="project-card__image"
                        style={{backgroundImage: `url(${project.image})`}}
                    ></div>
                        
                    <div className="project-card__hover-box">  
                        <div className="project-card__details">
                            <h2 className="project-card__summary-title">{project.name}</h2>
                            <p className="project-card__summary-text">{project.summary}</p>
                            {project.note && (
                                <h4 className="project-card__note">{project.note}</h4>
                            )}
                            <div className="project-card__tools-scroll-wrapper">
                                <h3 className="project-card__subheader">Built With:</h3>
                                <div className="project-card__tools-list">
                                    <div className="project-card__tools-strip">
                                    {[...project.badge, ...project.badge].map((src, i) => (
                                        <img key={i} src={src} alt={`badge-${i}`} className="project-card__badge" />
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card__button-container">
                            {project.github && ( <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__button"
                            >
                                GitHub
                            </a>
                            )}
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__button"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>

                </div>
            ))}
        </section>
    )
}

export default ProjectCard
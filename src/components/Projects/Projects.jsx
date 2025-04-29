
import './Projects.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import brainFlix from '../../assets/images/brainFlix-1.png'
import instock from '../../assets/images/instock-2.png'
import tripCrafters from '../../assets/images/tripCrafters-1.png'
import empowerMe from '../../assets/images/empowerMe-2.png'
import portfolio from '../../assets/images/portfolio-1.png'

const projectsInfo = [
    { name: "Trip Crafters", image: tripCrafters, summary: "Plan personalized trips with smart recommendations."},
    { name: "EmpowerMe", image: empowerMe },
    { name: "Portfolio", image: portfolio, summary: "My personal portfolio, showcasing my background, skills, and the projects I've developed." },
    { name: "Instock", image: instock, summary: "InStock is a fully responsive full-stack web app providing an inventory management system for a Fortune 500 client. It displays a list of warehouse inventory." },
    { name: "Brain Flix", image: brainFlix, summary: "Brain Flix is a fully responsive video streaming platform." },
]

const Projects = () => {

    return (
        <section className="projects">
            <p className="projects__text-p1">Browse My Recent</p>
            <h1 className="projects__title">Projects</h1>

            <ProjectCard projects={projectsInfo}/>
        </section>
    )
}

export default Projects
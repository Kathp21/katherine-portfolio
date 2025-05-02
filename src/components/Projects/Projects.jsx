
import './Projects.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import brainFlix from '../../assets/images/brainFlix-1.png'
import instock from '../../assets/images/instock-2.png'
import tripCrafters from '../../assets/images/tripCrafters-1.png'
import empowerMe from '../../assets/images/empowerMe-2.png'
import portfolio from '../../assets/images/portfolio-1.png'
import sassBadge from '../../assets/badges/sass-badge.svg'
// import html5Badge from '../../assets/badges/html-badge.svg'
import canvasBadge from '../../assets/badges/canvas-badges.svg'
import viteBadge from '../../assets/badges/vite-badge.svg'
import tailwindBadge from '../../assets/badges/tailwind-badge.svg'
import reactBadge from '../../assets/badges/react-banner.svg'
import nodeBadge from '../../assets/badges/node-badge.svg'
import netlifyBadge from '../../assets/badges/netlify-badge.svg'
import vercelBadge from '../../assets/badges/vercel-badge.svg'
import mysqlBadge from '../../assets/badges/mysql-banner.svg'
import jiraBadge from '../../assets/badges/jira-badge.svg'
import javascriptBadge from '../../assets/badges/javascript-badge.svg'
import githubBadge from '../../assets/badges/github-badge.svg'
import expressBadge from '../../assets/badges/express-badge.svg'
import herokuBadge from '../../assets/badges/heroku-badge.svg'
import postmanBadge from '../../assets/badges/postman-badge.svg'
import jsonBadge from '../../assets/badges/json-badge.png'
import jsonTokenBadge from '../../assets/badges/JWT-black-badge.svg'
import axiosBadge from '../../assets/badges/axios-badge.png'
import chatGPTBadge from '../../assets/badges/chatGPT-badge.svg'
import typescriptBadge from '../../assets/badges/typescript-badge.svg'
import figmaBadge from '../../assets/badges/figma-badge.svg'
import nostalgiabx from '../../assets/images/nostalgia.png'

const projectsInfo = [
    { 
        name: "Nostalgiabx", 
        image: nostalgiabx, 
        summary: "Responsive web application for photobooth rental and DJ services. Where customers can requests a quote and view their event gallery.", 
        badge: [reactBadge, viteBadge, mysqlBadge, typescriptBadge, tailwindBadge, jsonBadge, axiosBadge, canvasBadge, netlifyBadge, expressBadge, nodeBadge, vercelBadge, figmaBadge, githubBadge]
    },
    { 
        name: "Trip Crafters", 
        image: tripCrafters, 
        summary: "Plan personalized trips with smart recommendations.", 
        badge: [reactBadge, chatGPTBadge, javascriptBadge, sassBadge, jsonTokenBadge, axiosBadge, postmanBadge, netlifyBadge, expressBadge, nodeBadge,githubBadge, vercelBadge, herokuBadge]
    },
    { 
        name: "EmpowerMe", 
        image: empowerMe,
        summary: "Responsive web app helps individuals with imposter syndrome transition to the tech industry by identifying their transferable skills and teaching them to communicate their value with confidence.",
        badge: [sassBadge, reactBadge, viteBadge, typescriptBadge, jiraBadge, figmaBadge, tailwindBadge,githubBadge]
    },
    { 
        name: "Portfolio", 
        image: portfolio, 
        summary: "My personal portfolio, showcasing my background, skills, and the projects I've developed.",  
        badge: [sassBadge, reactBadge, javascriptBadge, netlifyBadge, githubBadge] 
    },
    { 
        name: "Instock", 
        image: instock, 
        summary: "InStock is a fully responsive full-stack web app providing an inventory management system for a Fortune 500 client. It displays a list of warehouse inventory.",
        badge: [sassBadge, reactBadge, javascriptBadge, expressBadge, githubBadge, nodeBadge, axiosBadge, jsonBadge, postmanBadge, mysqlBadge]
    },
    { 
        name: "Brain Flix", 
        image: brainFlix, 
        summary: "Brain Flix is a fully responsive video streaming platform.",
        badge: [sassBadge, reactBadge, javascriptBadge, expressBadge, githubBadge, nodeBadge, axiosBadge, jsonBadge, postmanBadge, mysqlBadge]
    },
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
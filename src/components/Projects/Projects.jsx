import brainFix from '../../assets/images/brainFlix-1.png'
import instock from '../../assets/images/instock-2.png'
import tripCrafters from '../../assets/images/tripCrafters-1.png'
import empowerMe from '../../assets/images/empowerMe-2.png'
import portfolio from '../../assets/images/portfolio-1.png'
import Arrow from '../Arrow/Arrow'
import './Projects.scss'

const Projects = () => {

    const handleArrowClick = () => {
        window.location.href = '#contact'
    }

    return (
        <section className="projects">
            <p className="projects__text-p1">Browse My Recent</p>
            <h1 className="projects__title">Projects</h1>
            <div className="projects__details-container">
                <div className="projects__details">
                    <div className="projects__article-container">
                        <img
                            src={tripCrafters}
                            alt="Trip Crafters"
                            className="projects__img"
                        />
                    </div>
                    <h2 className='projects__sub-title'>Trip Crafters</h2>
                    <div className='projects__btn-container'>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://github.com/Kathp21/Katherine-Phan-capstone')}
                        >GitHub</button>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://tripcrafters.netlify.app')}
                        >Live Demo</button>
                    </div>
                </div>
                <div className="projects__details">
                    <div className="projects__article-container">
                        <img
                            src={empowerMe}
                            alt="EmpowerMe"
                            className="projects__img"
                        />
                    </div>
                    <h2 className='projects__sub-title'>EmpowerMe</h2>
                    <div className='projects__btn-container'>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://github.com/cherryontech/soft-skill-generator')}
                        >GitHub</button>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://empowerme.netlify.app/')}
                        >Live Demo</button>
                    </div>
                </div>
                <div className="projects__details">
                    <div className="projects__article-container">
                        <img
                            src={portfolio}
                            alt="EmpowerMe"
                            className="projects__img"
                        />
                    </div>
                    <h2 className='projects__sub-title'>Portfolio</h2>
                    <div className='projects__btn-container'>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://github.com/Kathp21/katherine-portfolio')}
                        >GitHub</button>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://katherinephan-portfolio.netlify.app/')}
                        >Live Demo</button>
                    </div>
                </div>
                <div className="projects__details">
                    <div className="projects__article-container">
                        <img
                            src={instock}
                            alt="Instock"
                            className="projects__img"
                        />
                    </div>
                    <h2 className='projects__sub-title'>InStock</h2>
                    <div className='projects__btn-container'>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://github.com/Kathp21/InStock-client-side')}
                        >GitHub</button>
                        <button className='projects__btn' disabled>Live Demo</button>
                    </div>
                </div>
                <div className="projects__details">
                    <div className="projects__article-container">
                        <img
                            src={brainFix}
                            alt="Brain Flix"
                            className="projects__img"
                        />
                    </div>
                    <h2 className='projects__sub-title'>BrainFlix</h2>
                    <div className='projects__btn-container'>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://github.com/Kathp21/katherine-phan-brainflix')}
                        >GitHub</button>
                        <button className='projects__btn' disabled>Live Demo</button>
                    </div>
                </div>
            </div>
            <div className='projects__arrow-container'>
                <Arrow onClick={handleArrowClick}/>
            </div>

        </section>
    )
}

export default Projects
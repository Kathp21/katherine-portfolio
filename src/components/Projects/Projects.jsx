import brainFix from '../../assets/images/brainFlix-2.png'
import instock from '../../assets/images/instock-1.png'
import tripCrafters from '../../assets/images/tripCrafters-1.png'
import empowerMe from '../../assets/images/empowerMe-2.png'
import arrow from '../../assets/icons/arrow.png'
import './Projects.scss'

const Projects = () => {

    const handleArrowClick = () => {
        window.location.href = '#projects'
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
                    <h2 className='projects__sub-title'>Project One</h2>
                    <div className='projects__btn-container'>
                        <button 
                            className='projects__btn projects__btn--color-1'
                            onClick={() => window.open('https://github.com/Kathp21/Katherine-Phan-capstone')}
                        >GitHub</button>
                        <button 
                            className='projects__btn projects__btn--color-1'
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
                    <h2 className='projects__sub-title'>Project One</h2>
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
                            src={instock}
                            alt="Instock"
                            className="projects__img"
                        />
                    </div>
                    <h2 className='projects__sub-title'>Project One</h2>
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
                    <h2 className='projects__sub-title'>Project One</h2>
                    <div className='projects__btn-container'>
                        <button 
                            className='projects__btn'
                            onClick={() => window.open('https://github.com/Kathp21/katherine-phan-brainflix')}
                        >GitHub</button>
                        <button className='projects__btn' disabled>Live Demo</button>
                    </div>
                </div>
            </div>
            <img
                src={arrow}
                alt='Arrow icon'
                className='arrow'
                onClick={handleArrowClick}
            />
        </section>
    )
}

export default Projects
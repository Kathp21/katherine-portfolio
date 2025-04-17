import './Experience.scss'
import BrainStationLogo from '../../assets/images/brainstation.png'
import SprottShawLogo from '../../assets/images/SprottShaw.gif'
const Experience = () => {

    return (
        <section className="experience">
            <p className="experience__text-p1">Explore My</p>
            <h1 className="experience__title">Experience</h1>
            <section className='experience__education'>
                <h2>Education</h2>
                <div className='experience__container'>
                    <img src={BrainStationLogo} alt="BrainStation Logo" className="experience__logo"/>
                    <ul className='experience__list'>
                        <li className='experience__item'>BrainStation</li>
                        <li className='experience__item'>Dec 2023 - Mar 2024</li>
                        <li className='experience__item'>Diploma, Software Engineering</li>
                    </ul>
                </div>
                <div className='experience__container'>
                    <img src={SprottShawLogo} alt="Sprott Shaw College Logo" className="experience__logo experience__logo--padding"/>
                    <ul className='experience__list'>
                        <li className='experience__item'>Sprott Shaw College</li>
                        <li className='experience__item'>Sep 2014 - Jun 2016</li>
                        <li className='experience__item'>Diploma, License Practical Nursing</li>
                    </ul>
                </div>
            </section>





            {/* <div className='experience__exp-containers'>
            <div className="experience__details-containers">
                <div className="experience__details">
                    <h2 className="experience__sub-title">Frontend Development</h2>
                    <div className="experience__article-container">
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>HTML</h3>  
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>CSS/SASS</h3>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>JavaScript</h3>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>React</h3>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>TypeScript</h3>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>TailwindCSS</h3>
                        </article>    
                    </div>
                </div>
                <div className="experience__details">
                    <h2 className="experience__sub-title">Backend Development</h2>
                    <div className="experience__article-container">
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>MySQL</h3>   
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>Node JS</h3>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>Express JS</h3>                           
                        </article>
                        <article className='experience__article'>                           
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>Knex JS</h3>                            
                        </article>
                        <article className='experience__article'>                            
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>Migration</h3>                           
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <h3 className='experience__text'>Git</h3>                           
                        </article>
                    </div>
                </div>
            </div>
            </div>
            <div className='experience__arrow-container'>
                <Arrow onClick={handleArrowClick}/>
            </div> */}
        </section>
    )
}

export default Experience
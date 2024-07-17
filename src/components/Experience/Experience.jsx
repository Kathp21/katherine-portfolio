import './Experience.scss'
import checkMark from '../../assets/icons/checkmark.png'
import arrow from '../../assets/icons/arrow.png'

const Experience = () => {

    const handleArrowClick = () => {
        window.location.href = '#experience'
    }

    return (
        <section className="experience">
            <p className="experience__text-p1">Explore My</p>
            <h1 className="experience__title">Experience</h1>
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
                            <div>
                                <h3>HTML</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>CSS/SASS</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>JavaScript</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>React</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>TypeScript</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>TailwindCSS</h3>
                            </div>
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
                            <div>
                                <h3>MySQL</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>Node JS</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>Express JS</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>Knex JS</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>Migration</h3>
                            </div>
                        </article>
                        <article className='experience__article'>
                            <img
                                src={checkMark}
                                alt="Experience icon"
                                className="experience__icon"
                            />
                            <div>
                                <h3>Git</h3>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <img
                src={arrow}
                alt='Arrow icon'
                className='experience__arrow'
                onClick={handleArrowClick}
            />
        </section>
    )
}

export default Experience
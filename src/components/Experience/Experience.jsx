import './Experience.scss'
import checkMark from '../../assets/icons/checkmark.png'
import Arrow from '../Arrow/Arrow'

const Experience = () => {

    const handleArrowClick = () => {
        window.location.href = '#projects'
    }

    return (
        <section className="experience">
            <p className="experience__text-p1">Explore My</p>
            <h1 className="experience__title">Experience</h1>
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
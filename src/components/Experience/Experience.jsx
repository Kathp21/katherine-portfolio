import './Experience.scss'
import BrainStationLogo from '../../assets/images/brainstation.png'
import SprottShawLogo from '../../assets/images/SprottShaw.gif'
import CherryOnTechLogo from '../../assets/images/CherryOnTech.png'
import EndeavorTrustLogo from '../../assets/images/EndeavorTrust.png'
import TheCareGroupLogo from '../../assets/images/TCC.png'
import css from '../../assets/skills/CSS.svg'
import Dropdown from '../Dropdown/Dropdown'
import DropdownTechnical from '../DropdownTechnical/DropdownTechnical'
import DropdownTool from '../DropdownTool/DropdownTool'
import DropdownSoftSkills from '../DropdownSoftSkills/DropdownSoftSkills'

const Experience = () => {

    return (
        <section className="experience">
            <p className="experience__text-p1">Explore My</p>
            <h1 className="experience__title">Experience</h1>
            <section className='experience__subheader'>
                <h2>EDUCATION</h2>
                <div className='experience__container'>
                    <img src={BrainStationLogo} alt="BrainStation Logo" className="experience__logo"/>
                    <ul className='experience__list'>
                        <li className='experience__item'>BrainStation</li>
                        <li className='experience__item'>Dec 2023 - Mar 2024</li>
                        <li className='experience__item'>Diploma, Software Engineering</li>
                    </ul>
                </div>
                <div className='experience__container'>
                    <img src={SprottShawLogo} alt="Sprott Shaw College Logo" className="experience__logo"/>
                    <ul className='experience__list'>
                        <li className='experience__item'>Sprott Shaw College</li>
                        <li className='experience__item'>Sep 2014 - Jun 2016</li>
                        <li className='experience__item'>Diploma, License Practical Nursing</li>
                    </ul>
                </div>
            </section>
            <section className='experience__subheader'>
                <h2>PROFESSIONAL</h2>
                <div className='experience__container'>
                    <img src={CherryOnTechLogo} alt="BrainStation Logo" className="experience__logo"/>
                    <ul className='experience__list'>
                        <li className='experience__item'>CherryOnTech</li>
                        <li className='experience__item'>Jul 2024 - Oct 2024</li>
                        <li className='experience__item'>Web Developer</li>
                    </ul>
                </div>
                <div className='experience__container'>
                    <img src={EndeavorTrustLogo} alt="Sprott Shaw College Logo" className="experience__logo experience__logo--smaller"/>
                    <ul className='experience__list'>
                        <li className='experience__item'>Endeavor Trust</li>
                        <li className='experience__item'>Mar 2022 - Dec 2023</li>
                        <li className='experience__item'>Transfer Agent</li>
                    </ul>
                </div>
                <div className='experience__container'>
                    <img src={TheCareGroupLogo} alt="Sprott Shaw College Logo" className="experience__logo experience__logo--padding"/>
                    <ul className='experience__list'>
                        <li className='experience__item'>Point Grey Private Hospital</li>
                        <li className='experience__item'>Dec 2021 - Feb 2022</li>
                        <li className='experience__item'>License Practical Nursing</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2>SKILLS</h2>
                <DropdownTechnical/>
                <DropdownTool/>
                <DropdownSoftSkills/>
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
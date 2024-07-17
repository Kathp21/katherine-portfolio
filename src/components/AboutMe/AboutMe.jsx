import './AboutMe.scss'
import experience from '../../assets/icons/experience.png'
import education from '../../assets/icons/education.png'
import arrow from '../../assets/icons/arrow.png'
const AboutMe = () => {

    const handleArrowClick = () => {
        window.location.href = '#experience'
    }

    return (
        <section className='about'>
            <div className='about__headline'>
                <p>Get To Know More</p>
                <h1>About Me</h1>
            </div>
            <div className='about__details-container'>
                <div className='about__details'>
                    <img 
                        src={experience} 
                        alt='experience icon'
                        className='about__icon'
                    />
                    <h3 className='about__title'>Experience</h3>
                    <p className='about__info'>1+ year <br/>Transfer Agent</p>
                </div>
                <div className='about__details'>
                    <img 
                        src={education} 
                        alt='education icon'
                        className='about__icon'
                    />
                    <h3 className='about__title'>Education</h3>
                    <p className='about__info'>Software Engineering Diploma</p>
                </div>

            </div>
            <div className='about__profile'>
                    <p>somethig about yourself</p>
            </div>
            <img
                src={arrow}
                alt='Arrow icon'
                className='about__arrow'
                onClick={handleArrowClick}
            />
        </section>
    )
}

export default AboutMe
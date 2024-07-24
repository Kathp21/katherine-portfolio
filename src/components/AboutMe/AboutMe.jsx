import './AboutMe.scss'
import experience from '../../assets/icons/experience.png'
import education from '../../assets/icons/education.png'
import Arrow from '../Arrow/Arrow'
import avatar from '../../assets/images/profile-picture.png'

const AboutMe = () => {

    const handleArrowClick = () => {
        window.location.href = '#experience'
    }

    return (
        <section className='about'>
            <div className='about__headline'>
                <p className='about__text-p1'>Get To Know More</p>
                <h1 className='about__title'>About Me</h1>

            </div>
            <div className='about__me-section'>
                <div className='about__photo-container'>
                    <img src={avatar} alt='About me session'
                        className='about__photo'                       
                    />
                </div>

                <div className='about__text-container'>
                    <div className='about__containers'>
                        <div className='about__details'>
                            <img 
                                src={experience} 
                                alt='experience icon'
                                className='about__icon'
                            />
                            <h3 className='about__title'>Experience</h3>
                            <p className='about__info'>3+ year <br/>Office Adminitration</p>
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
                        <p> My name is Katherine. I have experince in office administration and nursing, but my passion for programming and problem
                            solving led me to pursue a career in software development. After a career in healthcare and administration,
                            I decided to take the leap and immerse myself in learning web development. I started off my journey at BrainStation where I built serveral 
                            projects using JavaScript and modern frameworks such as React and Node JS. I'm also familiar with TypeScript and TailwindCSS.
                            I am always on a journey to learn new technologies and improve myself.
                        </p>
                    </div>
                </div>
            </div>
            <div className='about__arrow-container'>
                <Arrow onClick={handleArrowClick}/>
            </div>
        </section>
    )
}

export default AboutMe
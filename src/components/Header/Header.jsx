import profilePic from '../../assets/images/profile-picture.JPG'
import resume from '../../assets/resume/Resume.pdf'
import Navbar from '../Navbar/Navbar'
import './Header.scss'
import linkedin from '../../assets/images/linkedin-logo.jpg'
import github from '../../assets/images/github-logo.jpg'

const Header = () => {

    const handleDownloadResume = () => {
        window.open(resume)
    }

    return (
        <>
            <Navbar/>
            <header className="header">
                <section className="header__profile">
                    <img src={profilePic} className='header__picture' alt='Profile-picture'/>
                </section>
                <section className='header__text'>
                    <p className='header__text-p1'>Hello, I'm</p>
                    <h1 className='header__title'>Katherine Phan</h1>
                    <p className='header__text-p2'>Fullstack Developer</p>
                    <div className='header__btn-container'>
                        <button className='header__btn header__btn--color-1' onClick={handleDownloadResume}>Download CV</button>
                        <button className='header__btn header__btn--color-2'>Contact Info</button>
                    </div>
                    <div className='header__social-icons'>
                        <img 
                            src={linkedin} 
                            alt='Linkedin logo' 
                            className='header__linkedin-logo'
                            onClick={() => window.open('https://www.linkedin.com/in/katherine-phan21', '_blank')}
                        />
                        <img 
                            src={github} 
                            alt='Github logo' 
                            className='header__github-logo'
                            onClick={() => window.open('https://github.com/Kathp21', '_blank')}
                        />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
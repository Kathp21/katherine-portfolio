import profilePic from '../../assets/images/about-me.png'
// import resume from '../../assets/resume/Resume-1 .pdf'
import Navbar from '../Navbar/Navbar'
import './Header.scss'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'

const Header = () => {

    // const handleDownloadResume = () => {
    //     window.open(resume)
    // }

    return (
        <>
            <Navbar/>
            <header className="header">
                <div className='header__container'>
                <section className="header__profile">
                    <img src={profilePic} className='header__picture' alt='Profile-picture'/>
                </section>
                <section className='header__text-container'>
                    <h1 className='header__text'>Hi, there!</h1>
                    <div className='header__intro-container'>
                        <p className='header__intro'>My name is Katherine Phan, and it's so nice to meet you 👋🏻. Let's get in touch!</p>
                    </div>
                    
                    {/* <p className='header__text-p2'>Fullstack Developer</p> */}
                    {/* <div className='header__btn-container'>
                        <button className='header__btn header__btn--color-1' onClick={handleDownloadResume}>Download CV</button>
                        <button className='header__btn header__btn--color-2'>Contact Info</button>
                    </div> */}
                    <div className='header__social-icons'>
                        <img 
                            src={linkedin} 
                            alt='Linkedin logo' 
                            className='header__logo'
                            onClick={() => window.open('https://www.linkedin.com/in/katherine-phan21', '_blank')}
                        />
                        <img 
                            src={github} 
                            alt='Github logo' 
                            className='header__logo'
                            onClick={() => window.open('https://github.com/Kathp21', '_blank')}
                        />
                    </div>
                </section>
                </div>
            </header>
        </>
    )
}

export default Header
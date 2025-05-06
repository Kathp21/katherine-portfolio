import './Contact.scss'
// import mail from '../../assets/icons/email.png'
// import linkedin from '../../assets/icons/linkedin.png'
import { FaUser } from "react-icons/fa";


const Contact = () => {

    return (
        <section className='contact'>
            <p className='contact__text-p1'>Get in Touch</p>
            <h1 className='contact__title'>Contact Me</h1>
            {/* <div className='contact__outer-container'>
                <div className='contact__info-box'>
                    <div className='contact__info-container'>
                        <img
                            src={mail}
                            alt='Email icon'
                            className='contact__icon contact__icon--email'
                        />
                        <p className='contact__text'><a href='mailto:katherinephan21@gmail.com' target='_blank' rel='noopener noreferrer'>Katherinephan21@gmail.com</a></p>
                    </div>
                    <div className='contact__info-container'>
                        <img
                            src={linkedin}
                            alt='Linkedin icon'
                            className='contact__icon'
                        />
                        <p className='contact__text'><a href='https://www.linkedin.com/in/katherine-phan21' target='_blank' rel='noopener noreferrer'>Linkedin</a></p>
                    </div>
                </div>
            </div> */}
            <section className='contact__container'>
                <div className='contact__screen'>
                    <div className='contact__screen-header'>
                        <div className='contact__screen-header contact__screen-header--left'>
                            <div className='contact__header-button contact__header-button--close'></div>
                            <div className='contact__header-button contact__header-button--maximize'></div>
                            <div className='contact__header-button contact__header-button--minimize'></div>
                        </div>
                        <div className='contact__screen-header contact__screen-header--right'>
                            <div className='contact__header-button contact__header-button--ellipsis'></div>
                            <div className='contact__header-button contact__header-button--ellipsis'></div>
                            <div className='contact__header-button contact__header-button--ellipsis'></div>
                        </div>
                    </div>
                    <div className='contact__screen-content'>
                        <div className='contact__screen-item'>
                            <div className='contact__screen-title'>
                                <h2 className='contact__header'>Let's connect!</h2>
                            </div>
                            <p className='contact__screen-text'>If you'd like to connect or have any questions, ideas, or feedback, please fill out the form. I'll get back to you soon!</p>
                        </div>
                        <form className='contact__screen-form'>
                            <div className='contact__input-section'>
                                <div className='contact__form-label'>
                                    <label>NAME</label>
                                    <FaUser />
                                </div>

                                <input
                                    type='text'
                                    className='contact__input-name'
                                />
                                
                            </div>


                        </form>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Contact
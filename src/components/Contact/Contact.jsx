import './Contact.scss'
import mail from '../../assets/icons/email.png'
import linkedin from '../../assets/icons/linkedin.png'

const Contact = () => {

    return (
        <section className='contact'>
            <p className='contact__text-p1'>Get in Touch</p>
            <h1 className='contact__title'>Contact Me</h1>
            <div className='contact__outer-container'>
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
            </div>
        </section>
    )
}

export default Contact
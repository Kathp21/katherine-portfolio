import './Contact.scss'
// import mail from '../../assets/icons/email.png'
// import linkedin from '../../assets/icons/linkedin.png'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useForm, ValidationError} from '@formspree/react';
import { useState, useEffect } from 'react';



const Contact = () => {
    const [state, handleSubmit] = useForm("myzwjjwl")
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        if(state.succeeded){
            setShowSuccess(true)

            const timer = setTimeout(() => {
                setShowSuccess(false)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [state.succeeded])

    return (
        <section className='contact'>
            <p className='contact__text-p1'>Get in Touch</p>
            <h1 className='contact__title'>Contact Me</h1>
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
                        {showSuccess ? (
                            <p className='contact__success-message'>Thansk for connecting!</p>
                        ) : (
                            <div className='contact__text-form-container'>
                                <div className='contact__screen-item'>
                                    <div className='contact__screen-title'>
                                        <h2 className='contact__header'>Let's talk!</h2>
                                    </div>
                                    <p className='contact__screen-text'>If you'd like to connect or have any questions, ideas, or feedback, please fill out the form. I'll get back to you soon!</p>
                                </div>
                                <form 
                                    className='contact__screen-form'
                                    onSubmit={handleSubmit}
                                >
                                    <div className='contact__input-section'>
                                        <div className='contact__form-label'>
                                            <label className='contact__label'>NAME</label>
                                            <FaUser className='contact__icon' />
                                        </div>

                                        <input
                                            type='text'
                                            name='name'
                                            className='contact__input-info'
                                            required
                                        />
                                    </div>
                                    <div className='contact__input-section'>
                                        <div className='contact__form-label'>
                                            <label className='contact__label'>EMAIL</label>
                                            <MdEmail className='contact__icon' />
                                        </div>

                                        <input
                                            type='email'
                                            name='email'
                                            className='contact__input-info'
                                            required
                                        />
                                        <ValidationError
                                            prefix='Email'
                                            field='email'
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className='contact__input-section'>
                                        <div className='contact__form-label contact__form-label--message'>
                                            <label className='contact__label'>MESSAGE</label>
                                        </div>

                                        <textarea
                                            type='text'
                                            name='message'
                                            className='contact__input-message'
                                            rows={5}
                                        />
                                    </div>

                                    <div className='contact__btn-container'>
                                        <button className='contact__send-btn' type='submit' disabled={state.submitting}>Send</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Contact
import './Footer.scss'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <nav className='footer'>
            <div className='footer__nav-link-container'>
                <div className="footer__link footer__link--top">
                    <HashLink smooth to="/#about">About</HashLink>
                </div>
                <div className="footer__link">
                    <HashLink smooth to="/#experience">Experience</HashLink>
                </div>
                <div className="footer__link">
                    <HashLink smooth to="/#projects">Projects</HashLink>
                </div>
                <div className="footer__link">
                    <HashLink smooth to="/#contact">Contact</HashLink>
                </div>
            </div>
            <p className='footer__copy-right'>Copyright &#169; 2024 Katherine Phan. All Rights Reserved.</p>
        </nav>
    )
}

export default Footer
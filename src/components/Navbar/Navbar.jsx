import './Navbar.scss'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import logo from '../../assets/images/portfolio-logo.png'

const Navbar = () => {

    const [ openMenu, setOpenMenu ] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(prevState => !prevState)
    }

    return ( 
        <header className="nav">
            <nav className="nav__bar-container">
                <Link>
                    <img src={logo} alt='initial logo' className='nav__logo'/>
                </Link>
                <FontAwesomeIcon
                    icon= { openMenu ? faTimes : faBars}
                    className = 'nav__burger-menu'
                    onClick = {toggleMenu}
                />
            </nav>
            <section className={`nav__link-container ${openMenu ? 'nav__link-container--open' : ''}`}>
                <div className="nav__link">
                    <HashLink smooth to="/#about">About</HashLink>
                </div>
                <div className="nav__link">
                    <HashLink smooth to="/#experience">Experience</HashLink>
                </div>
                <div className="nav__link">
                    <HashLink smooth to="/#projects">Projects</HashLink>
                </div>
                <div className="nav__link">
                    <HashLink smooth to="/#contact">Contact</HashLink>
                </div>
            </section>
        </header>
    )

}

export default Navbar
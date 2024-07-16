import './Navbar.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import logo from '../../assets/images/initial-logo.png'

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
                    <Link to="/about">About</Link>
                </div>
                <div className="nav__link">
                    <Link to="/experience">Experience</Link>
                </div>
                <div className="nav__link">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="nav__link">
                    <Link to="/contact">Contact</Link>
                </div>
            </section>
        </header>
    )

}

export default Navbar
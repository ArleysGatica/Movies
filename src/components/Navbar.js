import React from 'react'
import logo from '../assets/logo.png'
import login from '../assets/icon-login.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={logo} alt="Logo Dreadful Tomato" />
            </div>
            <div className='nav__actions'>
                <div className='nav__login'>
                    <p><Link to='#'>Login</Link></p>
                    <img src={login} alt="icono para el login" />
                </div>
                <div className='nav__trial btn btn--active'>
                    <Link to='#'> Start your free trial</Link>
                </div>
            </div>
        </nav>
    )
}

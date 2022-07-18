import React from 'react'
import logo from '../assets/logo.png'
import appApple from '../assets/app-store.png'
import appGoogle from '../assets/google-play.png'

export const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logo} alt="Logo Dreadful Tomato" />
            <ul className='footer__list'>
                <li className='footer__item'>Home</li>
                <li className='footer__item'>Terms of Use</li>
                <li className='footer__item'>Legal Notices</li>
                <li className='footer__item'>Help</li>
                <li className='footer__item'>Manage Account</li>
            </ul>
            <div className='footer__store'>
                <img src={appApple} alt="store de apple" />
                <img src={appGoogle} alt="store de apple" />
            </div>
            <div className='footer__copyright'>
                Copyright 2020 Dreadful Tomato. All rights reserved.
            </div>
        </footer>
    )
}

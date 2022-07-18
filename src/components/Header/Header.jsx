import React from 'react'
import Logo from '../../assets/logo.png'
import Sing from '../../assets/icon-login.png'

export const Header = () => {
    return (
        <>
            <header className='Container-Header'>
                <nav className='Container-nav'>
                    <img className='Container-img' src={Logo} alt="LOGO" />
                    <ul className='Container-ul'>
                        <div className='Container'>
                        logo
                        {/* <NavLink to="/Studies">Login</NavLink> */}
                            <img src={Sing} alt="" />
                        </div>
                        <p>Start your free trial</p>
                    </ul>
                </nav>
            </header>
        </>
    )
}
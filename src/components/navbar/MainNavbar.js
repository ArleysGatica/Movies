import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import login from '../../assets/icon-login.png'
import filter from '../../assets/icon-filter.png'
import movies from '../../assets/icon-movies.png'
import series from '../../assets/icon-series.png'


import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { UiContext } from '../../context/ui/UiContext'

const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                className={`nav__item ${match ? 'active-link' : ''}`}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}

export const MainNavbar = () => {
    const { toggleFilter, isOpenFilter } = useContext(UiContext)
    return (
        <nav className='nav center-content'>
            <div className='nav__left'>
                <div className='nav__logo'>
                    <Link to='/'> <img src={logo} alt="Logo Dreadful Tomato" /></Link>
                </div>
                <div className='nav__links'>
                    <ActiveLink to='/movies'>
                        <img src={movies} alt="icon_movies" />
                        <p>Movies</p>
                    </ActiveLink>
                    <ActiveLink to='/series'>
                        <img src={series} alt="icon_series" />
                        <p>Series</p>
                    </ActiveLink>
                </div>
            </div>

            <div className='nav__actions'>
                <div className={`nav__filters ${isOpenFilter ? 'openFilter' : undefined} `} onClick={toggleFilter}>
                    <img src={filter} alt="Icon filter" />
                    <p>filters</p>
                </div>
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

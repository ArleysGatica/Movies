import React from 'react'
import { Link } from 'react-router-dom'

import movies from '../assets/movies.png'
import series from '../assets/series.png'

export const Categories = () => {
    return (
        <div className='categories'>
            <Link to={'/movies'}>
                <div className='categories__movies'>
                    <h2 className='categories__title'>Movies</h2>
                    <img className='categories__img' src={movies} alt="Portada de la categoría movies" />
                </div>
            </Link>
            <Link to={'/series'}>
                <div className='categories__series'>
                    <h2 className='categories__title'>Series</h2>
                    <img className='categories__img' src={series} alt="Portada de la categoría series" />
                </div>
            </Link>
        </div>
    )
}

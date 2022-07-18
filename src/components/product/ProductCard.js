import React from 'react'
import { useState } from 'react'

export const ProductCard = ({ product }) => {
    const  [isHovered,setIsHovered] = useState(false)
    return (
        <div className='product__item' key={product.title} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            
            <div className={`product__title ${isHovered ? 'hiddenTitle' : undefined}`}  >
                {product.title}
            </div>
            <div className={`product__summary ${isHovered ? 'showDescription' : undefined}`}>
                <h1 className='product__summary_title'>{product.title}</h1>
                <h2 className='product__summary_subtitle'>{product.releaseYear.toString()}</h2>
                <p className='product__summary_description'>{product.description.slice(0,100)}</p>
            </div>
            <img className='product__img' src={product.images['Poster Art'].url} alt={`poster ${product.title}`} />
        </div>
    )
}

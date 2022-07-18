import React, { useEffect, useContext } from 'react'

import { DataContext } from '../../context/data/DataContext'
import { ProductCard } from './ProductCard'
import { usePaginate } from '../../hooks/usePaginate'
import { Paginate } from '../pagination/Paginate';

export const ProductList = ({ type }) => {

  const { movies, series, onLoadData } = useContext(DataContext)

  const data = type === 'movie' ? movies : series

  const { currentData, currentPage, totalPages, paginate } = usePaginate(data, 10)

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  useEffect(() => {
    onLoadData(type)
  }, [onLoadData, type])

  return (
    <div className='product'>
      <div className="product__container">
        {
          currentData && currentData.map(serie => (
            <ProductCard key={serie.title} product={serie} />
          ))
        }
      </div>

      <Paginate currentPage={currentPage} totalPages={totalPages} pages={pages} paginate={paginate} />
    </div>
  )
}

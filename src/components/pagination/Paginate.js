import React from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Paginate = ({ currentPage,pages,totalPages,paginate }) => {
    return (
        <>
            {
                totalPages > 1 && (
                    <div className="product__pagination">
                        <button className="product__pagination__prev" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1 ? true : false}><ArrowBackIosIcon /> </button>
                        <ul className="product__pagination__list">
                            {
                                pages.map(page => (
                                    <li key={page} onClick={() => paginate(page)} className={`product__pagination__item ${currentPage === page ? 'item_active' : undefined} `}>{page}</li>
                                ))
                            }
                        </ul>

                        <button className="product__pagination__next" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages ? true : false}><ArrowForwardIosIcon /></button>
                    </div>
                )
            }
        </>
    )
}

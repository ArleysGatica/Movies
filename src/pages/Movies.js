import React from 'react'
import { Filter } from '../components/filter/Filter'
import { MainLayout } from '../components/layout/MainLayout'
import { ProductList } from '../components/product/ProductList'


export const Movies = () => {

  return (
    <MainLayout>
      <Filter category='movie' />
      <div className='center-content'>
        <div className='pt-4 pb-4'>
          <h1 className='title'>Popular Movies</h1>
          <ProductList type='movie' />
        </div>
      </div>

    </MainLayout>
  )
}

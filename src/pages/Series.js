import React from 'react'

import { Filter } from '../components/filter/Filter'
import { MainLayout } from '../components/layout/MainLayout'
import { ProductList } from '../components/product/ProductList'

export const Series = () => {



  return (
    <MainLayout>
       <Filter category='series' />
      <div className='center-content'>
        <div className='pt-4 pb-4'>
          <h1 className='title'>Popular Series</h1>
          <ProductList type='series' />
        </div>
      </div>
    </MainLayout>
  )
}

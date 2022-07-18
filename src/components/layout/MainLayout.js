import React from 'react'
import { Footer } from '../Footer'
import { MainNavbar } from '../navbar/MainNavbar'

export const MainLayout = ({ children }) => {
  return (
    <div >
      <div className='nav__container'>
        <MainNavbar />
      </div>
      <main className=' main-bg'>
        {children}
      </main>

      <Footer />
    </div>
  )
}

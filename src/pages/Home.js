import React from 'react'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer'
import { HomeLayout } from '../components/layout/HomeLayout'

export const Home = () => {
    return (
        <HomeLayout>
            <Categories />
            <Footer />
        </HomeLayout>
    )
}

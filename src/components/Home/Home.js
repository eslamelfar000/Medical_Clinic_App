import React from 'react'
import Header from './Header/Header'
import Home_about from './Home_about/Home_about'
import Home_booking from './Home_booking/Home_booking'
import Home_news from './Home_news/Home_news'
import Home_services from './Home_services/Home_services'
import Home_test from './Home_Testimonial/Home_test'
import Home_working from './Home_working/Home_working'

function Home() {
    return (
        <div>
            <Header />
            <Home_about />
            <Home_working />
            <Home_booking />
            <Home_services />
            <Home_test />
            <Home_news />
        </div>
    )
}

export default Home

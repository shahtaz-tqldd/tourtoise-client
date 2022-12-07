import React from 'react'
import HomeBlogs from './components/HomeBlogs'
import HomeStories from './components/HomeStories'
import MidBanner from './components/MidBanner'
import SearchPlace from './components/SearchPlace'
import TopBanner from './components/TopBanner'

const Homepage = () => {
    return (
        <>
            <TopBanner />
            <section className='lg:max-w-[80%] mx-auto'><SearchPlace/></section>
            <MidBanner />
            <section className='lg:max-w-[80%] mx-auto'><HomeBlogs /></section>
            <HomeStories/>
        </>
    )
}

export default Homepage
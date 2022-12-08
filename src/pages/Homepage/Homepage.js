import React from 'react'
import useTitle from '../../hooks/useTitle'
import HomeBlogs from './components/HomeBlogs'
import HomeGroups from './components/HomeGroups'
import HomeStories from './components/HomeStories'
import MidBanner from './components/MidBanner'
import PeopleTalks from './components/Reviews/PeopleTalks'
import SearchPlace from './components/SearchPlace'
import TopBanner from './components/TopBanner'

const Homepage = () => {
    useTitle('Homepage')
    return (
        <>
            <section className='lg:max-w-[80%] mx-auto'>
                <TopBanner />
                <SearchPlace />
            </section>
            
            <MidBanner />
            
            <section className='lg:max-w-[80%] mx-auto'>
                <HomeBlogs />
                <HomeStories />
                <HomeGroups />
                <PeopleTalks />
            </section>
        </>
    )
}

export default Homepage
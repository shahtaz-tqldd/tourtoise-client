import React from 'react'
import { Link } from 'react-router-dom'

import useTitle from '../../hooks/useTitle'
import Activities from './components/Activities'
import Description from './components/Description'
import Foods from './components/Foods/Foods'
import HowToGo from './components/HowToGo'
import PlaceHead from './components/PlaceHead'
import TourSpots from './components/TourSpot/TourSpots'
import WhereToStay from './components/WhereToStay'

const PlaceDetails = () => {
    useTitle('Sajek Valley')
  
    return (
        <section className='lg:max-w-[1250px] mx-auto px-5'>
            <PlaceHead />
            <div className='flex mt-12 gap-6'>
                <div className='lg:w-2/3'>
                    <HowToGo />
                    <WhereToStay />
                    <TourSpots />
                    <Foods />
                    <Activities />
                    <Description />
                </div>

                <div className='lg:w-1/3'>
                    <div className='bg-white rounded-lg p-5 mb-5'>
                        <h2 className='text-xl font-bold'>Read Blogs about Sajek</h2>
                        <p>Go to <Link to='/blogs' className='text-primary'>Tour Blog</Link></p>
                    </div>
                    <div className='bg-white rounded-lg p-5 mb-5'>
                        <h2 className='text-xl font-bold'>Are you planning to go to Sajek?</h2>
                        <p>Find if any groups are going there too?</p>
                        <p>Go to <Link to='/tour-groups' className='text-error'>Tour Groups</Link></p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PlaceDetails
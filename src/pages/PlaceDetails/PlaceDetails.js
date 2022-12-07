import React from 'react'
import useTitle from '../../hooks/useTitle'
import HowToGo from './components/HowToGo'
import PlaceHead from './components/PlaceHead'

const PlaceDetails = () => {
    useTitle('Sajek Valley')
    return (
        <section className='lg:max-w-[80%] mx-auto px-5'>
            <PlaceHead />
            <div className='flex mt-12'>
                <div className='lg:w-2/3'>
                    <HowToGo />
                </div>
                <div className='lg:w-1/3'>

                </div>
            </div>
        </section>
    )
}

export default PlaceDetails
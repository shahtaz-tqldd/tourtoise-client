import React from 'react'

import useTitle from '../../hooks/useTitle'
import HotelBanner from './components/HotelBanner'
import HotelCard from './components/HotelCard'
import HotelSearch from './components/HotelSearch'

const BookHotels = () => {
    useTitle('Hotels')
  
    const hotels = [
        {
            "id": 1,
            "name": "Disney Hotel",
            "location": "cox's Bazar",
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/15/21/e4/dc/six-seasons-hotel.jpg",
            "rating": 5,
            "price": 10000
        },
        {
            "id": 2,
            "name": "Ramosina Hotel",
            "location": "Shrimangal, Sylhet",
            "img": "https://www.bproperty.com/blog/wp-content/uploads/10-hotels1.jpg",
            "rating": 5,
            "price": 10000
        },
        {
            "id": 3,
            "name": "Diana Hotel",
            "location": "Motijhil, Dhaka",
            "img": "https://updateoffer.com/wp-content/uploads/2017/11/Dhaka-Top-Hotel-List.jpg",
            "rating": 5,
            "price": 10000
        },
    ]
    return (
        <section className='lg:max-w-[1250px] mx-auto px-5'>
            <HotelBanner />
            <HotelSearch />
            <h2 className='text-3xl font-bold mt-16'>Hotels, Resort and Guest Houses</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
                {
                    hotels.map(hotel => <HotelCard key={hotel.id} data={hotel} />)
                }
            </div>
        </section>
    )
}

export default BookHotels
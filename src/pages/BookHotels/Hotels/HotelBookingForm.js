import React from 'react'
import useTitle from '../../../hooks/useTitle'

const HotelBookingForm = () => {
  useTitle('Hotel Booking Form')

  return (
    <section className='lg:max-w-[1250px] mx-auto px-5'>
      <h2 className='text-3xl font-boldt mt-12'>Book Hotels</h2>
    </section>
  )
}

export default HotelBookingForm
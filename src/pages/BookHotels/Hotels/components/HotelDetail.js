import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import useTitle from '../../../../hooks/useTitle'

const HotelDetail = ({ hotel }) => {
    useTitle('Hotel Name')
  
    const { name, location, price } = hotel
    return (
        <div className='w-[90%] mx-auto p-6 bg-white rounded-lg -mt-16 shadow-lg flex items-center justify-between flex-wrap' style={{ position: 'relative', zIndex: '1' }}>
            <div>
                <h2 className='text-3xl font-bold mb-2'>{name}</h2>
                <p className='flex items-center'><MdLocationOn />&nbsp;{location}</p>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <div>
                <h2 className='text-md mb-0'>Available Room</h2>
                <p className='text-3xl font-bold'>32</p>
            </div>
            <div>
                <h2 className='text-md mb-0'>Start from</h2>
                <p className='text-3xl font-bold'>BDT {price}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold mb-1'>Facilities</h2>
                <p className='text-sm'>Swimming Pool, TV, Morning Breakfast</p>
            </div>
        </div>
    )
}

export default HotelDetail
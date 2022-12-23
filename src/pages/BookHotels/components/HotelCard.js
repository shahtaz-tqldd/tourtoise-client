import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

const HotelCard = ({ data }) => {
    const { img, name, price, location } = data
    return (
        <Link to={`/hotels/${name}`}>
            <div className="card card-compact bg-base-100 hover:bg-[#BFEAF5] hover:shadow-xl transition duration-400">
                <figure><img src={img} alt={name} className="h-56 w-full object-cover" /></figure>
                <div className="p-4">
                    <div className='flex justify-between items-center'>
                        <p className='text-lg text-[#E97777]'>Start from <b>BDT {price}</b></p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-200" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className='flex items-center mt-2'><MdLocationOn />&nbsp;{location}</p>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard
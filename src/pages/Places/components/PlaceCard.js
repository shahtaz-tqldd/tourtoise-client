import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

const PlaceCard = ({ place }) => {
    const { image, placeName, address } = place
    return (
        <Link to={`/places/${placeName}`}>
            <div className='rounded-2xl shadow-2xl overflow-hidden'>
                <div className="card h-[400px] hover:scale-105 transition duration-300"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="mt-auto ml-4 mb-6 text-white">
                        <h2 className="text-3xl font-bold ">{placeName}</h2>
                        <p className='flex items-center'><MdLocationOn />&nbsp;{address}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PlaceCard
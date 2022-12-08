import React, { useState } from 'react'
import SpotCard from './SpotCard'
import TourspotModal from './TourspotModal'

const TourSpots = () => {
    const spots = [
        {
            "id": 1,
            "name": "Remakri Waterfall",
            "img": "https://media.istockphoto.com/id/155385658/photo/waterfall.jpg?s=612x612&w=0&k=20&c=K3KBxzCFMP8RPKRzNjIGv8ivh9m-HUBINOtjgknwWR0=",
            "detail": "2.5km Near"
        },
        {
            "id": 2,
            "name": "Alu Tila Cave",
            "img": "https://www.musafir.com.bd/images/places/Alutila-Cave.jpg",
            "detail": "3km Near"
        },
    ]
    const [modal, setModal] = useState(null)
    return (
        <div className='bg-white rounded-lg p-6 mt-5'>
            <h2 className='text-3xl font-bold mb-4'>Tour Spots in this Place</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    spots.map(spot => <SpotCard key={spot.id} spot={spot} setModal={setModal} />)
                }
            </div>
            {
                modal &&
                <TourspotModal data={modal} />
            }
        </div>
    )
}

export default TourSpots
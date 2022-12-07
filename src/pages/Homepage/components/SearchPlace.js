import React from 'react'
import PlaceCard from './PlaceCard'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const SearchPlace = () => {
    const tourPlaces = [
        {
            "id": 1,
            "placeName": "Jaflong",
            "address": "Moulovi Bazar, sylhet",
            "image": "https://live.staticflickr.com/3698/12871529944_9cb075eaba_b.jpg",
        },
        {
            "id": 2,
            "placeName": "Lalon Majar",
            "address": "Kumarkhali, Kushtia",
            "image": "https://3.bp.blogspot.com/-8eW60B6HFZI/V7VaAsc9ajI/AAAAAAAAAmw/qMiBEdb1QdEqXcKgNp30EV2mvpnAbfvxQCLcB/s1600/96_big.jpg",
        },
    ]
    return (
        <div className='flex mt-24'>
            <div className='lg:w-1/2 grid lg:grid-cols-2 gap-6'>
                {
                    tourPlaces.map(p => <PlaceCard key={p.id} place={p} />)
                }
            </div>

            <div className='lg:w-1/2 flex flex-col items-center mt-16'>
                <h1 className='text-4xl font-bold mb-2'>Search Tour Place</h1>
                <p className='w-2/3'>Search Tour Place you want to go, Browse your favourite place and find every possible details you want to know</p>
                <form className='flex items-center mt-8'>
                    <input type="text" placeholder="Type place name" className="input input-bordered w-64 focus:outline-none" />
                    <button className="btn btn-primary -ml-4 ">Search</button>
                </form>
                <Link to='/' className='flex items-center text-lg mt-8 text-primary font-bold hover:text-secondary transition duration-300'>See All Places &nbsp;<BsArrowRight /></Link>
            </div>
        </div>
    )
}

export default SearchPlace
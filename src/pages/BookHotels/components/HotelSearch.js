import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiGreenhouse, GiFamilyHouse } from 'react-icons/gi'

const HotelSearch = () => {
    return (
        <div className='w-[90%] mx-auto p-6 bg-white rounded-lg -mt-16 shadow-lg flex justify-between' style={{ position: 'relative', zIndex: '1' }}>
            <div>
                <h2 className='text-xl font-bold mb-4'>Facilities</h2>
                <div className='flex gap-6'>
                    <div className='flex flex-col items-center'><span className='p-2 text-xl text-primary border-[2px] shadow-md rounded-md mb-2'><AiOutlineHome /></span><small><b>Guest House</b></small></div>
                    <div className='flex flex-col items-center'><span className='p-2 text-xl text-error border-[2px] shadow-md rounded-md mb-2'><GiFamilyHouse /></span><small><b>Hotels</b></small></div>
                    <div className='flex flex-col items-center'><span className='p-2 text-xl text-success border-[2px] shadow-md rounded-md mb-2'><GiGreenhouse /></span><small><b>Eco Resort</b></small></div>

                </div>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-4'>Where do you need to stay?</h2>
                <select className="select w-full max-w-xs px-0 focus:outline-none">
                    <option disabled selected>Slect a region</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Khulna</option>
                    <option>Rajshahi</option>
                    <option>Cox's Bazar</option>
                </select>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-3'>Search Hotel</h2>
                <form className='flex items-center'>
                    <input type="text" placeholder="Hotel Name" className="input input-bordered w-64 focus:outline-none" />
                    <button className="btn btn-primary rounded-l-none -ml-4 ">Search</button>
                </form>
            </div>
        </div>
    )
}

export default HotelSearch
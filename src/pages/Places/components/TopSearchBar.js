import React from 'react'
import tourObject from '../../../assets/images/tourObject.png'

const TopSearchBar = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center mt-12'>
            <div className='flex items-center lg:flex-row md:flex-row flex-col mb-6'>
                <img src={tourObject} alt="" className='lg:h-36 md:h-24 h-16' />
                <div>
                    <h2 className='text-2xl font-bold font-poppins mb-4'>Search Tour Places</h2>
                    <form className='flex items-center'>
                        <input type="text" placeholder="Type place name" className="input input-bordered w-64 focus:outline-none" />
                        <button className="btn btn-primary -ml-4 ">Search</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-row bg-white p-4 rounded-lg lg:ml-8">
                <div>
                    <h2 className='text-lg font-bold ml-4'>Categories</h2>
                    <select className="select w-full max-w-xs focus:outline-none">
                        <option disabled selected>Pick your favorite spot</option>
                        <option>Hill Trek</option>
                        <option>Sea Beach</option>
                        <option>Forrest</option>
                        <option>Eco Park</option>
                    </select>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div>
                    <h2 className='text-lg font-bold ml-4'>Regions</h2>
                    <select className="select w-full max-w-xs focus:outline-none">
                        <option disabled selected>Pick a District</option>
                        <option>Dhaka</option>
                        <option>Mymensingh</option>
                        <option>Comilla</option>
                        <option>Khulna</option>
                        <option>Rangpur</option>
                        <option>Rajshahi</option>
                        <option>Chittagong</option>
                        <option>Barisal</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TopSearchBar
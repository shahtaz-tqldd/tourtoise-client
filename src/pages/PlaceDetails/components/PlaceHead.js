import React from 'react'
import { MdLocationOn } from 'react-icons/md'

const PlaceHead = () => {
    return (
        <div className='flex mt-12'>
            <div className='lg:w-2/5 mt-10'>
                <h1 className='text-5xl font-bold'>Sajek Valley</h1>
                <p className='flex items-center text-lg mt-4'><MdLocationOn />&nbsp;Khagrachari, Bandarban</p>

                <div className="flex w-80 flex-row bg-white p-4 rounded-lg mt-6">
                    <div>
                        <h2 className='text-sm'>Best time for Tour</h2>
                        <b>Winter</b>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <h2 className='text-sm'>Tourspot Type</h2>
                        <b>Hill Treck</b>
                    </div>
                </div>
            </div>
            <figure className='lg:w-3/5'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/1200px-Sajek_Valley_2.jpg" alt="sajek valley" className='h-[400px] w-full object-cover rounded-lg' />
            </figure>
        </div>
    )
}

export default PlaceHead
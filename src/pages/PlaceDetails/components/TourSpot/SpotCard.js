import React from 'react'
import { MdLocationOn } from 'react-icons/md'

const SpotCard = ({ spot, setModal }) => {
    const { name, img, detail } = spot
    return (
        <label htmlFor="spot-modal" className='cursor-pointer'>
            <div onClick={()=>setModal(spot)} className='rounded-2xl shadow-2xl overflow-hidden'>
                <div className="card h-[320px] hover:scale-105 transition duration-300"
                    style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="mt-auto ml-4 mb-6 text-white">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className='flex items-center'><MdLocationOn />&nbsp;{detail}</p>
                    </div>
                </div>
            </div>
        </label>
    )
}

export default SpotCard
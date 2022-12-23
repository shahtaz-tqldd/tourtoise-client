import React from 'react'
import { FaBed } from 'react-icons/fa'

const RoomCard = ({ room, setRoomSelect }) => {
    const {name, img, price, beds} = room
    return (
        <label onClick={()=>setRoomSelect(room)} htmlFor='room-modal' className="card bg-base-100 cursor-pointer transition duration-300 hover:bg-[#CFFDE1] hover:shadow-xl">
            <figure><img src={img} alt="hotel" className='h-56 w-full object-cover' /></figure>
            <div className="p-6">
                <h2 className="text-xl font-bold">{name}</h2>
                <h2><span className='text-2xl font-bold text-error'>BDT {price}</span> per night</h2>
                <p className='flex items-center'><FaBed/>&nbsp;{beds} Beds</p>
            </div>
        </label>
    )
}

export default RoomCard
import React from 'react'

const MemberCard = ({ member }) => {
    const {photoURL, user, location} =  member
    return (
        <div className='flex items-center my-2 bg-[#C0EEE4] p-3 rounded-full' >
            <figure>
                <img src={photoURL} alt={user} className="w-12 h-12 object-cover rounded-full" />
            </figure>
            <div className='ml-2'>
                <h3 className='text-lg font-bold'>{user}</h3>
                <p className="text-sm">{location}</p>
            </div>
        </div>
    )
}

export default MemberCard
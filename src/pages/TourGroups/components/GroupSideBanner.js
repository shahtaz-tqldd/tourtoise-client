import React from 'react'
import groupTour from '../../../assets/images/group-tour.png'

const GroupSideBanner = () => {
    return (
        <div><img src={groupTour} alt="group tour" />
            <h2 className='text-3xl font-bold'>Welcome to Tour Groups</h2>
            <p className='mt-5 mb-3 text-lg font-bold'>Rules and Regulations</p>
            <ul className='ml-2'>
                <li>Before Joinning any group, please read details</li>
                <li>Respect privacy concern of others</li>
                <li>Verify details before going on a group tour</li>
            </ul></div>
    )
}

export default GroupSideBanner
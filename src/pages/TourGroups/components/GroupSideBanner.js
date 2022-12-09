import React from 'react'
import groupTour from '../../../assets/images/group-tour.png'
import {AiFillCaretRight} from 'react-icons/ai'

const GroupSideBanner = () => {
    return (
        <div><img src={groupTour} alt="group tour" />
            <h2 className='text-3xl font-bold'>Welcome to Tour Groups</h2>
            <p className='mt-5 mb-3 text-lg font-bold'>Rules and Regulations</p>
            <ul className=''>
                <p className='flex items-center'><AiFillCaretRight/> &nbsp;Before Joinning any group, please read details</p>
                <p className='flex items-center'><AiFillCaretRight/> &nbsp;Respect privacy concern of others</p>
                <p className='flex items-center'><AiFillCaretRight/> &nbsp;Verify details before going on a group tour</p>
            </ul></div>
    )
}

export default GroupSideBanner
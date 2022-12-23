import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import luggage from '../../../assets/images/luggage.png'

const GroupCard = ({ group }) => {
    const { title, startDate, returnDate, person, id } = group
    return (
        <div className="bg-error transition duration-300 hover:bg-[#E97777] hover:shadow-xl rounded-lg">
            <div className="p-4">
                <div className='flex'>
                    <img src={luggage} alt="tour" className='h-10' />
                    <h2 className="text-2xl  font-bold text-white">{title}</h2>
                </div>
                <div className='flex text-white mt-3 text-sm flex items-center'>
                    <FiCalendar />&nbsp;<span>{startDate}</span> &emsp;<HiArrowNarrowRight />&emsp; <span>{returnDate}</span>
                </div>
                <p className='text-white flex items-center'><BsFillPeopleFill /> &nbsp;{person} Person</p>
                <span className='flex justify-end'>
                    <Link to={`/tour-groups/${id}`}><button className="btn btn-[#CE7777] btn-outline btn-sm normal-case rounded-full mt-4 pb-[2px]">Join Group</button></Link>
                </span>
            </div>
        </div>
    )
}

export default GroupCard
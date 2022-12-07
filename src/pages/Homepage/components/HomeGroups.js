import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import GroupCard from '../../TourGroups/components/GroupCard'

const HomeGroups = () => {
    const groups = [
        {
            "id": 1,
            "title": "Tour to cox's Bazar",
            "startDate": "Nov 4, 2022",
            "returnDate": "Nov 7, 2022",
            "person": 12,
            "image": "https://awalkintheworld.com/wp-content/uploads/2020/10/people-relaxing-coxs-bazar-1024x576.jpg"
        },
        {
            "id": 2,
            "title": "Tour to Sajek",
            "startDate": "Nov 4, 2022",
            "returnDate": "Nov 7, 2022",
            "person": 12,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/1200px-Sajek_Valley_2.jpg"
        },
        {
            "id": 3,
            "title": "Tour to Sundarban",
            "startDate": "Nov 4, 2022",
            "returnDate": "Nov 7, 2022",
            "person": 12,
            "image": "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/4493146_Sundarbans%20Royal%20Bengal%20Tiger.jpg",
        },
        {
            "id": 4,
            "title": "Tour to Bandarban",
            "startDate": "Nov 4, 2022",
            "returnDate": "Nov 7, 2022",
            "person": 12,
            "image": "https://i.pinimg.com/originals/2e/82/32/2e8232edb7980535819fb00afc168ce7.jpg"
        }
    ]
    return (
        <div className='flex mt-32'>
            <div className='lg:w-1/2 grid lg:grid-cols-2 gap-4'>
                {
                    groups.map(group => <GroupCard key={group.id} group={group} />)
                }
            </div>
            <div className='lg:w-1/2 flex flex-col items-center mt-16'>
                <h1 className='text-4xl font-bold mb-2'>Join a Tour Group</h1>
                <p className='w-2/3'>Search Tour Place you want to go, Browse your favourite place and find every possible details you want to know</p>
                <Link to='/tour-groups' className='flex items-center text-lg mt-8 text-primary font-bold hover:text-secondary transition duration-300'>See All Groups &nbsp;<BsArrowRight /></Link>
            </div>
        </div>
    )
}

export default HomeGroups
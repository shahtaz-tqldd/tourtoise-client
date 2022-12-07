import React from 'react'
import TalksCard from './TalksCard'
import { MdOutlineMarkChatUnread} from 'react-icons/md'

const PeopleTalks = () => {
    const reviews = [
        {
            id: 1,
            name: 'Shamsul Alam',
            location: 'Dhaka, Bangladesh',
            comment: 'Tourtoise is a great site to finds tour places and other information. It has amazing features and I loved it',
            rating: 4,
            propic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: 2,
            name: 'Ramisa Kabir',
            location: 'Comilla, Bangladesh',
            comment: 'I found hotels and other details from tourtoise which helped me a lot to find my honeymoon tour. Great pleasure!',
            rating: 5,
            propic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        {
            id: 3,
            name: 'Rabiul Islam Babu',
            location: 'Dhaka, Bangladesh',
            comment: 'I think they need to stil deal with some bugs and features. I found problems in the payment system, later I called and they fixed that.',
            rating: 3,
            propic: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
        }
    ]
    return (
        <div>
            <h1 className='text-2xl mb-8 font-bold mt-32'>People <span className='text-primary'>#talks</span> about tourtoise</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {reviews.map(review => <TalksCard key={review.id} review={review} />)}
            </div>
            <h2 className='mt-12 text-lg flex justify-end items-center text-primary'><MdOutlineMarkChatUnread className='pt-1 text-3xl'/>&nbsp;Talk about tourtoise</h2>
        </div>
    )
}

export default PeopleTalks
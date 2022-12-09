import React from 'react'
import tour from '../../../assets/images/tour.jpg'
import adventure from '../../../assets/images/adventure.jpg'
import { Link } from 'react-router-dom'
import ShareMomentModal from '../../Moments/components/ShareMomentModal'

const HomeStories = () => {
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <figure className='lg:w-1/2 flex justify-center relative'>
                    <img src={tour} alt="moment" className="w-64 h-64 object-cover rounded-md mt-16" />
                    <img src={adventure} alt="moment" className="w-64 h-64 object-cover rounded-md -ml-24 shadow-lg" />
                </figure>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Share Your Moment</h1>
                    <p className="py-6">Share your marvellous adventure or just memorable tour story with others. Read from people experiences and get ideas</p>
                    <div className='flex'>
                        <label htmlFor='shareMoment-modal' className="btn btn-primary btn-sm text-white normal-case rounded">Share Moment +</label>
                        <ShareMomentModal />

                        <Link to='/moments'><button className="btn btn-primary btn-sm btn-outline normal-case rounded ml-4">Read From People</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeStories
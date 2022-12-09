import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../assets/images/banner.webp'

const TopBanner = () => {
    return (
        <div className="hero my-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <figure className='lg:w-1/2'><img src={banner} alt="tour" className="" /></figure>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold ">Tourtoise is Your <br/>Virtual Tour Guide</h1>
                    <p className="py-6 text-lg lg:w-5/6">Tourtoise guide you giving all information about tour places including hotels and resorts</p>
                    <Link to='/sign-up'><button className="btn btn-primary btn-sm rounded normal-case text-white px-6">Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}

export default TopBanner
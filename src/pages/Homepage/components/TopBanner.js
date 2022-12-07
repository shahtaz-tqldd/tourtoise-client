import React from 'react'
import banner from '../../../assets/images/banner.webp'

const TopBanner = () => {
    return (
        <div className="hero relative">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <figure className='lg:w-1/2'><img src={banner} alt="tour" className="" /></figure>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Tourtoise is Your Virtual Tour Guide</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary btn-sm rounded normal-case text-white px-6">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default TopBanner
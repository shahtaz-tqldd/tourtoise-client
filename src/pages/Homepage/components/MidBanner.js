import React from 'react'
import midbanner from '../../../assets/images/midbanner.png'

const MidBanner = () => {
    return (
        <div className="hero bg-[#C0EEE4] my-24 py-8">
            <div className="hero-content flex-col lg:flex-row">
                <figure className='lg:w-1/2'><img src={midbanner} alt="why tourtoise" className="" /></figure>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Why Tourtoise</h1>
                    <div className='text-xl'>
                        <p className="pt-6 pb-2">Helps you to find tour places</p>
                        <p className="py-2">You get every details how to reach there</p>
                        <p className="py-2">You can book hotels nearby</p>
                        <p className="py-2">You can find tour groups</p>
                        <p className="py-2">You can read Tour Blogs</p>
                        <p className="py-2">You can create your tourist profile</p>
                        <p className="py-2">And share your story to the people</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidBanner
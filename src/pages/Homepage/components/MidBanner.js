import React from 'react'
import midbanner from '../../../assets/images/midbanner.png'
import icon1 from '../../../assets/icons/icon1.png'
import icon3 from '../../../assets/icons/icon3.png'
import icon4 from '../../../assets/icons/icon4.png'
import icon5 from '../../../assets/icons/icon5.png'
import icon6 from '../../../assets/icons/icon6.png'
import icon7 from '../../../assets/icons/icon7.png'

const MidBanner = () => {
    const bannerText = [
        {
            "id":1,
            "text": "Helps you to find tour places and provide information",
            "icon": icon1
        },
        {
            "id":2,
            "text":"Prebook nearby hotels and resorts",
            "icon": icon3
        },
        {
            "id":3,
            "text":"Find tour groups that suits your time",
            "icon": icon4
        },
        {
            "id":4,
            "text":"Read tour blogs from professional tourist",
            "icon": icon5
        },
        {
            "id":5,
            "text":"Create your tourist profile to join the tourist community",
            "icon": icon6
        },
        {
            "id":6,
            "text":"Share your memorable tour moment and engage",
            "icon": icon7
        },
    ]
    return (
        <div className="hero bg-[#C0EEE4] my-24 py-8">
            <div className="hero-content flex-col lg:flex-row">
                <figure className='lg:w-1/2'><img src={midbanner} alt="why tourtoise" className="" /></figure>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold ">Why Tourtoise</h1>
                    <div className='grid grid-cols-2 gap-4 mt-12'>
                        {
                            bannerText.map(text => {
                                return (
                                    <div key={text.id} className='flex items-center h-24 bg-white px-3 py-4 rounded-lg  border-b-4 border-primary'>
                                        <img src={text.icon} alt="tour object" className='h-12'/>
                                        <p className='ml-2 font-bold'>{ text.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidBanner
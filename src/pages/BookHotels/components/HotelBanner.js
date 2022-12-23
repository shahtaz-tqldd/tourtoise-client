import React from 'react'
import './style.css'

const HotelBanner = () => {
    return (
        <div className="hero flex mt-10 rounded-xl h-[430px]" style={{ backgroundImage: `url("https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/04111335/amandari-indonesia-suite-exterior-and-pool_original_11588-2-1401x900.jpg")` }}>
            <div className="gradient w-3/5 rounded-l-xl h-full items-start">
                <div className="text-left text-neutral-content py-12">
                    <div className="w-3/4 pl-16 pt-14 text-white">
                        <h1 className="mb-5 text-4xl text-white font-bold">Enjoy Your<br /> Dream Vacation</h1>
                        <p className="mb-5 text-lg">Book Hotels and Resort at your comfort price and get a hassel free tour experiences</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelBanner
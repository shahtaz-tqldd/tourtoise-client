import React from 'react'

const FoodModal = ({data}) => {
    const {img, name, detail } = data
    return (
        <>
            <input type="checkbox" id="food-modal" className="modal-toggle" />
            <div className="modal">
                <div className="relative">
                    <label htmlFor="food-modal" className="btn btn-sm z-10 btn-circle text-error absolute right-2 top-2">✕</label>
                    <div className="rounded-lg">
                        <figure className='w-full relative'><img src={img} alt="food" className='w-[550px] h-[400px] object-cover rounded-lg' /></figure>
                        <div className="absolute bottom-6 right-8 text-white">
                            <h2 className="text-xl font-bold">{name}</h2>
                            <p>{detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodModal
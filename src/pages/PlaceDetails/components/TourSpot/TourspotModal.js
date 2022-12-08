import React from 'react'

const TourspotModal = ({ data }) => {
    const {img, name, detail } = data
    return (
        <>
            <input type="checkbox" id="spot-modal" className="modal-toggle" />
            <div className="modal">
                <div className="relative">
                    <label htmlFor="spot-modal" className="btn btn-sm z-10 btn-circle text-error absolute right-2 top-2">✕</label>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className='w-1/2'><img src={img} alt="Movie" className='w-[350px] h-[400px]' /></figure>
                        <div className="w-1/2 card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourspotModal
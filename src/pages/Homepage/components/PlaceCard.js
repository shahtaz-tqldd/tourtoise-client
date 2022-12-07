import React from 'react'

const PlaceCard = ({ place }) => {
    const {image, placeName, address} = place
    return (
        <div className="card shadow-2xl h-[400px]"
            style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="mt-auto ml-4 mb-6 text-white">
                <h2 className="text-3xl font-bold">{placeName}</h2>
                <p>{address}</p>
            </div>
        </div>
    )
}

export default PlaceCard
import React from 'react'
import useTitle from '../../hooks/useTitle'
import PlaceCard from './components/PlaceCard'
import TopSearchBar from './components/TopSearchBar'

const Places = () => {
    useTitle('Tour Places')
    const tourPlaces = [
        {
            "id": 1,
            "placeName": "Jaflong",
            "address": "Moulovi Bazar, sylhet",
            "image": "https://live.staticflickr.com/3698/12871529944_9cb075eaba_b.jpg",
        },
        {
            "id": 2,
            "placeName": "Lalon Majar",
            "address": "Kumarkhali, Kushtia",
            "image": "https://3.bp.blogspot.com/-8eW60B6HFZI/V7VaAsc9ajI/AAAAAAAAAmw/qMiBEdb1QdEqXcKgNp30EV2mvpnAbfvxQCLcB/s1600/96_big.jpg",
        },
        {
            "id": 3,
            "placeName": "Cox's Bazar Sea Beach",
            "address": "Cox's Bazar",
            "image": "https://awalkintheworld.com/wp-content/uploads/2020/10/people-relaxing-coxs-bazar-1024x576.jpg",
        },
        {
            "id": 4,
            "placeName": "Sajek Valley",
            "address": "Sajek, Khagrachari",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/1200px-Sajek_Valley_2.jpg"
        },
    ]
    return (
        <section className='lg:max-w-[80%] mx-auto px-5'>
            <TopSearchBar />

            {/* place cards */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-20'>
                {
                    tourPlaces.map(p => <PlaceCard key={p.id} place={p} />)
                }
            </div>

            {/* pagination */}
            <div className="btn-group mt-20">
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn btn-disabled">...</button>
                <button className="btn">9</button>
                <button className="btn">10</button>
            </div>
        </section>

    )
}

export default Places
import React, { useState } from 'react'
import HotelDetail from './components/HotelDetail'
import RoomCard from './components/RoomCard'
import RoomModal from './components/RoomModal'

const Hotels = () => {
    const hotel = {
        "id": 3,
        "name": "Polwale Hotels",
        "location": "Rangamati, Khagrachari",
        "img": "https://cdn.kiwicollection.com/media/property/PR008635/xl/008635-37-Anantara_Kihavah_2bedroom_sunset_over_water_%20pool_residence_aerial_sunrise.jpg?cb=1635890054",
        "rating": 5,
        "beds": 2,
        "price": 10000
    }

    const rooms = [
        {
            "id": 1,
            "name": "Delux room",
            "img": "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
            "rating": 5,
            "beds": 2,
            "price": 10000
        },
        {
            "id": 2,
            "name": "Honeymoon suit",
            "img": "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg",
            "rating": 5,
            "beds": 2,
            "price": 12000
        },
        {
            "id": 3,
            "name": "Single Bed",
            "img": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "rating": 5,
            "beds": 2,
            "price": 10000
        },
    ]
    const [roomSelect, setRoomSelect] = useState(null)
    return (
        <section className='lg:max-w-[1250px] mx-auto px-5'>
            <figure className='mt-8'><img src={hotel.img} alt="" className='w-full h-[430px] object-cover rounded-xl' /></figure>
            <HotelDetail hotel={hotel} />

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16'>
                {
                    rooms.map(room => <RoomCard key={room.id} room={room} setRoomSelect={setRoomSelect} />)
                }
            </div>
            {roomSelect &&
                <RoomModal roomSelect={roomSelect} hotelName={hotel.name} />
            }
        </section>
    )
}

export default Hotels
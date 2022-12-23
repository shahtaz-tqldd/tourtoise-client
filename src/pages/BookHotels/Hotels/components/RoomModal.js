import React from 'react'
import { FaAccusoft, FaBed, FaCoffee, FaTv, FaWifi } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const RoomModal = ({ roomSelect, hotelName }) => {
    const { name, img, price, beds } = roomSelect
    return (
        <div>
            <input type="checkbox" id="room-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl">
                    <label htmlFor="room-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex gap-8'>
                        <div className='lg:w-2/3'>
                            <h1 className='text-2xl font-bold mb-4'>{name}</h1>
                            <img src={img} alt="" className='w-full h-[300px] object-cover mb-4' />
                            <h2><span className='text-2xl font-bold text-error'>BDT {price}</span> per night</h2>
                            <h2 className='text-xl font-bold mt-4'>Desctiption</h2>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

                        </div>
                        <div className='lg:w-1/3'>
                            <h2 className='text-xl font-bold mb-4'>Room Facilities</h2>
                            <p className='flex items-center'><FaBed />&nbsp;{beds} Beds</p>
                            <p className='flex items-center'><FaWifi />&nbsp;Wifi</p>
                            <p className='flex items-center'><FaTv />&nbsp;TV</p>
                            <p className='flex items-center'><FaCoffee />&nbsp;Morning Breakfast</p>
                            <p className='flex items-center'><FaAccusoft />&nbsp;Air Conditioning</p>

                            <Link to={`/hotels/booking/${hotelName}`}><label htmlFor="room-modal" className="btn btn-sm text-white rounded-md normal-case absolute bottom-8 right-10">Book Now</label></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomModal
import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { MdAccessTime, MdLocationOn, MdOutlineControlPoint, MdOutlineDirectionsBusFilled } from 'react-icons/md'
import AddNotesModal from './components/AddNotesModal'
import MemberCard from './components/MemberCard'
import NotesModal from './components/NotesModal'

const GroupDetails = () => {
    const data = {
        title: "Tour to Sundaran",
        startDate: "Nov 07, 2022",
        returnDate: "Nov 12, 2022",
        boardingPoint: "Kolabagan Bus Counter, Dhaka",
        boardingTime: "10:00 PM",
        vehicle: "Shyamoli Bus"
    }
    const { title, startDate, returnDate, boardingTime, boardingPoint, vehicle } = data
    const members = [
        {
            "id": 1,
            "user": "Kritika Emam",
            "photoURL": "https://st4.depositphotos.com/5586578/21657/i/600/depositphotos_216576058-stock-photo-facial-expression-happy-smiling-joyful.jpg",
            "location": "Dhaka, Bangladesh"
        },
        {
            "id": 2,
            "user": "Nimoy Urisan",
            "photoURL": "https://media.istockphoto.com/id/1265576293/photo/studio-portrait-of-44-year-old-mixed-race-man-in-t-shirt.jpg?s=612x612&w=0&k=20&c=LPERsHfaHj90SUHMvAZ6u-Cu8AYFur4QvkHqQVb8kgk=",
            "location": "Kushtia, Bangladesh"
        },
        {
            "id": 3,
            "user": "Shahtaz Rahman Shanto",
            "photoURL": "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
            "location": "Dhaka, Bangladesh"
        },
        {
            "id": 4,
            "user": "Iram Shahed Druti",
            "photoURL": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "location": "Kushtia, Bangladesh"
        },
    ]
    const comment = {
        "user": "Nimoy Urisan",
        "photoURL": "https://media.istockphoto.com/id/1265576293/photo/studio-portrait-of-44-year-old-mixed-race-man-in-t-shirt.jpg?s=612x612&w=0&k=20&c=LPERsHfaHj90SUHMvAZ6u-Cu8AYFur4QvkHqQVb8kgk=",
        "comment": "Awesome place to. I went there few months before and it was wow! Can't wait to go again. Some day!"
    }
    const {user, photoURL, comment:body} = comment
    return (
        <section className='lg:max-w-[80%] mx-auto mt-8 px-5 flex lg:flex-row flex-col gap-3'>
            <div className='lg:w-[30%] h-full bg-white rounded-lg p-4'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <div className='flex mt-3 text-sm flex items-center'>
                    <FiCalendar />&nbsp;<span>{startDate}</span> &emsp;<HiArrowNarrowRight />&emsp; <span>{returnDate}</span>
                </div>

                <p className='mt-4'>Boarding Point</p>
                <span className='flex items-center font-bold'><MdLocationOn /> &nbsp;{boardingPoint}<br /> </span>

                <p className='mt-4'>Boarding Time</p>
                <span className='flex items-center font-bold'><MdAccessTime /> &nbsp;{boardingTime}<br /> </span>

                <p className='mt-4'>Starting Vehicle</p>
                <span className='flex items-center font-bold'><MdOutlineDirectionsBusFilled /> &nbsp;{vehicle}<br /> </span>

                <p className='mt-4'>To Do List</p>
                <span className='flex items-center font-bold'><MdOutlineControlPoint /> &nbsp;Hotel Booking<br /> </span>
                <span className='flex items-center font-bold'><MdOutlineControlPoint /> &nbsp;Ticket<br /> </span>

            </div>

            <div className='lg:w-[40%] h-full bg-white rounded-lg p-4'>
                <h1 className='text-xl font-bold'>Group Discussion</h1>
                <form>
                    <textarea className="textarea w-full h-32 border-[#aaa] focus:outline-none focus:border-primary mt-6" placeholder="Write Your Opinion"></textarea>
                    <button className='btn btn-sm btn-primary rounded-md mt-3 text-white normal-case'>Send</button>
                </form>
                {/* Discussion */}
                <div className='flex items-center my-4 rounded-md' >
                    <figure className='w-24'>
                        <img src={photoURL} alt={user} className="w-12 h-12 object-cover rounded-full" />
                    </figure>
                    <div className='ml-2'>
                        <h3 className='text-lg font-bold'>{user}</h3>
                        <p className="text-sm">{body}</p>
                    </div>
                </div>

            </div>

            <div className='lg:w-[30%] h-full bg-white rounded-lg p-4'>
                {/* Notes reading */}
                <h2 className='text-xl font-bold mb-3'>Important Notes</h2>
                <label htmlFor="notes-modal" className="text-primary cursor-pointer">1. What to Take</label><br/>
                <label htmlFor="notes-modal" className="text-primary cursor-pointer">2. Important Notice</label>
                <NotesModal />
                
                {/* adding notes */}
                <label htmlFor="addNotes-modal" className='btn btn-sm btn-outline rounded-md normal-case mt-4'>Add Notes +</label>
                <AddNotesModal />

                {/* tourmates */}
                <h1 className='text-xl font-bold mt-6 mb-3'>Your Tour Mates</h1>
                <div>
                    {members.map(member => <MemberCard key={member.id} member={member} />)}
                </div>
            </div>

        </section>
    )
}

export default GroupDetails
import React from 'react'
import SearchBar from '../../components/SearchBar'
import useTitle from '../../hooks/useTitle'
import GroupSideBanner from './components/GroupSideBanner'
import groupImg from '../../assets/images/tourObject.png'
import GroupCard from './components/GroupCard'



const TourGroups = () => {
    useTitle('Tour Groups')
  
    const searchBar = {
        image: groupImg,
        text: "Search Group with Place name",
        pHolder: "Where do you want to go"
    }
    const groups = [
        {
            "id": 1,
            "title": "Tour to cox's Bazar",
            "startDate": "Nov 4, 2022",
            "returnDate": "Nov 7, 2022",
            "person": 12,
            "image": "https://awalkintheworld.com/wp-content/uploads/2020/10/people-relaxing-coxs-bazar-1024x576.jpg"
        },
        {
            "id": 2,
            "title": "Tour to Sajek",
            "startDate": "Nov 4, 2022",
            "returnDate": "Nov 7, 2022",
            "person": 12,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/1200px-Sajek_Valley_2.jpg"
        },
        {
            "id": 3,
            "title": "Tour to Sundarban",
            "startDate": "Nov 4, 2022",
            "returnDate": "Nov 7, 2022",
            "person": 12,
            "image": "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/4493146_Sundarbans%20Royal%20Bengal%20Tiger.jpg",
        },
        {
            "id": 4,
            "title": "Tour to Bandarban",
            "startDate": "Nov 4, 2022",
            "returnDate": "Nov 7, 2022",
            "person": 12,
            "image": "https://i.pinimg.com/originals/2e/82/32/2e8232edb7980535819fb00afc168ce7.jpg"
        }
    ]
    return (
        <section className='lg:max-w-[1250px] mx-auto px-5 flex lg:flex-row flex-col mt-12'>
            <div className='lg:w-1/3'>
                <GroupSideBanner />
            </div>
            <div className='lg:w-2/3 px-6'>
                <SearchBar searchBar={searchBar} />
                
                {/* group card */}
                <div className='grid lg:grid-cols-2 gap-4 mt-16'>
                    {
                        groups.map(group => <GroupCard key={group.id} group={group} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default TourGroups
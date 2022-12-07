import React from 'react'
import useTitle from '../../hooks/useTitle'
import BlogCard from './components/BlogCard'
import tourObject from '../../assets/images/tourObject2.png'

const Blogs = () => {
    useTitle('Blogs')
    const blogs = [
        {
            "id": 1,
            "title": "How to go on a Jhakkas Tour",
            "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image": "https://blog.daraz.com.bd/wp-content/uploads/2019/12/Tours-and-Travel.jpg",
            "author": "Mona Mia",
        },
        {
            "id": 2,
            "title": "How you can go cox's Bazar in 5 hours",
            "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image": "https://www.travelandleisure.com/thmb/X5vzYNuggUjin3dSVv-uRwPzRkY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-tour-operator-quasar-expeditions-00-TOUROPSWB21-0defe953c1504cc68df94708707d5535.jpg",
            "author": "Rumel Kabir",
        },
        {
            "id": 3,
            "title": "Low cost tour you can afford easily",
            "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image": "https://img.traveltriangle.com/attachments/destinations/57/original/Thailand_1489647774.jpg",
            "author": "Sobuj Ahmed",
        },
    ]
    return (
        <section className='lg:max-w-[80%] mx-auto px-5'>

            {/* Heading of the Blog Page */}

            <div className='flex items-center lg:flex-row md:flex-row flex-col mb-6 mt-12'>
                <img src={tourObject} alt="" className='lg:h-36 md:h-24 h-16' />
                <div>
                    <h2 className='text-2xl font-bold font-poppins mb-4'>Search Blogs</h2>
                    <form className='flex items-center'>
                        <input type="text" placeholder="Type Keyword" className="input input-bordered w-64 focus:outline-none" />
                        <button className="btn btn-primary -ml-4 ">Search</button>
                    </form>
                </div>
            </div>

            {/* Blog Cards */}

            <div className='grid lg:grid-cols-3 gap-6'>
              {
                  blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
              }
          </div>
        </section>
    )
}

export default Blogs
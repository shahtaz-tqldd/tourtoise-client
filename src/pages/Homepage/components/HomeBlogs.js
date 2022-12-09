import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import BlogCard from '../../Blogs/components/BlogCard'

const HomeBlogs = () => {
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
      <div>
          <h1 className='text-3xl font-bold text-center mb-2'>Read Tour Blogs</h1>
          <p className='text-center mb-12'>Read your favourite blogs from professional tourist</p>
          <div className='grid lg:grid-cols-3 gap-6'>
              {
                  blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
              }
          </div>
          <Link to='/blogs' className='flex items-center justify-end text-lg mt-12 text-primary font-bold hover:text-secondary transition duration-300'>Read More &nbsp;<BsArrowRight /></Link>
    </div>
  )
}

export default HomeBlogs
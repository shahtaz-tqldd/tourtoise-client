import React from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    const { title, body, image, author, id } = blog
    return (
        <Link to={`/blogs/${id}`}>
            <div className="card card-compact bg-base-100 hover:bg-[#FFCAC8] transition duration-300 hover:shadow-xl">
                <figure><img src={image} alt={title} className="h-56 w-full object-cover" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body.slice(0, 120)}</p>
                    <div className="flex justify-between mt-3">
                        <p className="flex items-center font-bold text-success gap-2">< BsPencilSquare className='text-lg' />{author}</p>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard
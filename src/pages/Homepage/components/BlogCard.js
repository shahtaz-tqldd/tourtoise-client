import React from 'react'
import { TfiPencilAlt } from 'react-icons/tfi'

const BlogCard = ({ blog }) => {
    const {title, body, image, author} = blog
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt={title} className="h-56 w-full object-cover"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body.slice(0, 120)}</p>
                <div className="flex justify-between">
                    <p className="flex items-center font-bold">< TfiPencilAlt className='font-bold text-lg text-primary mr-2'/>{author}</p>
                    <button className="btn btn-primary btn-sm normal-case text-white rounded">Read Details</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
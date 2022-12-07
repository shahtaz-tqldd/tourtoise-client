import React from 'react'

const BlogCard = ({ blog }) => {
    const {title, body, image, author} = blog
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt={title} className="h-56 w-full object-cover"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body.slice(0, 120)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm normal-case text-white rounded">Read Details</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
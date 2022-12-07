import React from 'react'

const CommentCard = ({ comment }) => {
    const {user, photoURL, comment:body} = comment
    return (
        <div className='flex items-center my-4 bg-white p-4 rounded-md' >
            <figure>
                <img src={photoURL} alt={user} className="w-12 h-12 object-cover rounded-full" />
            </figure>
            <div className='ml-2'>
                <h3 className='text-lg font-bold'>{user}</h3>
                <p className="text-sm">{body}</p>
            </div>
        </div>
    )
}

export default CommentCard
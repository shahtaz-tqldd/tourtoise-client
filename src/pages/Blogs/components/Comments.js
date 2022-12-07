import React from 'react'
import CommentCard from './CommentCard'

const Comments = () => {
    const comments = [
        {
            "user": "Kritika Emam",
            "photoURL": "https://st4.depositphotos.com/5586578/21657/i/600/depositphotos_216576058-stock-photo-facial-expression-happy-smiling-joyful.jpg",
            "comment": "Nice write up man, keep it up. This is quite great and I love to go there soon"
        },
        {
            "user": "Nimoy Urisan",
            "photoURL": "https://media.istockphoto.com/id/1265576293/photo/studio-portrait-of-44-year-old-mixed-race-man-in-t-shirt.jpg?s=612x612&w=0&k=20&c=LPERsHfaHj90SUHMvAZ6u-Cu8AYFur4QvkHqQVb8kgk=",
            "comment": "Awesome place to. I went there few months before and it was wow! Can't wait to go again. Some day!"
        }
    ]
    return (
        <div>
            {comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
        </div>
    )
}

export default Comments
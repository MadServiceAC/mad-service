import React from 'react'
import CommentCard from './CommentCard'
import minidata from '../minidata'

const CommentSection = () => {
  return (
    <section className="lg:my-16">
      <div className="max-w-screen-xl mx-auto">
        {minidata.comments.map((comment, index) => (
          <CommentCard
            key={index}
            user={comment.user}
            date={comment.date}
            comment={comment.comment}
            likes={comment.likes}
            replies={comment.replies}
          />
        ))}
      </div>
    </section>
  )
}

export default CommentSection

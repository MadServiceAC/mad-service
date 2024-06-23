import React from 'react'
import PropTypes from 'prop-types'

const CommentCard = ({ user, date, comment, likes, replies }) => {
  return (
    <div className="p-4 my-4">
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-gray-600 mr-4 p-1">
            <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        </div>
        <div>
          <p className="font-bold">{user}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      <p className="mb-4 bg-white px-6 py-4">{comment}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <button className="mr-4">1 Komentar</button>
        <button className="mr-4 group flex items-center justify-between gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
            </svg>
            Suka {likes}
        </button>
        <button className='group flex items-center justidy-between gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
            Balas
        </button>
      </div>
      {replies && replies.length > 0 && (
        <div className="ml-8 mt-4">
          {replies.map((reply, index) => (
            <CommentCard
              key={index}
              user={reply.user}
              date={reply.date}
              comment={reply.comment}
              likes={reply.likes}
              replies={reply.replies}
            />
          ))}
        </div>
      )}
    </div>
  )
}

CommentCard.propTypes = {
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  replies: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      replies: PropTypes.array,
    })
  ),
}

export default CommentCard

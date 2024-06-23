import React, { useState } from 'react'

const CommentInput = ({ onSend }) => {
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSend(comment)
      setComment('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center py-2">
      <div className='bg-gray-700 p-2 rounded-full items-center flex mr-1'>
        <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        </div>
        <div className='bg-white border shadow-md w-full flex'>
        <input
            type="text"
            placeholder="Tambahkan Komentar"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-grow px-4 py-2 border-none focus:outline-none "
          />
          <button type="button" className="p-2 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>
          </button>
          <button type="submit" className="bg-blue-500 text-white px-8 py-4 rounded-md">
            Kirim
          </button>
        </div>
    </form>
  )
}

export default CommentInput

import React, {useState} from "react"
import CommentInput from './CommentInput'

const CommentInputHandler = () => {
    const [comments, setComments] = useState([])

    const handleSend = (newComment) => {
      setComments([...comments, newComment])
    }

    return(
        <div className="p-4">
      <CommentInput onSend={handleSend} />
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-2 rounded-lg shadow-sm">
            {comment}
          </div>
        ))}
      </div>
    </div>
    )
}

export default CommentInputHandler
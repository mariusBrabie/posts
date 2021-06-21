import React from 'react'

const Post = ({ id, title, body }) => {
  return (
    <div className='post'>
      <p>
        <b>
          {id}. {title}
        </b>
      </p>
      <p>{body}</p>
    </div>
  )
}

export default Post

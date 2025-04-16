import React from 'react'

const Post = ({post}) => {
  return (
    <div>
        <h6>{post.title}</h6>
        <p>{post.body}</p>
    </div>
  )
}

export default Post
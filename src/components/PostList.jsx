import React from 'react'
import Post from './Post'

const PostList = ({posts}) => {

    let new_posts = posts.map(post => {
        return (
            <Post key={post.id} post={post}/>
        )
    })
    
  return (
    <div>
        <h3 className='post-title'>PostList</h3>
        <div className='posts-wrapper'>
            {new_posts}
        </div>
    </div>
  )
}

export default PostList
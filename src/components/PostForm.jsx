import React from 'react'
import Navbar from './Navbar'

const PostForm = () => {
  return (
    <>
    <Navbar />
    <div className='post-form'>
        <div className='form'>
        <h2>Add New Post</h2>
        <form>
            <input type="text"  placeholder='Enter posts title..'/>
            <input type="text" placeholder='Enter post body'/>
            <input type='submit'/>
        </form>
        </div>
        
    </div>
    </>
    
  )
}

export default PostForm
import React from 'react'

function Post(props) {
  return (
    <div className='border-2 rounded-xl h-60 px-12 pb-12'>
      <div className='h-1/2 flex justify-center text-center'>
        post img {props.img}
      </div>
      <div className='h-1/2 text-left'>
        post text
      </div>
    </div>
  )
}

export default Post;
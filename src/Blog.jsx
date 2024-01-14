import React from 'react'
import Post from './Post';

export default function Blog() {
  return (
    <>
    <div className='mt-20'>
        <h1 className='text-3xl'>Blog</h1>
    </div>

    <div className='mt-8 self-center w-3/4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
    </>
  )
}

import React from 'react';
import UseUserProfile from './User.js'
import UsePosts from './PostCard.js';

const UseCreateCard = () => {
  return (
    <div className='max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0'>
      <div className='w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0' >
        <UseUserProfile />
      </div>
      <div className='w-full lg:w-2/5 mx-6 lg:mx-0 h-screen py-12'>
        <UsePosts />
      </div>
    </div>
  )
}

export default UseCreateCard
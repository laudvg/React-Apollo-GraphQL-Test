import React from 'react';
import UseUserProfile from '../components_lau/User'
import UsePosts from '../components_lau/PostCard';

const UseCreateCard = () => {
  return (
    <div>
      <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div>
          <UseUserProfile class="p-4 md:p-12 text-center lg:text-left"/>
        </div>
        <div class="w-full lg:w-2/5 mx-6 lg:mx-0 h-screen py-12">
          <UsePosts/>
        </div>
      </div>
    </div>
  )
}

export default UseCreateCard
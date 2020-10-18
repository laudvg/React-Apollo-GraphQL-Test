import React from 'react';
import UseUserProfile from '../components_lau/User'
import UsePosts from '../components_lau/PostCard';

const UseCreateCard = () => {
  return (

      
      <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">{/* va hace el flex */}

        <div 	class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0" >
          <UseUserProfile/>
        </div>

        <div class="w-full lg:w-2/5 mx-6 lg:mx-0 h-screen py-12">
          <UsePosts class="w-full rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 px-12 h-full overflow-auto"/>
        </div>

      </div>

  )
}

export default UseCreateCard
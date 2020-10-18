import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_POSTS} from '../services/apiQueries.js';
import ErrorComponent from './Error'
import Loading from './Loading.js';


const UseCreatePostcard = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
 
  if (loading) return <Loading/>;
  if (error) return <ErrorComponent/>;

  return(
    <div className="w-full rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 px-12 h-full overflow-auto">
      <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start mt-4">{data.user.name}'s Posts:</p>
      <ul>
        {data.user.posts.data.map(({title, id}) => (
          <li className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start" key={id}>Title: {title}</li>
        ))}
      </ul>
    </div>
  )

}

export default UseCreatePostcard;

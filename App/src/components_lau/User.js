import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../services/apiQueries.js';
import ErrorComponent from './Error'
import Loading from './Loading.js';

const UseUserProfile = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  return (
    <div id="profile"class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
      
      <div class="p-4 md:p-12 text-center lg:text-left">
        <h1 className="text-3xl font-bold pt-8 lg:pt-0">{data.user.name}</h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
        <div>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Address:</p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{data.user.address.street},{data.user.address.suite},{data.user.address.city}</p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Email:</p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{data.user.email}</p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Phone: </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{data.user.phone}</p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Company:</p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{data.user.company.name}</p>
        </div>
      </div>
      
    </div>
  )


}

export default UseUserProfile;

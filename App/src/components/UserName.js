import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../services/apiQueries.js';
import ErrorComponent from './Error'
import Loading from './Loading.js';

const UseUserName = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  return (
    <div>
      <p className='pt-4 text-base font-bold flex items-center justify-center lg:justify-start mt-4'>{data.user.name}'s Posts:</p>
    </div>
  )

}

export default UseUserName;
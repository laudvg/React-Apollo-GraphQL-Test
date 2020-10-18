import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loading from './Loading'
import ErrorComponent from './ErrorComponent'
import CardLayout from './CardLayout'

const GET_USER = gql`
  {
    user(id: 1) {
      id
      name
    }
  }
`;

const ExampleComponent = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <Loading />;
  if (error) return <ErrorComponent error={error} />;

  return(
      <CardLayout>
          <>     
            <div className="text-gray-900 font-bold text-lg mb-6">Example of API usage</div>
            <div className="text-gray-900 text-md mb-6">ID: {data.user.id}</div>
            <div className="text-gray-900 text-md mb-6">Name: {data.user.name}</div>
          </>
      </CardLayout>
    
  )
}


export default ExampleComponent
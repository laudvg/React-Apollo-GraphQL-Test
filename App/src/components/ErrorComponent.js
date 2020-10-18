import React from 'react';
import CardLayout from './CardLayout'

const ErrorComponent = ({error}) => {
  return(
    <CardLayout>
        <>
          <div className="text-gray-900 font-bold text-4xl mb-12">Error 😢</div>
          <div className="text-gray-900 font-bold text-4xl mb-12">{error}</div>
        </>  
    </CardLayout>
  )
}


export default ErrorComponent
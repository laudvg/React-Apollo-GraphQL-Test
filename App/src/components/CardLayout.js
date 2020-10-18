import React from 'react';

const CardLayout = ({children}) => {
  return(
    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-12">
      <div className="bg-white flex flex-col justify-between leading-normal m-auto p-12">
        {children}
      </div>
    </div>  
  )
}

export default CardLayout
import React from 'react'

const BreadCrumbs:React.FC = () => {
  return (
    <div>
        <p className='font-medium text-sm text-[#696969] ml-2 sm:ml-6 lg:ml-0'>
            <span className='cursor-pointer hover:border-b border-black hover:text-black'> Women </span>
             / 
             <span className='cursor-pointer hover:border-b border-black hover:text-black'> Featured </span> 
             / 
             <span className='text-black'> New Arrival </span>
        </p>
    </div>
  )
}

export default BreadCrumbs
import React from 'react'

const CollectionHero:React.FC = () => {
  return (
    <div className='mt-6'>
      <p className='mb-6 font-medium text-lg md:text-2xl ml-2 sm:ml-6 lg:ml-0'>Women's New Arrivals</p>
      <div className='lg:flex lg:bg-[#F6F6F4] mb-5'>
        <img className='lg:w-1/2' src="https://media1.calvinklein.com/images/20241029/PLP/New_W_2x.webp" alt="" />
        <div className='lg:w-1/2 lg:flex flex-col justify-center items-center'>
            <div className='lg:w-[55%] lg:mt-0 lg:ml-0 mt-5 ml-2 sm:ml-6'>
              <h3 className='font-medium leading-[130%] text-xl lg:mb-0 mb-3 lg:text-3xl'>The Gift of New Arrivals</h3>
              <p className='text-[#666] font-medium text-[15px]'>For the winter wardrob e. Tailored outerwear, cozy sweaters and more.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionHero
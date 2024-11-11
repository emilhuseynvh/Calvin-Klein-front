import React from 'react'
interface itemType {
  item: any
}

const ShowcaseElement: React.FC<itemType> = ({ item }) => {
  const { name, img } = item
  return (
    <div className='relative w-1/2 md:w-1/4'>
      <img className='w-[496px] md:w-full md:h-auto' src={img} alt="Product image" />
      <p className='text-white text-[30px] lg:text-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{name}</p>
    </div>
  )
}

export default ShowcaseElement
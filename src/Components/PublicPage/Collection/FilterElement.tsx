import React from 'react'
import { GoChevronDown } from "react-icons/go";
import { PiSlidersHorizontal } from "react-icons/pi";

type props =  {
    item: string
}

const FilterElement:React.FC<props> = ({ item }) => {
  return (
    
    <div className='flex items-center cursor-pointer hover:border-black rounded-[50px] border border-[#ccc] mr-3 h-[37px] pl-4 pr-3'>
        <p className='font-medium text-[13px]'>{item}</p>
        <div className='pl-4'>
        {item === 'All Filters' ? <PiSlidersHorizontal className='size-5' /> :  <GoChevronDown className='size-5'  />}
        </div>
    </div>
  )
}

export default FilterElement
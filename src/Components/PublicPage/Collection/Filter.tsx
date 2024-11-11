import React, { useEffect, useState } from 'react'
import FilterElement from './FilterElement'
import { PiSlidersHorizontal } from "react-icons/pi";
import FilterModal from './FilterModal';

const filterElement: string[] = [
    'Category', 'Price', 'Color', 'Size', 'Collection', 'All Filters'
]

const Filter: React.FC = () => {
    const [filter, setFilter] = useState<any>(null);

    useEffect(() => {
        if (filter) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [filter])

    return (
        <div className='my-12 flex justify-between'>
            <div className='md:flex flex-wrap md:-order-1 order-1'>
                {filterElement.map((item, i) =>
                    <div onClick={() => setFilter(i)} className='mb-4 hidden md:block' key={i} >
                        <FilterElement item={item} />
                    </div>
                )}
                <div className='flex items-center gap-1.5 mr-4 sm:mr-2 md:hidden'>
                    <PiSlidersHorizontal className='size-5' />
                    <p className='text-base'>Filter & Sort</p>
                </div>
            </div>
            <div className='flex items-center'>
                <p className='pr-3 text-sm font-medium ml-2 sm:ml-6 lg:ml-0 text-[#696969] whitespace-nowrap'>347 Items</p>
                <p className='mr-3 text-[#ccc] font-medium lg:block hidden'>|</p>
                <p className='pr-3 text-[13px] font-medium md:block hidden text-[#696969] whitespace-nowrap'>Sort by</p>
                <div className='md:block hidden'>
                    <FilterElement item="Featured" />
                </div>
            </div>

            <div className={`${filter ? 'hidden md:block' : 'hidden'} bg-black opacity-50 fixed w-screen h-screen left-0 top-0 z-10`}></div>
                <FilterModal setFilter={setFilter} filter={filter} />
        </div>
    )
}

export default Filter
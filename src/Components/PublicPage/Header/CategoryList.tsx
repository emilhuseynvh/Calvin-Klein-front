import React, { CSSProperties } from 'react'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineChevronRight } from "react-icons/md";

interface categoryProps {
    setCategory: (value: boolean) => void
}



const subCategory: string[] = ['Campaigns', 'Women', 'Men', 'Underwear', 'Calvin Klein Studio']

const CategoryList: React.FC<categoryProps> = ({ setCategory }) => {
    return (
        <div className='bg-black w-screen lg:w-[70vw] h-screen relative text-white py-[120px] pl-6 px-20'>
            <IoMdClose className='absolute cursor-pointer right-8 top-8 size-6' onClick={() => setCategory(false)} />
            <p style={{ '--underline-color': '#fff' } as CSSProperties} className='text-[13px] group flex items-center cursor-pointer font-semibold text w-fit pl-1 leading-[22.5px] tracking-[.2px]'>
                Shop New
                <MdOutlineChevronRight className='group-hover:block hidden duration-300 size-6' />
            </p>
            <div className='mt-11 flex items-center justify-between'>
                <ul>
                    {subCategory.map((item, i) => <li className='my-8 font-medium w-fit text-[25px] cursor-pointer hover:border-b border-white leading-[22.5px]' key={i}>{item}</li>)}
                </ul>
                <ul>
                    {subCategory.map((item, i) => <li className='text-sm py-2 cursor-pointer' key={i}>{item}</li>)}
                </ul>
                <div className='w-[311px] h-[441px]'>
                    <img src="https://media1.calvinklein.com/images/20240924/Nav/FA24_BRAND_NJ_GROUP_SHOT-1_3_600GRACoL_4500x3393_2x.webp" alt="Pic" />
                    <p className='text-sm mt-1'>Discover the Campaign: NewJeans</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryList
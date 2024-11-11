import React from 'react'

const Hero: React.FC = () => {
    return (
        <div className='bg-home-bg pb-16'>
            <p className='text-center text-sm tracking-[.3rem] select-none mb-5 font-semibold text-home-text leading-9 uppercase'>Calvin Friends  &  Family</p>
            <div className='flex justify-center'>
                <div className='pr-[40px] md:pr-[60px] border-r flex flex-col items-center border-[#00000066]'>
                    <p className='select-none text-[25px]  md:text-[50px]'>40% Off</p>
                    <p className='select-none text-[15px] md:text-[22px] ml-7'>Sitewide*</p>
                </div>
                <div className='pl-[40px]  md:pl-[60px] flex flex-col items-center'>
                    <p className='select-none text-[25px]  md:text-[50px]'>30% Off</p>
                    <p className='select-none text-[15px] md:text-[22px]'>Underwear</p>
                </div>
            </div>
            <p className='text-center mt-7 text-sm tracking-[.3rem] mb-5 font-medium text-home-text leading-8 uppercase'>+ Extra 20% off Sale Styles</p>
            <div className='flex justify-center pt-7 text-xs md:text-base'>
                <p className='px-1 md:px-2 mx-2 md:mx-4 whitespace-nowrap pb-1 font-medium border-b border-[#00000066] hover:border-black cursor-pointer'>Shop Women</p>
                <p className='px-1 md:px-2 mx-2 md:mx-4 whitespace-nowrap pb-1 font-medium border-b border-[#00000066] hover:border-black cursor-pointer'>Shop Men</p>
                <p className='px-1 md:px-2 mx-2 md:mx-4 whitespace-nowrap pb-1 font-medium border-b border-[#00000066] hover:border-black cursor-pointer'>Shop Underwear</p>
                <p className='px-1 md:px-2 mx-2 md:mx-4 whitespace-nowrap pb-1 font-medium border-b border-[#00000066] hover:border-black cursor-pointer'>Shop Sale</p>
            </div>
        </div>
    )
}

export default Hero
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';

interface BasketProps {
    setBasket: (value: boolean) => void
}

const MiniCart: React.FC<BasketProps> = ({ setBasket }) => {
    const [isScreenSmall, setIsScreenSmall] = useState<boolean>(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={`${isScreenSmall ? 'w-screen' : 'block w-[504px]'} p-10 bg-black h-screen text-white`}>
            <IoMdClose className='absolute cursor-pointer right-6 top-10 size-6' onClick={() => setBasket(false)} />
            <h2 className='text-2xl font-medium'>Shopping Bag</h2>
            <div className='my-10'>
                <p className='text-[15px] font-medium tracking-[.2px] leading-[22.5px]'>You have no items in your bag.</p>
            </div>
            <div className='py-6 px-10 absolute left-0 bottom-0 h-[210px] border-t w-full border-[#696969]'>
                <div className='flex justify-between mb-6'>
                    <div className='flex'>
                        <p className='text-[15px] font-medium tracking-[.2px] leading-[22.5px] mr-3'>Subtotal</p>
                        <p className='text-grey_ text-[15px] font-medium tracking-[.2px] leading-[22.5px]'>0 items</p>
                    </div>
                    <p className='text-[15px] font-medium tracking-[.2px] leading-[22.5px]'>$0</p>
                </div>
                <button className='text-[#CCCCCC] w-full mb-6 bg-[#fff] h-14'>Review + Checkout</button>
                <p className='text-center text-[13px] font-medium cursor-default tracking-[.2px] leading-[22.5px]'>Shipping & Taxes Calculated at Checkout</p>
            </div>
        </div>
    )
}

export default MiniCart
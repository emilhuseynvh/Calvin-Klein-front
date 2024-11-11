import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

interface setFilterProps {
    setFilter: any,
    filter: any
}

const FilterModal: React.FC<setFilterProps> = ({ setFilter, filter }) => {
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
        <div className={`fixed top-0 ${filter ? 'right-0' : '-right-full'} z-40 h-full ${isScreenSmall ? 'w-screen' : 'w-[504px]'} duration-300 bg-white px-10 py-12`}>
            <p className='text-[15px] font-normal'>Filter</p>
            <IoMdClose className='absolute cursor-pointer right-6 top-10 size-6' onClick={() => setFilter(false)} />
        </div>
    )
}

export default FilterModal

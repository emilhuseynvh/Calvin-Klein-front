import React, { useEffect, useState } from 'react'
import { IoMdClose, IoMdStar } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

interface Product {
    img: string,
    price: string,
    testimonials: string,
    name: string
}

const popular: string[] = [
    'New Arrivals',
    'Women’s Bras',
    'Men’s Underwear',
    'Women’s Outerwear',
    'Men’s Tops',
]

const product: Product[] = [
    {
        img: 'https://calvinklein.scene7.com/is/image/CalvinKlein/13400325_421_main',
        price: '53.40',
        testimonials: '6',
        name: 'Smooth Cotton Sweater'
    },
    {
        img: 'https://calvinklein.scene7.com/is/image/CalvinKlein/52005650_001_main',
        price: '28.00',
        testimonials: '254',
        name: 'Modern Cotton Lightly Lined Triangle Bralette'
    },
    {
        img: 'https://calvinklein.scene7.com/is/image/CalvinKlein/62023956_001_main',
        price: '38.15',
        testimonials: '1',
        name: 'Smooth Cotton Sweater'
    },

]

interface SearchProps {
    setSearch: (value: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
    const [clear, setClear] = useState<string>('')
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
        <div className={`bg-black  ${isScreenSmall ? 'w-screen' : 'w-[500px]'} h-full text-white p-10`}>
            <IoMdClose className='absolute cursor-pointer right-6 top-10 size-6' onClick={() => setSearch(false)} />
            <div className='flex items-center'>
                <IoSearch className='size-6 mr-2' />
                <input onChange={(e) => setClear(e.target.value)} value={clear} className='bg-transparent outline-none placeholder-grey_ w-[330px]' type="text" placeholder='What are you looking for...' />
                <span onClick={() => setClear('')} className={`${clear ? 'block' : 'hidden'} ml-2 text-grey_ text-xs cursor-pointer mr-6`}>Clear</span>
            </div>
            <p className='text-grey_ mt-10'>Popular Categories</p>
            <ul>
                {popular.map((item, i) => <li className='pt-5 font-medium text-[13px] cursor-pointer w-fit leading-[13px] hover:border-b border-white' key={i}>{item}</li>)}
            </ul>
            <p className='text-grey_ mt-11 text-[15px]'>Top Results for Men’s Tops</p>
            <div className='grid grid-cols-2 gap-8 mt-11'>
                {product.map((item, i) => {
                    const { name, img, testimonials, price } = item
                    return (
                        <div key={i}>
                            <img src={img} alt={name} />
                            <p className='text-grey_ hover:text-white font-semibold text-[13px] mt-2 cursor-pointer'>{name}</p>
                            <p className='text-[13px] mt-1 font-semibold'>${price}</p>
                            <div className='flex items-center'>
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <p className='ml-1 text-[12px] font-semibold text-grey_'>({testimonials})</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search
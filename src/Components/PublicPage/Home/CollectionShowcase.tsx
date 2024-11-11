import React from 'react'
import ShowcaseElement from './ShowcaseElement'
import { MdArrowOutward } from "react-icons/md";

interface Product {
    img: string;
    name: string;
}

interface MainProduct {
    titleFirst: string;
    titleSecond?: string;
    descFirst: string;
    descSecond?: string;
    images: string[];
}

const products: Product[] = [
    {
        img: 'assets/img/coats.webp',
        name: 'Coats',
    },
    {
        img: 'assets/img/duffers.webp',
        name: 'Puffers',
    },
    {
        img: 'assets/img/bombers.webp',
        name: 'Bombers',
    },
    {
        img: 'assets/img/jackets.webp',
        name: 'Jackets',
    }
]

const mainProducts: MainProduct[] = [
    {
        titleFirst: 'Sweaters of the',
        titleSecond: 'Season',
        descFirst: 'Refined layers in premium loft yarns and compact cottons with',
        descSecond: 'a lustrous look.',
        images: [
            'assets/img/sweaters.webp',
            'assets/img/sweatersx.webp',
            'assets/img/sweatersw.webp'
        ]
    },
    {
        titleFirst: 'New Underwear',
        descFirst: 'Slip into sensual lace and satin. Revealing, yet supportive in 100% silk.',
        descSecond: 'a lustrous look.',
        images: [
            'assets/img/underwear.webp',
            'assets/img/underwearm.webp',
            'assets/img/underwear.webp'
        ]
    }
]

const CollectionShowcase: React.FC = () => {
    return (
        <>
            <div className='flex flex-wrap'>
                {products.map((item, i) => (
                    <ShowcaseElement key={i} item={item} />
                ))}
            </div>

            {mainProducts.map((item, i) => (
                <div key={i} className='md:flex block relative'>
                    <img className='md:w-1/2 w-full' src={item.images[0]} alt="Sweaters" />
                    <div className='flex'>
                        <img className='md:hidden block w-1/2 object-cover' src={item.images[2]} alt="Sweaters" />
                        <img className='w-1/2 md:w-full object-cover' src={item.images[1]} alt="Sweaters" />
                    </div>
                    <div className='absolute left-2 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2'>
                        <h2 className='md:text-[60px] text-[40px] lg:text-[80px] font-klein md:text-center font-medium text-white leading-10 md:leading-[85px]'>
                            {item.titleFirst} <br tabIndex={-1} aria-hidden={true} className='md:block hidden leading-[88px]' role='presentation' />
                            {item.titleSecond}
                        </h2>
                        <p className='text-white md:text-center mt-4 text-base md:text-lg md:opacity-80 font-normal'>
                            {item.descFirst} <br className='md:block hidden' />
                            {item.descSecond}
                        </p>
                    </div>
                    <div className='flex absolute items-center gap-2.5 cursor-pointer text-white bottom-3 left-1/4 -translate-x-1/2'>
                        <MdArrowOutward className='w-5 h-5 md:hidden block' />
                        <p className='md:border-b border-white'>Women</p>
                    </div>
                    <div className='flex absolute items-center cursor-pointer gap-2.5 text-white bottom-3 right-1/4 translate-x-1/2'>
                        <MdArrowOutward className='w-5 h-5 md:hidden block' />
                        <p className='md:border-b border-white'>Men</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CollectionShowcase

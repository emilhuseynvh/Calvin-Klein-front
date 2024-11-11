import React from 'react'
interface Categories {
    name: string,
    list: string[]
}

const categories: Categories[] = [
    {
        name: 'Women',
        list: [
            'New Arrivals',
            'Fleece',
            'Denim',
            'Tops'
        ]
    },
    {
        name: 'Men',
        list: [
            'New Arrivals',
            'Fleece',
            'Denim',
            'Tops'
        ]
    },
    {
        name: 'Campaigns',
        list: [
            'Kendal Jenner',
            'Alexander SkarsGard',
            'Allen White',
        ]
    }
]

const Subcategories: React.FC = () => {
    return (
        <div className='md:px-28 md:py-28 px-14 py-14 w-full text-center'>
            <div className='flex justify-center gap-8 h-auto'>
                {categories.map((item, i) => <p className={`${i === 0 ? 'opacity-100 border-b' : 'opacity-40'} hover:border-b border-black hover:opacity-100 h-auto cursor-pointer`} key={i}>{item.name}</p>)}
            </div>
            <ul className='md:flex justify-center mt-12'>
                {categories[0].list.map((item, i) => {
                    return (
                        <li className='text-[40px] lg:text-[48px] whitespace-nowrap  md:mx-[20px] lg:mx-[30px] mb-[40px] cursor-pointer md:hover:border-b-4 border-black' key={i}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Subcategories
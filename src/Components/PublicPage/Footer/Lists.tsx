import React, { useState, useEffect, CSSProperties } from 'react'
import { CiChat2 } from "react-icons/ci";
import { ReactNode } from 'react';
import SubscribeSection from './SubscribeSection';

const option: string[] = [
    'Promotions',
    'Gift Cards',
    'Stores',
    'Store Directory',
    'Preferred Loyalty Program',
    'Klarna',
    'Afterpay',
    '20% First Responder Discount',
    '25% Refer a Friend Discount'
]

interface StringElement {
    text: string;
}

interface IconElement {
    icon: ReactNode;
    text: string;
}

interface ListItem {
    title: string;
    element: (StringElement | IconElement)[];
}

interface About {
    title: string,
    element: string[]
}

const list: ListItem[] = [
    {
        title: 'Help',
        element: [
            { text: 'Customer Service' },
            { text: 'FAQs' },
            { text: 'Track Order' },
            { text: 'Returns' },
            { text: 'Shipping' },
            { text: 'Accessibility' },
        ]
    },
    {
        title: 'Contact us',
        element: [
            { text: 'Email' },
            { text: 'Call Us: 866.513.0513' },
            {
                icon: <CiChat2 className='w-5 h-5' />,
                text: 'Chat'
            }
        ]
    }
]

const about: About[] = [
    {
        title: 'About',
        element: [
            'About Calvin Klein',
            'Careers',
            'Privacy Commitment',
            'Sustainability + Inclusivity',

        ]
    },
    {
        title: 'Explore',
        element: [
            'Calvin Klein Jeans',
            '#MYCALVINS'
        ]
    }
]

const Lists: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='md:flex justify-between mt-20'>
            <ul>
                {option.map((item, i) => (
                    <li
                        style={{ '--underline-color': '#fff' } as CSSProperties}
                        className={`pt-5 md:pt-2.5 pb-2.5 px-1.5 md:border-none border-t border-[#696969] md:w-fit font-medium text-[15px] cursor-pointer ${!isMobile ? 'text' : ''}`}
                        key={i}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <ul>
                <div className='md:block flex justify-between md:mt-0 mt-10'>
                    {list.map((item, i) => (
                        <div className='' key={i}>
                            <h4 className='px-1.5'>{item.title}</h4>
                            <ul>
                                {item.element.map((element, ind) => (
                                    <li key={ind}
                                        style={{ '--underline-color': '#808080' } as CSSProperties}
                                        className={`pt-5  flex items-center gap-2 md:pt-2.5 pb-2.5 px-1.5 text-[#808080] md:w-fit font-medium text-[15px] cursor-pointer ${!isMobile && 'text'}`}>
                                        {('icon' in element && element.icon) && (
                                            <span>{element.icon}</span>
                                        )}
                                        <span className='inline'>{element.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </ul>
            <div className='hidden flex-col gap-10 md:flex'>
                {about.map((item, i) => {
                    return (
                        <div key={i}>
                            <h4 className='px-1.5'>{item.title}</h4>
                            <ul>
                                {item.element.map((list, ind) => <li style={{ '--underline-color': '#808080' } as CSSProperties}
                                    className={`pt-5  flex items-center gap-2 md:pt-2.5 pb-2.5 px-1.5 text-[#808080] md:w-fit font-medium text-[15px] cursor-pointer ${!isMobile && 'text'}`} key={ind}>{list}</li>)}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <SubscribeSection />
        </div>
    )
}

export default Lists

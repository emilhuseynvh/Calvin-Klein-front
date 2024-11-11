import React, { CSSProperties, useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Search from '../Search';
import MiniCart from '../Cart/MiniCart';
import CategoryList from './CategoryList';
import Login from './Login';

const list: string[] = ['New', 'Women', 'Underwear', 'Kids', 'Home', 'Sale'];

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [exit, setExit] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const [basket, setBasket] = useState<boolean>(false);
    const [category, setCategory] = useState<boolean>(false)
    const [login, setLogin] = useState<boolean>(false)
    const [location, setLocation] = useState<boolean>(false)

    const handleClick = () => {
        setExit(!exit);
    };

    useEffect(() => {
        window.location.pathname === '/' ? setLocation(true) : setLocation(false)
    }, [window.location.pathname])

    useEffect(() => {
        if (search || basket || login || category) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [search, basket, category, login]);

    return (
        <>
            <div className={`${location ? 'hidden' : 'flex'}  justify-center items-center bg-black text-white absolute top-0 left-0 w-full h-[42px]`}>
                <p className='md:text-sm text-xs md:mx-0 mx-2 tracking-[.6px] whitespace-normal text-center'>Extra 20% off Sale Styles <span className='underline'>Women's Sale Men's Sale</span> | Free shipping on $75+ <span className='underline'>Details</span></p>
            </div>
            <header className={`${location ? 'bg-home-bg' : 'bg-white mt-7'} py-7`}>
                <div onClick={handleClick} className={`${exit ? 'block' : 'hidden'} border border-black h-screen w-screen absolute top-0 left-0`}></div>
                <div className='w-[95%] mx-auto flex items-center justify-between'>
                    <ul className='text-home-text lg:flex hidden gap-2 text-sm w-1/3 font-semibold'>
                        {list.map((item, i) => (
                            <li
                                onClick={() => setCategory(!category)}
                                key={i}
                                style={{ '--underline-color': category ? '#fff' : '#4E2526' } as CSSProperties}
                                className={`px-2 relative z-40 cursor-pointer text ${category ? 'text-white' : ''}`}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className='lg:w-1/3 flex justify-center'>
                        <img onClick={() => navigate('/')} className='select-none cursor-pointer' src="assets/img/logo.svg" alt="Logo" />
                    </div>
                    <div className='lg:w-1/3 flex justify-end'>
                        <div className='flex items-center'>
                            <IoSearch onClick={() => setSearch(!search)} className='text-home-text w-6 h-6 mx-2 cursor-pointer' />
                            <div className='relative z-10'>
                                <svg onClick={() => setExit(!exit)} className='relative ml-3.5 mr-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 20C5 17.5 7 15.6 9.4 15.6H14.5C17 15.6 18.9 17.6 18.9 20" stroke="#4E2526" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 8.99999 11.2C7.39999 9.5 7.29999 6.8 8.99999 5.2C10.7 3.6 13.3 3.6 15 5.2" stroke="#4E2526" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <ul className={`${exit ? 'flex' : 'hidden'} bg-black absolute flex-col top-9 -left-[120px] lg:-left-24 p-6 text-white w-[200px] text-[13px]`}>
                                    <li onClick={() => { setExit(false); setLogin(true) }} style={{ '--underline-color': '#fff' } as CSSProperties} className='pl-1 py-1 w-[52px] text cursor-pointer'>Sign In</li>
                                    <li onClick={() => { setExit(false); navigate('/createaccount') }} style={{ '--underline-color': '#fff' } as CSSProperties} className='pl-1 py-1 w-[108px] text cursor-pointer'>Create Account</li>
                                    <li onClick={() => setExit(false)} style={{ '--underline-color': '#fff' } as CSSProperties} className='pl-1 py-1 w-[84px] text cursor-pointer'>Track Order</li>
                                </ul>
                            </div>
                            <svg onClick={() => setBasket(!basket)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M17.84 21H6.16C4.995 21 4.077 20.008 4.166 18.847L4.929 8.924C4.969 8.402 5.403 8 5.926 8H18.074C18.597 8 19.031 8.402 19.071 8.923L19.834 18.846C19.924 20.008 19.005 21 17.84 21V21Z" stroke="#4e2526" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 8V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V8" stroke="#4e2526" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    </div>
                </div>
                <div onClick={() => setSearch(false)} className={`${search ? 'block' : 'hidden'} bg-white opacity-60 fixed w-screen h-screen left-0 top-0 z-10`}></div>
                <div className={`fixed z-40 h-screen overflow-y-auto top-0 right-0 ${search ? 'translate-x-0' : 'translate-x-full'} duration-300`}>
                    <div className='overflow-y-auto'>
                        <Search setSearch={setSearch} />
                    </div>
                </div>

                <div onClick={() => setSearch(false)} className={`${basket ? 'block' : 'hidden'} bg-white opacity-60 fixed w-screen h-screen left-0 top-0 z-10`}></div>
                <div className='overflow-y-auto'>
                    <div className={`fixed z-40 h-screen overflow-y-auto top-0 right-0 ${basket ? 'translate-x-0' : 'translate-x-full'} duration-300`}>
                        <MiniCart setBasket={setBasket} />
                    </div>
                </div>

                <div onClick={() => setCategory(false)} className={`${category ? 'hidden md:block' : 'hidden'} bg-white opacity-60 fixed w-screen h-screen left-0 top-0 z-10`}></div>
                <div className='overflow-y-auto'>
                    <div className={`fixed z-30 h-screen overflow-y-auto top-0 left-0 ${category ? 'translate-x-0' : '-translate-x-full'} hidden md:block duration-300`}>
                        <CategoryList setCategory={setCategory} />
                    </div>
                </div>

                <div onClick={() => setLogin(false)} className={`${login ? 'hidden md:block' : 'hidden'} bg-black opacity-50 fixed w-screen h-screen left-0 top-0 z-10`}></div>
                <div className='overflow-y-auto'>
                    <div className={`fixed z-30 h-screen overflow-y-auto top-0 right-0 ${login ? 'translate-x-0' : 'translate-x-full'} md:block duration-300`}>
                        <Login setLogin={setLogin} />
                    </div>
                </div>


            </header >
        </>
    );
};

export default Header;

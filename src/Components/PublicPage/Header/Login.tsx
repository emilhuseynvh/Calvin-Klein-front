import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Input from '../Input';

interface LoginProps {
    setLogin: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setLogin }) => {
    const [isScreenSmall, setIsScreenSmall] = useState<boolean>(window.innerWidth < 500);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ email: string; password: string }>({ email: '', password: '' });


    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const validateForm = () => {
        let emailError = '';
        let passwordError = '';
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            emailError = 'Email is required';
        } else if (!emailPattern.test(email)) {
            emailError = 'Invalid email format';
        }

        if (!password) {
            passwordError = 'Password is required';
        }

        setErrors({ email: emailError, password: passwordError });

        return !emailError && !passwordError;
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form is valid:', { email, password });
        }
    };

    return (
        <div className={`${isScreenSmall ? 'w-screen' : 'block w-[504px]'} flex flex-col justify-center bg-white h-screen p-10`}>
            <IoMdClose className='absolute cursor-pointer right-6 top-10 size-6' onClick={() => setLogin(false)} />
            <p className='text-3xl text-black font-medium leading-[40px] mb-2 pl-1'>Sign in</p>

            <form onSubmit={handleSubmit}>
                <Input name='email' type='text' label='Email*' value={email} onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

                <Input
                    id='password'
                    name='password'
                    type='password'
                    label='Password*'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isPassword={true}
                />
                {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}

                <div className='flex items-center justify-between my-3'>
                    <div className='flex gap-2 items-center text-[13px] text-[#696969]'>
                        <input type="checkbox" className='rounded-sm cursor-pointer size-4 border-[#696969]' />
                        <p className='text-sm'>Remember me</p>
                    </div>
                    <p className='cursor-pointer text-sm font-medium leading-[13px] w-fit text-[#696969] hover:text-black border-b hover:border-black border-[#696969]'>Forgot Password</p>
                </div>

                <button type='submit' className='bg-black select-none text-white w-full h-14 py-2 px-4 rounded-sm mt-4'>Submit</button>
            </form>
        </div>
    );
};

export default Login;

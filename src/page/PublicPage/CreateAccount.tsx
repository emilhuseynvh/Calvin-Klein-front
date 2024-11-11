import React, { useState } from 'react'
import Input from '../../Components/PublicPage/Input'

interface Errors {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
}

const CreateAccount: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errors, setErrors] = useState<Errors>({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
    const [touched, setTouched] = useState({
        first_name: false,
        last_name: false,
        email: false,
        password: false,
    });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    const handleBlur = (field: keyof Errors) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        validateField(field);
    };

    const handleChange = (field: keyof Errors, value: string) => {
        if (field === 'first_name') setFirstName(value);
        if (field === 'last_name') setLastName(value);
        if (field === 'email') setEmail(value);
        if (field === 'password') setPassword(value);

        if (errors[field]) {
            validateField(field);
        }
    };
    const validateField = (field: keyof Errors) => {
        let newErrors: Errors = { ...errors };

        if (field === 'email') {
            if (!email) {
                newErrors.email = 'Email is required';
            } else if (!emailPattern.test(email)) {
                newErrors.email = 'Invalid email format';
            } else {
                newErrors.email = '';
            }
        }

        if (field === 'first_name') {
            if (!firstName) {
                newErrors.first_name = 'Please enter a first name.';
            } else {
                newErrors.first_name = '';
            }
        }

        if (field === 'last_name') {
            if (!lastName) {
                newErrors.last_name = 'Please enter a last name.';
            } else {
                newErrors.last_name = '';
            }
        }

        if (field === 'password') {
            if (!password) {
                newErrors.password = 'Please enter a password';
            } else if (!passwordPattern.test(password)) {
                newErrors.password = 'Your password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one number.';
            } else {
                newErrors.password = '';
            }
        }

        setErrors(newErrors);
    };

    const handleSubmit = () => {
        setTouched({
            first_name: true,
            last_name: true,
            email: true,
            password: true,
        });
        validateField('first_name');
        validateField('last_name');
        validateField('email');
        validateField('password');

        if (!errors.first_name && !errors.last_name && !errors.email && !errors.password) {
            console.log("Form submitted successfully!");
        } else {
            console.log("There are errors in the form.");
        }
    };

    return (
        <div className='my-14 sm:mx-20'>
            <div className='sm:max-w-[416px] w-[90vw] mx-auto'>
                <h1 className='mb-6 text-[32px] font-medium'>Create an Account</h1>
                <div className='bg-[#f2ede3] rounded-lg mb-6 p-4 font-medium'>
                    <h3 className='text-[#726039] font-semibold text-sm mb-2 leadin-[19.5] tracking-[.2px]'>Join the Preferred Loyalty Program. Members get:</h3>
                    <ul className='pl-5'>
                        <li className='text-[#726039] font-medium text-sm flex items-center gap-1'><span className='w-1.5 h-1.5 bg-[#726039] block rounded-[50%]'></span> $1 spent = 1 point</li>
                        <li className='text-[#726039] font-medium text-sm flex items-center gap-1'><span className='w-1.5 h-1.5 bg-[#726039] block rounded-[50%]'></span>200 points = $20 reward</li>
                        <li className='text-[#726039] font-medium text-sm flex items-center gap-1'><span className='w-1.5 h-1.5 bg-[#726039] block rounded-[50%]'></span>Fast, easy checkout</li>
                        <li className='text-[#726039] font-medium text-sm flex items-center gap-1'><span className='w-1.5 h-1.5 bg-[#726039] block rounded-[50%]'></span>Special birthday gift</li>
                    </ul>
                </div>

                <Input
                    name='first_name'
                    label='First Name*'
                    type='text'
                    value={firstName}
                    onChange={(e) => handleChange('first_name', e.target.value)}
                    onBlur={() => handleBlur('first_name')}
                />
                {touched.first_name && errors.first_name && <p className='text-red-500 text-sm'>{errors.first_name}</p>}

                <Input
                    id='last_name'
                    name='last_name'
                    label='Last Name*'
                    type='text'
                    value={lastName}
                    onChange={(e) => handleChange('last_name', e.target.value)}
                    onBlur={() => handleBlur('last_name')}
                />
                {touched.last_name && errors.last_name && <p className='text-red-500 text-sm'>{errors.last_name}</p>}

                <Input
                    name='email'
                    label='Email*'
                    type='email'
                    value={email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                />
                {touched.email && errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

                <Input
                    name='password'
                    label='Create a Password'
                    type='password'
                    isPassword={true}
                    value={password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    onBlur={() => handleBlur('password')}
                />
                {touched.password && errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}

                <button onClick={handleSubmit} className='w-full bg-black text-white h-14 mt-5'>
                    Create Account
                </button>
            </div>
        </div>
    )
}

export default CreateAccount;

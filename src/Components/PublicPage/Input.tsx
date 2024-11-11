import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

interface InputWithLabelProps {
  id?: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
  onBlur?: () => void; // onBlur əlavə etdik
}

const Input: React.FC<InputWithLabelProps> = ({ id, name, type, label, value, onChange, isPassword, onBlur }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [changes, setChanges] = useState<string>(''); // Value üçün istifadə edirik

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='my-[7px] rounded-sm relative transition-all duration-200 focus-within:top-0'>
      <input
        id={id}
        name={name}
        className='pt-5 pr-10 outline-none rounded-sm peer border border-[#ccc] w-full pb-[6px] pl-[16px]'
        type={isPassword && showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur} // onBlur hadisəsini əlavə edirik
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setChanges(e.target.value)}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm top-4 left-4 transition-all duration-200 cursor-text ${changes && 'top-[4.5px]'} peer-focus:top-[4.5px]`}
      >
        {label}
      </label>
      {isPassword && (
        <div className='absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer' onClick={togglePasswordVisibility}>
          {showPassword ? <IoMdEyeOff className='text-[#787474]' size={20} /> : <IoMdEye className='text-[#787474]' size={20} />}
        </div>
      )}
    </div>
  );
};

export default Input;

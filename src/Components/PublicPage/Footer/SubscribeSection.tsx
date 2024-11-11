import React from 'react';
import { FaInstagram, FaTiktok, FaFacebookF, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';

const SubscribeSection: React.FC = () => {
  return (
    <div className="bg-black text-white px-2 md:px-6 py-6  w-full md:w-1/3 space-y-8">
      <div className="space-y-4">
        <h2 className="text-base font-bold">Sign Up & Save 10% on Your Purchase</h2>
        <p className="text-sm text-[#808080]">
          Subscribe for news on our latest arrivals, exclusive promotions, and events.
        </p>
        <button className="px-6 py-3 w-full bg-white text-black font-medium">
          Get Your 10% Off
        </button>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-bold">Text JOIN to 225846 to get Free Shipping</h2>
        <p className="text-sm text-[#808080]">
          Sign up for mobile texts to receive offer. Never miss out on exclusive launches, styles, and promotions.
          <span className="underline cursor-pointer">Details</span>
        </p>
      </div>

      <div className="flex space-x-6">
          <FaInstagram className='text-xl text-[#808080]' />
          <FaTiktok className='text-xl text-[#808080]' />
          <FaFacebookF className='text-xl text-[#808080]' />
          <FaTwitter className='text-xl text-[#808080]' />
          <FaPinterest className='text-xl text-[#808080]' />
          <FaYoutube className='text-xl text-[#808080]' />
      </div>
    </div>
  );
};

export default SubscribeSection;

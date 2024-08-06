/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../assets/images/logo.jpg';

function Header() {
  return (
    <div className='bg-green-500 w-full p-10'>
      <div className='flex items-center justify-between'>
        <img src={img1} className='w-[100px]' alt="Logo" />
        <ul className='flex space-x-4'>
          <li className='hover:text-white cursor-pointer'>Home</li>
          <li className='hover:text-white cursor-pointer'>About Us</li>
          <li className='hover:text-white cursor-pointer'>Contact Us</li>
        </ul>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'>
          Login
        </button>
      </div>
      <div className='flex flex-col items-center justify-center mt-8'> 
        <h1 className='font-bold text-5xl text-center'>FOCUS ON WHAT MATTERS and follow us</h1>
        <h1 className='font-bold text-5xl text-center'>Blog</h1>
      </div>
    </div>
  );
}

export default Header;
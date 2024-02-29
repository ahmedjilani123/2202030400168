import React from 'react'
import { IoLogoIonic } from "react-icons/io5";
import {Toaster} from 'react-hot-toast';
const Navbar = () => {
  return (
    <>
      <div  className='sticky top-0 z-50  w-auto h-11 backdrop-blur-sm bg-white/30 flex justify-center items-center px-9'>
    
        <ul className='flex gap-4'>
            <li className='mr-4  text-white text-sm hover:text-yellow-400 cursor-pointer'><a href="#home">Home</a></li>
            <li className='mr-4  text-white text-sm hover:text-yellow-400 cursor-pointer'><a href='#about'>About me </a></li>
            <li> <IoLogoIonic className='mr-4 text-white text-2xl font-semibold cursor-pointer hover:text-yellow-400'></IoLogoIonic></li>
            <li className='mr-4  text-white text-sm hover:text-yellow-400 cursor-pointer'><a href='#services'>Services</a></li>
            <li className='mr-4  text-white text-sm hover:text-yellow-400 cursor-pointer'><a href="#contact">Contact me</a></li>
        </ul>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>
  )
}

export default Navbar

import React from 'react'
import { FaCircle } from "react-icons/fa";
const About = () => {
  return (
    <div className='w-full bg-slate-900 px-10 mt-3' id='about'>
      <div>
        <div className='flex justify-center bg-slate-900'>
          <h2 className='text-white text-2xl font-semibold bg-slate-900 pt-3'>About</h2>
        </div>
        <div className='flex justify-center mt-6'>
          <div className='w-[450px]  h-auto p-1 pt-2'>
            <p className='text-slate-300 text-sm line-clamp-5 leading-normal text-center'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ullam quo labore molestiae! Beatae hic quidem ut dolor nostrum non!</p>
          </div>
        </div>
      </div>
      <section  className='mt-11  px-11 flex  md:flex-wrap md:flex-row flex-col  justify-center items-center gap-4'>
        <div className='group cursor-pointer hover:bg-slate-800 w-[200px] h-auto p-3 rounded-lg '>
          <div className='flex justify-center '>
          <div className='w-9 bg-neutral-500 h-9 flex justify-center items-center rounded-3xl'>
            <FaCircle className='text-green-500 w-2 group-hover:text-yellow-400'></FaCircle>
          </div>
          </div>
          <div className='flex justify-center flex-col items-center mt-2'>
            <h2 className='text-md font-semibold text-white'>Full Name</h2>
            <p className='text-neutral-500 font-semibold text-sm mt-1'>Ahmed jilani Shaikh</p>
          </div>
        </div>
        <div className='group cursor-pointer hover:bg-slate-800 w-[200px] h-auto p-3 rounded-lg '>
          <div className='flex justify-center '>
          <div className='w-9 bg-neutral-500 h-9 flex justify-center items-center rounded-3xl'>
            <FaCircle className='text-green-500 w-2 group-hover:text-yellow-400'></FaCircle>
          </div>
          </div>
          <div className='flex justify-center flex-col items-center mt-2'>
            <h2 className='text-md font-semibold text-white'>Email Address</h2>
            <p className='text-neutral-500 font-semibold text-sm mt-1'>Ahmedjilani0011@gmail.com</p>
          </div>
        </div>
        <div className='group cursor-pointer hover:bg-slate-800 w-[200px] h-auto p-3 rounded-lg '>
          <div className='flex justify-center '>
          <div className='w-9 bg-neutral-500 h-9 flex justify-center items-center rounded-3xl'>
            <FaCircle className='text-green-500 w-2 group-hover:text-yellow-400'></FaCircle>
          </div>
          </div>
          <div className='flex justify-center flex-col items-center mt-2'>
            <h2 className='text-md font-semibold text-white'>Instagram</h2>
            <p className='text-neutral-500 font-semibold text-sm mt-1'>iam_saj1</p>
          </div>
        </div>
        <div className='group cursor-pointer hover:bg-slate-800 w-[200px] h-auto p-3 rounded-lg '>
          <div className='flex justify-center '>
          <div className='w-9 bg-neutral-500 h-9 flex justify-center items-center rounded-3xl'>
            <FaCircle className='text-green-500 w-2 group-hover:text-yellow-400'></FaCircle>
          </div>
          </div>
          <div className='flex justify-center flex-col items-center mt-2'>
            <h2 className='text-md font-semibold text-white'>Phone</h2>
            <p className='text-neutral-500 font-semibold text-sm mt-1'>+91 63530 38823</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

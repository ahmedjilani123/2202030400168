import React from 'react';
import Vector from '../images/Vector-1.png';
import { FaDev , FaConnectdevelop} from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
const What = () => {

   
  return (
    <div className='bg-slate-900 w-full px-10' id='services'>
         <div className='flex justify-center pt-9'>
          <h2 className='text-white text-xl font-semibold bg-slate-900'>What i do</h2>
        </div>
       
        <section className='mt-11  px-11 flex  md:flex-wrap md:flex-row flex-col  justify-center items-center gap-4'>
     <div className='group bg-slate-800 p-3 h-auto w-[200px] border-b-2 border-green-600 hover:border-yellow-300 cursor-pointer'>
        <div className='text-white'>
         
            <FaConnectdevelop className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>Software</h2>
            <h2 className='text-white leading-5'>Development</h2>
        </div>
     </div>
     <div className='group bg-slate-800 p-3 h-auto w-[200px] border-b-2 border-green-600 hover:border-yellow-300 cursor-pointer'>
        <div className='text-white'>
            <FaDev className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>Web</h2>
            <h2 className='text-white leading-5'>Development</h2>
        </div>
     </div>
     <div className='group bg-slate-800 p-3 h-auto w-[200px] border-b-2 border-green-600 hover:border-yellow-300 cursor-pointer'>
        <div className='text-white'>
            <FiCodesandbox className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>Web</h2>
            <h2 className='text-white leading-5'>Design</h2>
        </div>
     </div>
     <div className='group bg-slate-800 p-3 h-auto w-[200px] border-b-2 border-green-600 hover:border-yellow-300 cursor-pointer'>
        <div className='text-white'>
            <FiCodesandbox className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>App</h2>
            <h2 className='text-white leading-5'>Development</h2>
        </div>
     </div>
    
        </section>
    </div>
  )
}

export default What

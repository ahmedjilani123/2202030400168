import React from 'react'
import { LuFileJson } from "react-icons/lu";
import { RiHtml5Fill , RiReactjsLine , RiJavascriptFill} from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaNode,FaPython, FaJava} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { ImStackoverflow } from "react-icons/im";
import sapui5 from '../images/sapui5.png';
const Skill = () => {
    
  return (
    <div className='w-full bg-slate-900 px-10' >
      <div className='pt-[4.25rem]'>
        <div className='flex justify-center bg-slate-900'>
          <h2 className='text-white text-xl font-semibold bg-slate-900'>..Skills..</h2>
        </div>
      </div>
      <div className='px-4'>
      <section className='mt-11  px-11 flex  md:flex-wrap md:flex-row flex-col md:justify-center  justify-center items-center gap-4 '>
      <div className='group bg-slate-800 p-3 h-auto w-[200px] rounded-lg   hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <img src={sapui5} className='w-[4.25rem] h-7 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>SAP UI5/FIORI</h2>
        </div>
    </div>

      <div className='group bg-slate-800 p-3  w-[200px] h-auto rounded-lg hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <RiHtml5Fill className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>HTML</h2>
        </div>
    </div>
     
    <div className='group bg-slate-800 p-3  w-[200px] h-auto  rounded-lg  hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <DiCss3 className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>CSS</h2>
        </div>
    </div>

    <div className='group bg-slate-800 p-3 h-auto w-[200px] rounded-lg  hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <RiJavascriptFill className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>JAVASCRIPT</h2>
        </div>
    </div>

    <div className='group bg-slate-800 p-3 h-auto w-[200px] rounded-lg hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <LuFileJson className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>JSON</h2>
        </div>
    </div>

    <div className='group bg-slate-800 p-3 h-auto w-[200px] rounded-lg hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <ImStackoverflow className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>MERN</h2>
        </div>
    </div>

    <div className='group bg-slate-800 p-3 h-auto w-[200px] rounded-lg hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <TbBrandCpp className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>C++</h2>
        </div>
    </div>

    <div className='group bg-slate-800 p-3 h-auto w-[200px] rounded-lg hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <FaPython className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>PYTHON</h2>
        </div>
    </div>

    <div className='group bg-slate-800 p-3 h-auto w-[200px] rounded-lg hover:bg-green-600cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <FaJava className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>JAVA</h2>
        </div>
    </div>
    <div className='group bg-slate-800 p-3 h-auto w-[200px] rounded-lg hover:bg-green-600 cursor-pointer'>
        <div className='text-white flex justify-center flex-col items-center'>
        <BiLogoTailwindCss className='w-7 h-6 group-hover:text-yellow-400 text-green-600 '/>
            <h2 className='text-white mt-3'>TAILWIND CSS</h2>
        </div>
    </div>


      </section>
      </div>
    </div>
    
  )
}

export default Skill

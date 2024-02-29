import React from 'react'
import Image from '../images/ahmedphoto.jpg';
const Heropage = () => {
  return (
    <>
      <div className='bg-slate-900' id='home'>
        <div className=' w-full flex justify-center  flex-col md:flex-row  bg-slate-900 px-9'>
          <div className='w-auto flex justify-start items-center md:pb-[100px] mt-[6rem]  h-auto md:h-[450px]'>
            <div className=' w-[350px] ml-6 h-[200px]'>
              <div className='pl-[4rem] md:pl-0' >
                <h4 className='text-white text-3xl font-semibold '>Hi,I am</h4>
                <h4 className='text-white text-3xl font-semibold'>Ahmed Jilani Shaikh</h4>
                <p className='text-stone-400 pt-2'>Full-Stack Developer</p>
              </div>
              <div className='mt-6 flex gap-6 pl-[4rem] md:pl-0'>
                <button className='bg-green-500 hover:bg-slate-900 hover:border w-[120px] text-white p-1 text-sm font-semi'>Download CV</button>
                <button className='border hover:bg-green-500  w-[120px] text-white p-1 text-sm font-semi'><a href='https://www.linkedin.com/in/ahmed-jilani-4ab53b26b/' target='_blank'>Learn More</a></button>
              </div>
            </div>

          </div>
          <div className="cursor-pointer grayscale hover:grayscale-0 w-[500px] h-auto  md:h-screen flex justify-center px-6 md:pl-0 md:items-center">
            <img src={Image} alt='image'
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Ahmed jilani"
            
             className='h-auto w-auto  md:z-0  rounded-2xl mt-[2.25rem] md:mt-0 md:mb-[3rem]'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Heropage

import React,{useState, useRef} from 'react'
import toast from 'react-hot-toast'
const Contact = () => {
     const [form,setForm] = useState({});
     const [input,setInput] = useState();
     const inputRef1=useRef(null);
     const inputRef2=useRef(null);
     const inputRef3=useRef(null);
     const inputRef4=useRef(null);
     const inputRef5=useRef(null);

    const handleSubmit = async (e)=>{
        e.preventDefault();
       const response = await fetch("http://localhost:8080/demo",{
              method:'POST',
              body:JSON.stringify(form),
              headers:{
                "Content-Type": 'application/json'
              }
          });
          const data = await response.json();
          toast.success('Successfully send!');
          inputRef1.current.value="";
          inputRef2.current.value="";
          inputRef3.current.value="";
          inputRef4.current.value="";
          inputRef5.current.value="";

       }
      const handlInput = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
      })
      }
    return (
        <div className='w-full bg-slate-900 px-10 pt-10' id='contact'>
            <div>
                <div className='flex justify-center bg-slate-900'>
                    <h2 className='text-white text-2xl font-semibold bg-slate-900 pt-3'>Get in touch</h2>
                </div>
            </div>
            <form  method='POST' className=' px-[5rem] flex flex-wrap justify-center items-center flex-col mt-[3.25rem]'>
                <div className='flex md:flex-row flex-col  gap-5'>
                <input name='FName' ref={inputRef1} onChange={handlInput} placeholder='First Name' autoComplete='none' className=" border-slate-400   placeholder:italic placeholder:text-slate-400 block bg-slate-900 text-white w-full border-b  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  sm:text-sm"></input>
                <input name='LName' ref={inputRef2} onChange={handlInput} placeholder='Last Name' autoComplete='none' className=" border-slate-400   placeholder:italic placeholder:text-slate-400 block bg-slate-900 w-full border-b text-white  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  sm:text-sm"></input>
                </div>
               <div className='flex md:flex-row flex-col gap-5 mt-5' >
               <input name='Email' ref={inputRef3} onChange={handlInput} placeholder='Email' autoComplete='none' className=" border-slate-400   placeholder:italic placeholder:text-slate-400 block bg-slate-900 text-white w-full border-b  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  sm:text-sm"></input>
                <input name='Phone' ref={inputRef4} onChange={handlInput} placeholder='Phone number' autoComplete='none' className=" border-slate-400  placeholder:italic placeholder:text-slate-400 block bg-slate-900 text-white w-full border-b  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  sm:text-sm"></input>
               </div>
               <div className='flex flex-wrap gap-5 mt-5 md:w-[27.55rem]  '>
               <textarea name='Message' ref={inputRef5} onChange={handlInput} placeholder='Message' aria-autocomplete='none'  className="resize-none text-white border-slate-400  placeholder:italic placeholder:text-slate-400 block bg-slate-900 w-full border-b  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  sm:text-sm"></textarea>
               </div>
                <button onClick={handleSubmit} className='text-white shadow-md  shadow-green-500/50 bg-green-600 p-1 mt-[3rem] w-[8.25rem]  hover:bg-green-300 hover:text-green-900 active:bg-slate-400 outline-none '>Submit now</button>
            </form>
            
        </div>
)}

            export default Contact

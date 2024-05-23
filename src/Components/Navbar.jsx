import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";



<MdOutlineClose />


const Navbar = () => {
      let Links =[
        {name:"Home",link:"/"},
        {name:"About Us",link:"/"},
        {name:"Service",link:"/"},
        {name:"Blog",link:"/"},
        {name:"Contact Us",link:"/"},
      ];

      let [open,setOpen]=useState(false);

 
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
       <div className='font-bold font-inter text-2xl cursor-pointer flex items-center'>
         BuildVision
       </div>
      
       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
       <MdOutlineClose name={open ? 'close':'menu'}  />
       </div>

       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
         {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8   md:my-0 my-7'>
              <a href={link.link} className=' hover:text-gray-400 duration-500 text-lg font-inter font-semibold'>{link.name}</a>
            </li>
          ))
        }
       </ul>
       <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          <button className='b2 hover:text-white py-2 px-6 rounded-md bg-white  md:ml-8 font-inter font-semibold border-black border-2'>Get started</button>
       </div>


      </div>
    </div>
   )
 }

export default Navbar


    
     




import React from 'react'
import { FiFacebook } from "react-icons/fi";


import { FiInstagram } from "react-icons/fi";


import { BsTwitterX } from "react-icons/bs";


import { SlSocialLinkedin } from "react-icons/sl";



const Footer = () => {
  let Links =[
    {name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Service",link:"/"},
    {name:"Blog",link:"/"},
    {name:"Contact",link:"/"},
  ];


  return (
    <div className=' bg-gray-800 '>
        <div className='h-52 w-full text-white grid md:grid-cols-2 border-b-2 border-red-700 '>
            <div className=' place-content-center mx-auto md:mx-0 md:mb-14 md:px-12'>
                <h1 className='font-semibold font-inter text-2xl'>SO, WHAT YOU WAITING FOR? <br/> LET'S TALK YOUR PROJECT!</h1>
            </div>
            <div className=' mx-auto place-content-center md:mb-5 md:ml-48'>
                <input type="email" placeholder='Bussiness email' className='bg-gray-500 text-center rounded-3xl pr-[213px] py-1.5'/>
                <br />
                <button type='submit' className='b2 text-black font-semibold hover:bg-gray-500 hover:text-white bg-white text-center rounded-3xl px-40 py-1.5 mt-3'>Contact Us</button>
            </div>
        </div>
            <div  className='text-white grid md:grid-cols-3 w-full h-60 pt-8 pl-4 md:pl-0 sm:grid-cols-2 md:px-12'>
                  <div className='font-bold text-2xl'>BuildVision</div>
                  <div className=' flex gap-5 md:justify-center my-4 justify-start place-content-center'>
                  <FiFacebook  size={20}/>
                  <FiInstagram  size={25}/>
                  <BsTwitterX  size={25}/>
                  <SlSocialLinkedin size={20} />
                  </div>
                  <ul >
                    {
                      Links.map((link)=>(
                      <li key={link.name}>
                        <a href={link.link} className=' hover:text-gray-400 duration-500 text-lg font-inter font-semibold'>{link.name}</a>
                      </li>
                      ))
                    }
                  </ul>
            </div>
    </div>
  )
}

export default Footer
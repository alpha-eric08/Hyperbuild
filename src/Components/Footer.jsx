import React from 'react'
import { logo } from '../assets/images'
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";



const Footer = () => {
  return (
    <div className=' w-full text-white footer'>
      <div className='  px-3 md:px-0 md:mx-10 pt-10 pb-5 grid md:grid-cols-2 gap-5 md:gap-10'>
        <div className='md:w-5/6'>
          <img src={ logo} alt="logo" className='rounded-xl h-20'/>
          <p className='text-lg font-normal pt-1.5 pb-4 '>At Hyperbuild we specialise in the supply of ceiling materials,security gate and fencing products to contractors and end users; this includes Plaster boards, Pop cenent, accoustics, cornice, center pannels, Gate motors, Energizer batteries, Tension coils and everything in-between! .Our trade experts will be sure to find you the right product, at the right price.</p>
          <div className=' flex gap-2 my-2 '>
            <FiFacebook  className='hover:text-gray-300 cursor-pointer' size={23}/>
            <FiInstagram  className='hover:text-gray-300 cursor-pointer' size={25}/>
            <BsTwitterX   className='hover:text-gray-300 cursor-pointer'size={25}/>
            <SlSocialLinkedin className='hover:text-gray-300 cursor-pointer' size={23} />
          </div>
        </div>
        <div className='text-xl font-normal md:w-3/6 lg:ml-72 border-t-2 border-gray-500 md:border-0 py-5 md:py-0'>
          <h1 className='font-bold '>CONTACT US</h1>
          <ul className='my-5'>
            <li>Cocoa Board Street</li>
            <li>Sunyani</li>
            <li>Ghana</li>
          </ul>
          <p><span className='font-semibold'>Phone:</span> +233 244 876 61</p>
          <p><span className='font-semibold'>Email:</span> hyperbuildgh@gmail.com</p>
        </div>
      </div>
      <div className='border-t-2 border-gray-500 font-normal text-xl text-center py-4 px-2'>
        <p>©Copyright Hyperbuild Enterprise LTD. All Rights Reserved</p>
        <p className='font-medium py-1'>Designed by Chippycode</p>
      </div>
    </div>
  )
}

export default Footer
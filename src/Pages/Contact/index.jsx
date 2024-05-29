import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { contactbg } from '../../assets/images'
import Forms from '../../Components/Forms'

const Contact = () => {
  return (
    <div className='bg-gray-100'>
      <div className=' w-full '>
        <div className=' h-[503px] absolute'>
          <img src={ contactbg} alt="herobg" className='h-[503px]' />
        </div>
        <div className='bg-gray-800/50 text-center grid grid-cols-1 place-content-center w-full text-white relative h-[503px]'>
          <div className='md:w-7/12 mx-auto'>
            <h1 className=' font-bold text-5xl md:text-6xl font-Roboto'>Contact</h1>
          </div>
        </div>
      </div>


      <div className='md:px-8 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <div className='pb-4 pt-5'>
                  <h1 className='font-medium text-4xl'>Start your proces now!</h1>
                  <p className='font-normal text-2xl text-black my-5'>Fill out your information form or reach out through the medium below</p>
                  <p className='text-blue-600 font-normal text-2xl'>hyperbuildgh@gmail.com</p>
                  <p className='text-blue-600 font-semibold text-2xl'>+233 244 876 61</p>
                </div>
                <div className=' flex gap-2 my-2 '>
                  <FiFacebook  className='hover:text-gray-300 cursor-pointer' size={23}/>
                  <FiInstagram  className='hover:text-gray-300 cursor-pointer' size={25}/>
                  <BsTwitterX   className='hover:text-gray-300 cursor-pointer'size={25}/>
                  <SlSocialLinkedin className='hover:text-gray-300 cursor-pointer' size={23} />
                </div>
                  
            </div>



            {/* Forms */}
      <div className=' rounded-md shadow-lg overflow-hidden mx-auto relative mt-44 md:mt-0'>
        <Forms />
      </div>
    </div>
        </div>
    </div>
  )
}

export default Contact
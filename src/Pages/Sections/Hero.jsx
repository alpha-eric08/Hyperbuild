import React from 'react'
import { herobg } from '../../assets/images'

const Hero = () => {
  return (
    <div className=' h-[503px] w-full '>
      <div className=' h-[503px] absolute'>
        <img src={ herobg } alt="herobg" className='h-[503px]' />
      </div>
      <div className='bg-gray-800/50 text-center md:pt-32 grid grid-cols-1 place-content-center w-full text-white relative h-[503px]'>
        <div className='md:w-7/12 mx-auto'>
          <h1 className=' font-bold text-5xl md:text-6xl font-Roboto'>We offer modern ceilings and electric gate</h1>
          <p className=' font-inter font-medium text-xl md:text-2xl my-6'>Fencing products for your security and beautification of your homes</p>
          <button className=' bg-rose-500 py-2 px-5 rounded-md hover:bg-rose-700 font-semibold text-xl text-white '>Get A Quote</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
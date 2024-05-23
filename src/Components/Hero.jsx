import React from 'react'
import { herobg } from '../assets/images'

const Hero = () => {
  return (
    <div className='h-full w-full'>
        <img className='md:h-screen w-full' src={herobg} alt="" />
    </div>
  )
}

export default Hero
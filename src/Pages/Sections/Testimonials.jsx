import React from 'react'
import { cmticon } from '../../assets/images'

const Testimonials = () => {
  return (
    <div className='testimonials pb-14  w-full mx-auto text-white'>
      <div className='text-center'>
        <h1 className=' font-bold text-2xl py-7'>Clients Testimonials</h1>
        <p className=' font-medium text-xl md:w-9/12 mx-auto'>From homeowners to businesses, our satisfied customers share their experiences. Read how our services have transformed spaces, and exceeded expectations. Join our community of happy clients and experience the difference with us.</p>
      </div>

          {/* client cards */}

      <div className='py-10 grid grid-cols-1 gap-5 md:grid-cols-3 text-gray-800 font-normal text-lg mx-auto w-10/12'>
        <div className="bg-white rounded-3xl mx-auto p-5">
          <img src={cmticon} alt="icons" />
          <p className=' mt-4 mb-7'>Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae pellentesque. dolor sit amet tempus tempus.</p>
          <p className='font-semibold text-xl mt-'>Kwamena Yeboah</p>
        </div>
        <div className="bg-white  rounded-3xl mx-auto p-5">
          <img src={cmticon} alt="icons" />
          <p className=' mt-4 mb-7'>Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae pellentesque. dolor sit amet tempus tempus.</p>
          <p className='font-semibold text-xl mt-'>Kwamena Yeboah</p>
        </div>
        <div className="bg-white rounded-3xl mx-auto p-5">
          <img src={cmticon} alt="icons" />
          <p className=' mt-4 mb-7'>Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae pellentesque. dolor sit amet tempus tempus.</p>
          <p className='font-semibold text-xl mt-'>Kwamena Yeboah</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
import React from 'react'
import ActiveSlider from '../../Components/ActiveSlider/ActiveSlider'

const Testimonials = () => {
  return (
    <div className='testimonials pb-10  w-full mx-auto text-white'>
      <div className='text-center'>
        <h1 className=' font-bold text-2xl py-7'>Clients Testimonials</h1>
        <p className=' font-medium text-xl md:w-9/12 mx-auto'>From homeowners to businesses, our satisfied customers share their experiences. Read how our services have transformed spaces, and exceeded expectations. Join our community of happy clients and experience the difference with us.</p>
      </div>


          {/* client cards */}

      <div className='mt-20 '>
        <ActiveSlider />
      </div>
    </div>
  )
}

export default Testimonials
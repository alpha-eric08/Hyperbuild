import React from 'react'
import { affordable, durable, frame } from '../../assets/images'


const Started = () => {
  return (
    <div className='md:py-10 bg-gray-100 grid grid-cols-1 place-content-center font-inter'>

        <div className=' h-auto grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto place-content-center gap-5 md:gap-20 pt-10 md:pt-0'>
            <div className=' text-center w-full'>
                <img src={ affordable } alt="affordable" className='h-20 w-20 mx-auto' />
                <h1 className=' font-semibold text-2xl my-3'>Affordable</h1>
                <p className='font-medium text-base text-gray-800'>Our commitment to affordability means you get top-quality ceiling materials, security gates, and fencing products without compromising your budget. We believe in providing cost-effective solutions without sacrificing quality or reliability.</p>
            </div>
            <div className=' text-center w-full '>
                <img src={ durable} alt="Durable" className='h-20 w-20 mx-auto' />
                <h1 className=' font-semibold text-2xl my-3'>Durable</h1>
                <p className='font-medium text-base text-gray-800'>Our products are built to last. From our resilient ceiling materials to our sturdy security gates and fencing products, we prioritize durability to ensure long-term satisfaction for our customers. Rest assured, our offerings withstand the test of time, delivering value and peace of mind.</p>
            </div>
            <div className=' text-center w-full'>
                <img src={frame} alt="frame" className='h-20 w-20 mx-auto' />
                <h1 className=' font-semibold text-2xl my-3'>Affordable</h1>
                <p className='font-medium text-base text-gray-800'>Security is paramount, which is why our security gates and fencing products are designed with your safety in mind. We go the extra mile to provide robust solutions that protect your property and loved ones, giving you confidence and peace of mind knowing that you're in good hands.</p>
            </div>
        </div>

        <div className='text-center mt-7'>
          <button className='py-2 px-5 rounded-md font-semibold text-xl text-white'>Get started</button>
        </div>
    </div>
  )
}

export default Started
import React from 'react'
import { service01, service02 } from '../assets/images'

const Services = () => {
  return (
    <div className='mx-5'>
        <p className='py-5 text-xl font-inter font-bold pt-10'>Our Services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full  bg-white text-center">
            <div>
               <div className='h-96 w-full bg-yellow-300 rounded-lg'>
                <img src={service01} alt="" className="overflow-hidden rounded-lg h-96 w-full" />
               </div>
               <p className='py-3 font-semibold'>Commercial Entrance Renovation</p>
            </div>
            <div>
               <div className='h-96 w-full bg-blue-300 rounded-lg'>
               <img src={service02} alt="" className="overflow-hidden rounded-lg h-96 w-full" />
               </div>
               <p className='py-3 font-semibold'>Minimal Ornamentation</p>
            </div>
        </div>
        <div className=' flex justify-center border-b-2 border-slate-700 py-6'>
          <button className='hover:bg-slate-400 py-2 px-4 text-white font-semibold rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Services
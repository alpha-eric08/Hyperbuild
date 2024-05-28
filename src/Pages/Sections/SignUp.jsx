import React from 'react'
import { before01, before02, signupbg } from '../../assets/images';
import Forms from '../../Components/Forms';



const SignUp = () => {
  return (
    <div className='bg-gray-100 md:px-8 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <div className='absolute'>
                  <img src={ signupbg } alt="" className=' md:h-[585px] md:w-[623px] overflow-hidden'/>
                </div>
                  <div className='relative flex justify-around md:justify-center md:mt-64 md:gap-10'>
                    <img src={before01} alt="" className='h-60 bg-slate-600'/>
                    <img src={before02} alt="" className='h-60 bg-slate-600'/>
                  </div>
            </div>



            {/* Forms */}
      <div className=' rounded-md shadow-lg overflow-hidden mx-auto relative mt-44 md:mt-0'>
        <Forms />
      </div>
    </div>
        </div>
  )
}

export default SignUp
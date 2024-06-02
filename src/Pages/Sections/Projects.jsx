import React from 'react'
import { project01, project02, project03 } from '../../assets/images'


const Projects = () => {
  return (
    <div className='  py-6'>
        <div className="flex flex-wrap justify-center  gap-5 w-full  bg-white text-center border-b-2 pb-4 border-gray-400">
            <div>
                <div className='h-[500px]'>
                    <img src={project01} alt="" className="md:w-[350px] w-[570px] h-[500px] md:rounded-bl-[150px]" />
                </div>
                <p className='py-3 font-semibold'>Tenant-Finish</p>
            </div>
            <div>
                <div className='h-[500px]'>
                    <img src={project02} alt="" className="h-[500px] w-[560px]" />
                </div>
                <p className='py-3 font-semibold'>Commercial Renovation</p>
            </div>
            <div>
                <div className='h-[500px] w-full md:order-2'>
                    <img src={project03} alt="" className="md:w-[350px] md:rounded-tr-[150px] w-[570px] h-[500px]" />
                </div>
                <p className='py-3 font-semibold'>Commercial General Contracting</p>
            </div>
        </div>
        <div className='text-center mt-7 mb-4'>
            <a href="/portfolio">
                <button className=' py-2  px-5 rounded-md font-semibold text-xl text-white'>Explore More</button>
            </a>
        </div>
    </div>
  )
}

export default Projects
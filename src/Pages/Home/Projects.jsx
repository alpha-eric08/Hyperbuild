import React from 'react'
import { project01, project02, project03 } from '../../assets/images'

const Projects = () => {
  return (
    <div className='mx-5 border-b-2 border-slate-700 py-6'>
        <p className='py-5 font-bold pt-10 text-xl font-inter'>Some of Our Project</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full text-center">
            <div>
                <div className='h-[500px]  w-full md:rounded-bl-[80px]'>
                    <img src={project01} alt="" className="h-[500px]  w-full md:rounded-bl-[80px]" />
                </div>
                <p className='py-3 font-semibold'>Tenant-Finish</p>
            </div>
            <div>
                <div className='h-[500px] w-full'>
                    <img src={project02} alt="" className="h-[500px]  w-full" />
                </div>
                <p className='py-3 font-semibold'>Commercial Renovation</p>
            </div>
            <div>
                <div className='h-[500px] w-full md:rounded-tr-[80px] md:order-2'>
                    <img src={project03} alt="" className="h-[500px]  w-full md:rounded-tr-[80px]" />
                </div>
                <p className='py-3 font-semibold'>Commercial General Contracting</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
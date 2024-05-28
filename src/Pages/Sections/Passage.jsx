import React from 'react'
import Projects from './Projects'

const Passage = () => {
  return (
    <div>
        <div className='text-center lg:w-10/12 mx-auto pt-10'>
            <h1 className='md:text-5xl text-4xl font-bold '>Learn more about our latest services and other fencing products</h1>
            <p className=' text-lg lg:w-6/12 mx-auto py-5 font-inter font-medium text-black'>Join us on a journey of knowledge and expertise as we share our passion for delivering excellence in every detail</p>
        </div>
        <div>
          <Projects />
        </div>
    </div>
  )
}

export default Passage
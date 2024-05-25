import React from 'react'
import Passage from './Passage'
import Projects from './Projects'
import Forms from '../../Components/Forms'

const Content = () => {
  return (
    <div className=' bg-gray-50 pb-5 '>
        <Passage />
        <Projects />
        <Forms />
    </div>
  )
}

export default Content
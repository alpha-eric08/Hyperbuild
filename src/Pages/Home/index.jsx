import React from 'react'
import Hero from '../Sections/Hero'
import Started from '../Sections/Started'
import Passage from '../Sections/Passage'
import Testimonials from '../Sections/Testimonials'
import SignUp from '../Sections/SignUp'
import Gmap from '../../Components/Gmap'



const Home = () => {
  return (
    <div>
      <Hero />
      <Started />
      <Passage />
      <Testimonials />
      <SignUp />
      <Gmap />
    </div>
  )
}

export default Home
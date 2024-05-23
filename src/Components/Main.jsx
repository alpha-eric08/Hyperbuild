import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Content from './Content'
import Services from './Services'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Content />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Main
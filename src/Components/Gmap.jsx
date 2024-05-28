import React from 'react'

const Gmap = () => {
  return (
    <div className=' px-2 pt-6 pb-20'>
        <div className='text-center md:w-5/12 mx-auto'>
            <h1 className='font-bold text-2xl'>Find Us On Google Maps</h1>
            <p className='font-normal text-lg text-gray-800 mt-3 mb-8'>Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae pellentesque. dolor sit amet tempus tempus.</p>
        </div>
        <div className='bg-gray-200  h-[470px] md:mx-10'>
            <iframe width="100%" height="470" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=470&amp;hl=en&amp;q=Cocoa%20Board%20Street,Sunyani,Ghana+(HYPERBUILD%20ENTERPRISE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a>
            </iframe>
        </div>
    </div>
  )
}

export default Gmap
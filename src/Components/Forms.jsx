import React from 'react'

const Forms = () => {
  return (
    <div className='mx-auto my-10'>
      <div className='   bg-white rounded-md mx-5  shadow-lg overflow-hidden'>
        <div className='ml-4 md:ml-0 px-10  py-4 md:px-40 text-black'>
          <form action="#">
            <div className='grid md:grid-cols-2 gap-5 '>
              <label className=''>
                First Name <br />
                <input  
                type="text"
                placeholder='FirstName'
                name='First Name' 
                className='border border-gray-400 py-1 px-2 w-full rounded-md bg-gray-200' 
                 />
              </label>
              <label htmlFor="">
                Last Name <br />
                <input type="text" placeholder='Last Name' className='border border-gray-400 py-1 w-full rounded-md bg-gray-200'  />
              </label>
              <label htmlFor="">
                Company Name <span className=' font-light'>(Required)</span> <br />
                <input type="text" placeholder='Company Name' className='border border-gray-400 py-1 px-2 w-full rounded-md bg-gray-200'  />
              </label>
              <label>
                Phone Number <br />
                <input type="tel" placeholder='Phone Number ' className='border border-gray-400 py-1 px-2 w-full rounded-md bg-gray-200'  />
              </label>
            </div>
            <div>
              <div className="my-5">
                <label>
                Email <span className=' font-light'>(Required)</span> <br/>
                  <input type="text" placeholder='Email' className='border border-gray-400 py-1 px-2 w-full rounded-md bg-gray-200  ' />
                </label>
              </div>
              <label>
                Project Description <span className=' font-light'>(Required)</span> <br/>
                <textarea placeholder='Enter your description here....' className='border border-gray-400 py-1 px-2 w-full resize-none bg-gray-200'  name="email"></textarea>
              </label>
              <button className=" py-1 mt-5 px-4 rounded-md  text-center text-white hover:bg-slate-600">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forms
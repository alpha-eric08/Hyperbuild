import React from 'react';
import { useForm } from 'react-hook-form';

const Forms = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=' py-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-2'>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text" 
                  id='firstName'
                  placeholder='FirstName'
                  {...register('firstname', { required: 'First name is required' })}
                  className='border border-gray-400 py-1.5 px-2 w-full rounded-md'
                  />
                {errors.firstname && <span className='text-red-600'>{errors.firstname.message}</span>}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id='lastName'
                  placeholder='LastName'
                  {...register('lastname', { required: 'Last name is required' })}
                  className='border border-gray-400 py-1.5 px-2 w-full rounded-md'
                />
                {errors.lastname && <span className='text-red-600'>{errors.lastname.message}</span>}
              </div>
              <div>
                <label htmlFor="company">Company Name <span className='font-light'>(Required)</span></label>
                <input
                  type="text"
                  id='company'
                  placeholder='CompanyName'
                  {...register('company', { required: 'Company name is required' })}
                  className='border border-gray-400 py-1.5 px-2 w-full rounded-md'
                />
                {errors.company && <span className='text-red-600'>{errors.company.message}</span>}
              </div>
              <div>
                <label htmlFor="phone">Phone Number <span className='font-light'>(Required)</span></label>
                <input
                  type="tel"
                  id='phone'
                  placeholder='PhoneNumber'
                  {...register('phone', { required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]/,
                    message: 'Invalid phone number'
                  }
                   })}
                  className='border border-gray-400 py-1.5 px-2 w-full rounded-md'
                />
                {errors.phone && <span className='text-red-600'>{errors.phone.message}</span>}
              </div>
              <div className=' md:col-span-2'>
                <label htmlFor="email">Email <span className='font-light'>(Required)</span></label>
                <input
                  type="email"
                  id='email'
                  placeholder='Email'
                  {...register('email', { required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address'
                  }
                   })}
                  className='border border-gray-400 py-1.5 px-2 w-full rounded-md'
                />
                {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
              </div>
              <div className=' md:col-span-2'>
                <label htmlFor="project">Project Description <span className='font-light'>(Required)</span></label>
                <textarea
                  placeholder='Enter your description here....'
                  {...register('description', { required: 'Project description is required' })}
                  className='border rounded-md border-gray-400 py-2 px-2 w-full resize-none'
                  id='project'
                ></textarea>
                {errors.description && <span className='text-red-600'>{errors.description.message}</span>}
              </div>
              <div>
                <button type="submit"  className=" my-2 text-center py-2 px-4 text-white font-semibold rounded">Send</button>
              </div>
            </div>
          </form>
          <div className=' font-semibold text-xl text-center py-8'>
            <p><span className=' font-extrabold'>NB:</span> Please fill out this form, and we will reach out to you shortly to begin the discussion about your project.</p>
          </div>
        </div>
  );
}

export default Forms;
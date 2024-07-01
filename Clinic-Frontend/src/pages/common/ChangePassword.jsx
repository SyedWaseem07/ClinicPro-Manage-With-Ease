import React, { useState } from 'react'

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const handleSubmit = (e) => { }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] })
  }
  return (
    <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold'>
      <h3 className='my-2 text-2xl font-bold text-neutral-content text-center'>Change Password</h3>
      <form className='flex flex-col gap-4 text-neutral-content py-8 px-14 w-[80%] md:w-[50%] mx-auto' onSubmit={handleSubmit}>
        <label className='input input-bordered rounded flex items-center gap-2'>
          <input
            type='password'
            className='grow'
            placeholder='Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <label className='input input-bordered rounded flex items-center gap-2'>
          <input
            type='password'
            className='grow'
            placeholder='confirm Password'
            name='confpassword'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button className='btn rounded-full btn-primary text-primary-content font-semibold text-[1.2rem]'>Change</button>
      </form>
    </div>
  )
}

export default ChangePassword
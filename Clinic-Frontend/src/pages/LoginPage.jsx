import React, { useState } from 'react'
import clinic from "../assets/clinic.png"
import { } from "react"
const LoginPage = () => {
  const [formData, setFormData] = useState({
    "username": "",
    "password": "",
    "role": ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className='w-full max-w-[1240px] mx-auto'>
      <div className='flex flex-col md:flex-row justify-center h-screen items-center w-full gap-1 md:gap-10 '>
        <img src={clinic} alt="" className="max-w-sm rounded-lg shadow-2xl h-48 md:h-96 bg-base" />
        <form className='flex flex-col gap-4 text-neutral-content py-8  px-14' onSubmit={handleSubmit}>
          <h1 className='text-4xl font-extrabold '>{"Let's"} go.</h1>
          <label className='input input-bordered rounded flex items-center gap-1'>
            <input
              type='text'
              className='grow'
              placeholder='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </label>

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
          <div className='flex gap-2 cursor-pointer' id='radio1'
            onClick={() => {
              document.getElementById('radio1').firstChild.checked = true
              setFormData({ ...formData, "role": "doctor" })
            }}
          >
            <input type="radio" name="radio-5" className="radio radio-success" />
            <span>Doctor</span>
          </div>
          <div className='flex gap-2 cursor-pointer' id='radio2'
            onClick={() => {
              document.getElementById('radio2').firstChild.checked = true
              setFormData({ ...formData, "role": "receptionist" })
            }}
          >
            <input type="radio" name="radio-5" className="radio radio-success" />
            <span>Receptionist</span>
          </div>

          <button className='btn rounded-full btn-primary text-primary-content font-semibold text-[1.2rem]' >Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
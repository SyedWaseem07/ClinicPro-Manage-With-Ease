import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";

const AddAppointment = () => {
  const [formData, setFormData] = useState({
    "patient_name": "",
    "mobile_no": "",
    "age": 0,
    "gender": "",
    "date_of_app": "",
    "time_of_app": ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  return (
    <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold'>
      <h3 className='my-2 text-2xl font-bold text-neutral-content text-center'>Add Appointment</h3>
      <div className="collapse collapse-plus bg-neutral text-neutral-content mt-4">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">Add</div>
        <div className="collapse-content">
          <form className='flex flex-col gap-4 text-neutral-content py-8 px-14 ' onSubmit={handleSubmit}>
            <div className='flex flex-col lg:flex-row justify-evenly flex-wrap gap-4'>
              <div className='flex flex-col gap-4 mt-4 lg:mt-0'>
                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='text'
                    className='grow'
                    placeholder='patient name'
                    name='patient_name'
                    value={formData.patient_name}
                    onChange={handleChange}
                  />
                </label>

                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='tel'
                    className='grow'
                    placeholder='mobile'
                    name='mobile_no'
                    value={formData.mobile_no}
                    onChange={handleChange}
                  />
                </label>

                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='number'
                    className='grow'
                    placeholder='age'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                  />
                </label>

              </div>

              <div className='flex flex-col gap-4 mt-4 lg:mt-0'>
                <label className='input input-bordered rounded flex items-center gap-4'>
                  <div className='flex items-center gap-2'>
                    <input
                      type='radio'
                      className='grow'
                      name='gender'
                      value="Male"
                      onChange={handleChange}
                      id='genderM'
                    />
                    <label htmlFor='genderM' className='text-neutral-400'>Male</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input
                      type='radio'
                      className='grow'
                      name='gender'
                      value="Female"
                      onChange={handleChange}
                      id='genderF'
                    />
                    <label htmlFor='genderF' className='text-neutral-400'>Female</label>
                  </div>
                </label>

                <label className='input input-bordered rounded flex items-center gap-2'>
                  <input
                    type='date'
                    className='grow text-neutral-400'
                    name='date_of_app'
                    onChange={handleChange}

                  />
                </label>
                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='time'
                    className='grow'
                    name='time_of_app'
                    onChange={handleChange}
                  />
                </label>
              </div>


            </div>
            <button className='btn rounded-full btn-primary text-primary-content font-semibold text-[1.2rem] w-52 mx-auto mt-4 py-1'>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAppointment
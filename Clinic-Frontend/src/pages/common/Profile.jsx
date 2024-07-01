import React, { useState, useRef } from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import defaultAvatar from "../../../public/avatar.png"
import { NavLink } from 'react-router-dom';
const Profile = ({ role }) => {
  const [profileImg, setProfileImg] = useState(defaultAvatar);
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword: ""
  })
  const handleSubmit = (e) => {
    console.log(formData);
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] })
  }
  const ref = useRef();
  return (
    <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold'>
      <h3 className='my-2 text-2xl font-bold text-neutral-content text-center'>{role} Profile</h3>
      <div className='flex items-center justify-center flex-col'>
        <div className='relative inline-block'>
          {/* Profile Image */}
          <img src={profileImg} alt="Profile image" className='rounded-full w-32' />

          {/* Add Photo Icon */}
          <MdAddPhotoAlternate
            size={"2rem"}
            className='cursor-pointer absolute bottom-0 right-0 m-1'
            onClick={() => ref.current.click()}
          />

          {/* Hidden File Input */}
          <input
            type="file"
            ref={ref}
            style={{ display: 'none' }}
            onChange={(event) => setProfileImg(URL.createObjectURL(event.target.files[0]))
            }
          />

        </div>
        <form className='flex flex-col gap-4 text-neutral-content py-8 px-14' onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col gap-4'>
              <label className='input input-bordered rounded flex items-center gap-1'>
                <input
                  type='text'
                  className='grow'
                  disabled
                  name='username'
                  value={role}
                  onChange={handleChange}
                />
              </label>
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

              <label className='input input-bordered rounded flex items-center gap-1'>
                <input
                  type='text'
                  className='grow'
                  placeholder='fullname'
                  name='fullname'
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </label>
              <label className='input input-bordered rounded flex items-center gap-1'>
                <input
                  type='tel'
                  className='grow'
                  placeholder='mobile'
                  name='mobile'
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className='flex flex-col gap-4'>
              <label className='input input-bordered rounded flex items-center gap-1'>
                <input
                  type='email'
                  className='grow'
                  placeholder='email'
                  name='email'
                  value={formData.email}
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
            </div>
          </div>
          <button className='btn rounded-full btn-primary text-primary-content font-semibold text-[1.2rem]'>Update</button>
        </form>
        <div>
          <p>Feeling like forgot password or password in weak <NavLink to='/user/changePassword'><a className='text-primary underline cursor-pointer'>Change Password</a></NavLink></p>
        </div>
      </div>

    </div>
  )
}

export default Profile
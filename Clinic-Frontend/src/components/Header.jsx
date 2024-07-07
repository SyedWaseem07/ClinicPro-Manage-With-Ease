import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoDark from "../assets/LogoDark.gif"
import LogoWhite from "../assets/LogoWhite.gif"
import { MdFormatListBulleted } from "react-icons/md";

const Header = ({ theme, setTheme, user }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className='max-w-[1240px] w-full mx-auto z-10 h-[16vh]'>

      <div className='px-2 md:px-4 flex md:justify-between items-center w-full justify-between'>
        {theme === "forest" ? <NavLink to="/"><img src={LogoDark} alt="dark Logo" className='h-36' /></NavLink> : <NavLink to="/"><img src={LogoWhite} alt="light Logo" className='h-36' /></NavLink>}
        <div className='lg:flex hidden justify-evenly items-center w-[50%] text-base-content '>
          <h2 className='cursor-pointer hover:bg-neutral px-2 py-1 rounded-full' onClick={() => {
            document.getElementById('doctorModal').showModal()
          }}>Doctor Functionalities</h2>
          <h2 className='cursor-pointer hover:bg-neutral px-2 py-1 rounded-full' onClick={() => {
            document.getElementById('receptionistModal').showModal()
            setChecked(false)
          }}>Receptionist Functionalities</h2>
          <h2 className='cursor-pointer hover:bg-neutral px-2 py-1 rounded-full' onClick={() => {
            document.getElementById('featuresModal').showModal()
            setChecked(false)
          }}>Features</h2>
          <h2 className='cursor-pointer hover:bg-neutral px-2 py-1 rounded-full' onClick={() => {
            document.getElementById('techStackModal').showModal()
            setChecked(false)
          }}>Stack Used</h2>
        </div>
        <div className='flex gap-4 z-[9999] items-center'>
          {user ? <NavLink to={`/user/${user.role}`}><button className='btn btn-primary hidden md:block'>{user.role.charAt(0).toUpperCase() + user.role.substring(1) + "'s Home"}</button></NavLink> : <NavLink to="/login"><button className='btn btn-primary hidden md:block'>Login</button></NavLink>}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value={theme} onClick={() => setTheme(theme === "forest" ? "wireframe" : "forest")} />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="drawer drawer-end lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={checked} />
            <div className="drawer-content">
              {/* <label htmlFor="my-drawer-4" className="drawer-button">Op</label> */}
              <label htmlFor="my-drawer-4" className="drawer-button" >
                < MdFormatListBulleted size={"2rem"} className="text-success cursor-pointer" onClick={() => setChecked(true)} />
              </label >
            </div>
            <div className="drawer-side" onClick={() => setChecked(false)}>
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li><a className='cursor-pointer hover:bg-neutral rounded-full' onClick={() => {
                  document.getElementById('doctorModal').showModal()
                  setChecked(false)
                }} >Doctor Functionalities</a></li>

                <li><a className='cursor-pointer hover:bg-neutral rounded-full' onClick={() => {
                  document.getElementById('receptionistModal').showModal()
                  setChecked(false)
                }}>Receptionist Functionalities</a></li>
                <li><a className='cursor-pointer hover:bg-neutral rounded-full' onClick={() => {
                  document.getElementById('featuresModal').showModal()
                  setChecked(false)
                }}>Features</a></li>
                <li><a className='cursor-pointer hover:bg-neutral rounded-full mb-2' onClick={() => {
                  document.getElementById('techStackModal').showModal()
                  setChecked(false)
                }}>Stack Used</a></li>
                {user ? <NavLink to={`/user/${user.role}`}><button className='btn btn-primary block md:hidden my-2 w-[80%] mx-auto'>{user.role.charAt(0).toUpperCase() + user.role.substring(1) + "'s Home"}</button></NavLink> : <NavLink to="/login"><button className='btn btn-primary block md:hidden w-[80%] mx-auto'>Login</button></NavLink>}
              </ul>
            </div>
          </div>
        </div>
        <dialog id="doctorModal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Doctor's Functionalities</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <dialog id="receptionistModal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Receptionist's Functionalities</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <dialog id="featuresModal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">ClinicPro Features</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <dialog id="techStackModal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">ClinicPro Tech Stack</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default Header
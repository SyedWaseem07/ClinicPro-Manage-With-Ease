import React, { useState } from 'react'
import AllPatientsPage from './AllPatientsPage'
import { allPatientDetails } from "../../../dummyData"
const SearchPatient = ({ fromSearch }) => {
  const [patientName, setPatientName] = useState('');


  return (
    <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold text-neutral-content'>
      <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Search Patient</h3>
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar my-4">
          <div className="input border-1 border-neutral-content my-4">
            <input className='w-[100%]' type="text" name="pateintName" id="ipBox" placeholder='name surname'
              value={patientName}
              onChange={e => setPatientName(e.target.value)}
            />
          </div>

        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16">
          {
            allPatientDetails.includes(allPatientDetails[2]) ?
              <AllPatientsPage allPatientDetails={[allPatientDetails[0]]} fromSearch={fromSearch} /> :
              <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'> Patient Not Found!!</h3>
          }

        </div>
      </div>
    </div>
  )
}

export default SearchPatient
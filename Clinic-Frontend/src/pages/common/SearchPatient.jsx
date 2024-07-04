import React, { useEffect, useState } from 'react'
import AllPatientsPage from './AllPatientsPage'
import { allPatientDetails } from "../../../dummyData"
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePatientsContext } from '../../context/PatientDetails.context';
import { useSearchedPatientsContext } from '../../context/searchedPatients.context';

const SearchPatient = ({ fromSearch, fromUpdate }) => {
  const [patientName, setPatientName] = useState('');
  const { filteredPatients, setFilteredPatients } = useSearchedPatientsContext();
  const { visitedPatients, setVisitedPatients } = usePatientsContext();
  const { data: patients, isLoading, isSuccess } = useQuery({ queryKey: ['allPatients'] })

  useEffect(() => {
    console.log(filteredPatients)
    if (isSuccess && (filteredPatients.length === 0 || visitedPatients.length === 0)) {
      setVisitedPatients(patients);
      setFilteredPatients(patients)
    }
  }, [isSuccess])


  const searchFunction = (e) => {
    setFilteredPatients([...visitedPatients.filter(patient => patient.patient_name.toLowerCase().includes(e.target.value.toLowerCase()))])
  }

  return (
    <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold text-neutral-content'>
      <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Search Patient</h3>
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar my-4">
          <div className="input border-1 border-neutral-content my-4">
            <input className='w-[100%]' type="text" name="pateintName" id="ipBox" placeholder='name surname'
              value={patientName}
              onChange={e => {
                setPatientName(e.target.value);
                searchFunction(e);
              }}
            />
          </div>

        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16">
          {
            filteredPatients ?
              <AllPatientsPage fromSearch={fromSearch} fromUpdate={fromUpdate} /> :
              <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'> Patient Not Found!!</h3>
          }

        </div>
      </div>
    </div>
  )
}

export default SearchPatient
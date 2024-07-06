
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSearchedPatientsContext } from "../context/searchedPatients.context"
import { useQuery } from "@tanstack/react-query"
const TableRow = ({ patients, fromSearch, fromUpdate }) => {
  const navigator = useNavigate();
  const { filteredPatients, setFilteredPatients } = useSearchedPatientsContext();
  const { data: authUser, isSuccess } = useQuery({ queryKey: ['authUser'] });
  const handleClick = (patient) => {
    console.log("row", fromSearch, fromUpdate)
    let url = '';
    if (fromSearch && fromUpdate) url = `/user/receptionist/update/${patient.patient_name}`
    else if (fromSearch) url = `/user/${authUser.role}/patientInfo/${patient.patient_name}/${fromSearch}`
    else url = `/user/${authUser.role}/patientInfo/${patient.patient_name}`
    navigator(url)
  }


  return (<>
    {
      (fromSearch || fromUpdate) ? filteredPatients && filteredPatients.map((patient, index) => (
        <tr className='border-b-2 border-primary-content cursor-pointer' key={nanoid()} onClick={() => handleClick(patient)}>
          <th key={nanoid()}>{index + 1}</th>
          <td key={nanoid()}>{patient.patient_name}</td>
          <td key={nanoid()} className='hidden md:block'>{patient.mobile_no}</td>
          <td key={nanoid()}>{patient.symptoms}</td>
          <td key={nanoid()} className='hidden md:block'>{patient.last_visited.substring(0, 10)}</td>
        </tr >)) : patients && patients.map((patient, index) => (
          <tr className='border-b-2 border-primary-content cursor-pointer' key={nanoid()} onClick={() => handleClick(patient)}>
            <th key={nanoid()}>{index + 1}</th>
            <td key={nanoid()}>{patient.patient_name}</td>
            <td key={nanoid()} className='hidden md:block'>{patient.mobile_no}</td>
            <td key={nanoid()}>{patient.symptoms}</td>
            <td key={nanoid()} className='hidden md:block'>{patient.last_visited.substring(0, 10)}</td>
          </tr >
        ))
    }
  </>)
}

export default TableRow

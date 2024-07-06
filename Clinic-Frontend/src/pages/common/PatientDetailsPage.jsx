import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const PatientDetailsPage = () => {
  const navigator = useNavigate();
  const { name, fromSearch, fromUpdate } = useParams();
  console.log(name, fromSearch, fromUpdate)

  const { data: authUser } = useQuery({ queryKey: ['authUser'] })
  const { data: details, isSuccess } = useQuery({
    queryKey: ['singlePatient'],
    queryFn: async () => {
      try {
        const res = await axios.get(`/api/v1/users/details/${name}`);
        return res.data.data;
      } catch (error) {
        toast.error(error.message);
        return null;
      }
    }
  })

  if (!isSuccess) return (<div className='skeleton bg-black lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold rounded-lg'>
    <div className="skeleton bg-[#28282B] absolute w-16 h-9"
    ></div>
    <div className='skeleton bg-[#28282B] my-4 text-2xl font-bold text-neutral-content text-center w-72 mx-auto h-8'></div>
    <div className='mockup-window bg-black skeleton  border border-neutral-300 w-[90%] mx-auto'>
      <div className="skeleton  px-4 pb-4  m bg-base text-gray-300">
        <div className="skeleton font-bold text-2xl text-center text-warning w-36 mx-auto h-8 bg-[#28282B]"></div>
        <div className='flex justify-between text-base my-4'>
          <h5 className='skeleton bg-[#28282B] w-28 h-6'></h5>
          <h5 className='skeleton bg-[#28282B] w-28 h-6'></h5>
          <h5 className='skeleton bg-[#28282B] w-28 h-6'></h5>
          <h5 className='skeleton bg-[#28282B] w-28'></h5>
        </div>
        <div className='mb-4 skeleton bg-[#28282B] w-96 h-6'></div>
        <div className='mb-4 skeleton bg-[#28282B] w-96 h-6'></div>
        <div className='mb-4 skeleton bg-[#28282B] w-96 h-6'></div>
        <h5 className='skeleton bg-[#28282B] w-28 h-6 mb-4'></h5>
        <div className='join flex gap-6 flex-wrap'>
          <div className='border-2 border-neutral-800 '>
            <h5 className='skeleton bg-[#28282B] w-28 h-6 m-4'></h5>
            <div className='skeleton bg-[#28282B] mx-4 mb-4 w-48 h-72'></div>
          </div>
          <div className='border-2 border-neutral-800 '>
            <h5 className='skeleton bg-[#28282B] w-28 h-6 m-4'></h5>
            <div className='skeleton bg-[#28282B] mx-4 mb-4 w-48 h-72'></div>
          </div>
          <div className='border-2 border-neutral-800 '>
            <h5 className='skeleton bg-[#28282B] w-28 h-6 m-4'></h5>
            <div className='skeleton bg-[#28282B] mx-4 mb-4 w-48 h-72'></div>
          </div>
        </div>
      </div>
    </div>
  </div >)

  return (<div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold rounded-lg h-[94vh]'>
    <button className="btn btn-primary absolute"
      onClick={() => {
        let url = '';
        if (fromSearch && fromUpdate) url = `/user/${authUser.role}/updatePatient`
        else if (fromSearch) url = `/user/${authUser.role}/searchPatient`
        else url = `/user/${authUser.role}/patients`
        navigator(url)
      }}
    >Back</button>
    <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>{fromSearch ? "Searched Patient Details" : "Visited Patient Details"}</h3>
    <div className='mockup-window bg-base-300 border border-neutral-300 w-[90%] mx-auto'>

      <div className="bg-base-200 px-4 pb-4  m bg-base text-gray-300">
        <h3 className="font-bold text-2xl text-center text-warning">{details.patient_name}</h3>
        <div className='flex justify-between text-base my-4'>
          <h5><span className='font-bold'>Mobile</span> - {details.mobile_no}</h5>
          <h5><span className='font-bold'>Age</span> - {details.age}</h5>
          <h5><span className='font-bold'>Weight</span> - {details.weight}</h5>
          <h5><span className='font-bold'>Gender</span> - {details.gender}</h5>
        </div>
        <div className='mb-4'>
          <span className='font-bold'>Symptoms </span>
          {details.symptoms.split(',').map(sym => <div className="badge badge-primary mr-3">{sym}</div>)}
        </div>
        <div className='mb-4 flex flex-wrap gap-3'>
          <span className='font-bold'>Prescriptions </span>
          {details.prescriptions && details.prescriptions.map(med => <div className="badge badge-primary mr-1">{med.medicine_name} : {med.dosage}</div>)}
        </div>
        <div className='mb-4'>
          <span className='font-bold'>Payment </span>
          {details.payment_details && details.payment_details.map(bill => <div className="badge badge-primary mr-1">{bill.date} : {bill.amount}</div>)}
        </div>
        <h5 className='font-bold mb-4'>Reports</h5>
        <div className='join flex gap-6 flex-wrap'>
          {details.report.map(rep => (
            <div className='border-2 border-neutral-800 '>
              <p className='my-4 mx-4'>{rep.report_name}</p>
              <img src={rep.url} alt={rep.report_name} className='mx-4 mb-4' />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>)
}

export default PatientDetailsPage
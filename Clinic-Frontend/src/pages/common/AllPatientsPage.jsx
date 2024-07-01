import React from 'react'
import useUID from '../../hooks/useNanoIdHook'
import { NavLink, Navigate } from 'react-router-dom'
const AllPatientsPage = ({ allPatientDetails, fromHome, fromSearch }) => {
  return (
    <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold'>
      {fromHome && <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Visited Patient Details</h3>}
      <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Visited Patient Details</h3>
      <table className="table bg-neutral text-neutral-content table-xs md:table-md">
        {/* head */}
        <thead className='font-bold text-neutral-content'>
          <tr className='border-b-2 border-primary-content'>
            <th>Sr. No.</th>
            <th>Name</th>
            <th className='hidden md:block'>Mobile No.</th>
            <th>Symptoms</th>
            <th className='hidden md:block'>Last Visited</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            allPatientDetails.map((patient, index) => (
              <tr className='border-b-2 border-primary-content cursor-pointer' key={useUID()} onClick={() => document.getElementById(`${index}modal`).showModal()}>
                <th key={useUID()}>{index + 1}</th>
                <td key={useUID()}>{patient.patient_name}</td>
                <td key={useUID()} className='hidden md:block'>{patient.mobile_no}</td>
                <td key={useUID()}>{patient.symptoms}</td>
                <td key={useUID()} className='hidden md:block'>{patient.last_visited}</td>
                <dialog id={index + "modal"} className="modal">
                  <div className="modal-box border-2 border-neutral-content bg-base text-gray-300">
                    <h3 className="font-bold text-xl text-center">{patient.patient_name}</h3>
                    <div className='flex justify-between text-base my-4'>
                      <h5><span className='font-bold'>Mobile</span> - {patient.mobile_no}</h5>
                      <h5><span className='font-bold'>Age</span> - {patient.age}</h5>
                      <h5><span className='font-bold'>Weight</span> - {patient.weight}</h5>
                      <h5><span className='font-bold'>Gender</span> - {patient.gender}</h5>
                    </div>
                    <div className='mb-4'>
                      <span className='font-bold'>Symptoms </span>
                      {
                        patient.symptoms.split(',').map(sym => <div key={useUID()} className="badge badge-primary mr-3">{sym}</div>)
                      }
                    </div>
                    <div className='mb-4 flex flex-wrap gap-3'>
                      <span className='font-bold'>Prescriptions </span>
                      {
                        patient.prescriptions.map(med => <div key={useUID()} className="badge badge-primary mr-1">{med.medicine_name} : {med.dosage}</div>)
                      }
                    </div>
                    <div className='mb-4'>
                      <span className='font-bold'>Payment </span>
                      {
                        patient.payment_details.map(bill => <div key={useUID()} className="badge badge-primary mr-1">{bill.date} : {bill.amount}</div>)
                      }
                    </div>
                    <h5 className='font-bold mb-4'>Reports</h5>
                    <div className='join flex gap-6 flex-auto'>
                      {
                        patient.report.map(rep => (
                          <div className="w-[50%]">
                            <img
                              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                              className="w-full" />
                            <p>{rep.report_name}</p>
                          </div>
                        ))
                      }
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn border-2 border-neutral-content mr-3">Close</button>
                        {fromSearch ? <NavLink to={`/user/receptionist/update/${patient.patient_name}`}><button className="btn border-2 border-neutral-content">Update</button></NavLink> : <></>}

                      </form>
                    </div>
                  </div>
                </dialog>
              </tr>
            ))
          }
          {/* row 2 */}

        </tbody>
      </table>
    </div>
  )
}

export default AllPatientsPage
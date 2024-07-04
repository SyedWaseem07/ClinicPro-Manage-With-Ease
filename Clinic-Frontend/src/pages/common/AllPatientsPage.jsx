import React, { useEffect } from 'react'


import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { usePatientsContext } from "../../context/PatientDetails.context"
import { useUpdatePatientsContext } from "../../context/UpdatePatient.context"
import TableRow from '../../components/TableRow';
import { useSearchedPatientsContext } from '../../context/searchedPatients.context'
let loader = true;
const AllPatientsPage = ({ fromHome, fromSearch, fromUpdate }) => {
  const { visitedPatients, setVisitedPatients } = usePatientsContext();
  const queryClient = useQueryClient();
  const { data: patients, isSuccess } = useQuery({
    queryKey: ['allPatients'],
    queryFn: async () => {
      try {
        const res = await axios.get('/api/v1/users/allPatientDetails');
        return res.data.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  })
  useEffect(() => {
    if (isSuccess && visitedPatients.length === 0) {
      setVisitedPatients(Array.from(patients));
    }
    if (isSuccess) queryClient.invalidateQueries(['authUser']);
  }, [isSuccess])


  if (!isSuccess) return (<table className="skeleton table  table-xs md:table-md lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold">
    <thead className='font-bold text-neutral-content'>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
    </thead>
    <tbody>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>

      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
      <tr className='border-b-2 border-primary-content'>
        <th></th>
        <th></th>
        <th className='hidden md:block'></th>
        <th></th>
        <th className='hidden md:block'></th>
      </tr>
    </tbody>
  </table>)
  return (
    <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold'>
      {fromHome && <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Visited Patient Details</h3>}
      {fromSearch && <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Searched Patient Details</h3>}
      <table className="table bg-neutral text-neutral-content table-xs md:table-md">
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


          {patients && (fromSearch || fromUpdate) && <TableRow fromSearch={fromSearch} fromUpdate={fromUpdate} />}
          {patients && <TableRow />}
        </tbody>
      </table>
    </div>
  );

  // return (
  //   <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold'>
  //     {fromHome && <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Visited Patient Details</h3>}
  //     {fromSearch && <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Searched Patient Details</h3>}
  //     <table className="table bg-neutral text-neutral-content table-xs md:table-md">
  //       {/* head */}
  //       <thead className='font-bold text-neutral-content'>
  //         <tr className='border-b-2 border-primary-content'>
  //           <th>Sr. No.</th>
  //           <th>Name</th>
  //           <th className='hidden md:block'>Mobile No.</th>
  //           <th>Symptoms</th>
  //           <th className='hidden md:block'>Last Visited</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {/* row 1 */}
  //         {
  //           !fromSearch && patients && patients?.map((patient, index) => (
  //             <tr className='border-b-2 border-primary-content cursor-pointer' key={useUID()} onClick={() => {
  //               document.getElementById(`${index}modal`).showModal();
  //             }}>
  //               <th key={useUID()}>{index + 1}</th>
  //               <td key={useUID()}>{patient.patient_name}</td>
  //               <td key={useUID()} className='hidden md:block'>{patient.mobile_no}</td>
  //               <td key={useUID()}>{patient.symptoms}</td>
  //               <td key={useUID()} className='hidden md:block'>{patient.last_visited}</td>
  //               <dialog id={index + "modal"} className="modal">
  //                 <div className="modal-box border-2 border-neutral-content bg-base text-gray-300">
  //                   <h3 className="font-bold text-xl text-center">{patient.patient_name}</h3>
  //                   <div className='flex justify-between text-base my-4'>
  //                     <h5><span className='font-bold'>Mobile</span> - {patient.mobile_no}</h5>
  //                     <h5><span className='font-bold'>Age</span> - {patient.age}</h5>
  //                     <h5><span className='font-bold'>Weight</span> - {patient.weight}</h5>
  //                     <h5><span className='font-bold'>Gender</span> - {patient.gender}</h5>
  //                   </div>
  //                   <div className='mb-4'>
  //                     <span className='font-bold'>Symptoms </span>
  //                     {
  //                       patient.symptoms.split(',').map(sym => <div key={useUID()} className="badge badge-primary mr-3">{sym}</div>)
  //                     }
  //                   </div>
  //                   <div className='mb-4 flex flex-wrap gap-3'>
  //                     <span className='font-bold'>Prescriptions </span>
  //                     {
  //                       patient.prescriptions && patient.prescriptions.map(med => <div key={useUID()} className="badge badge-primary mr-1">{med.medicine_name} : {med.dosage}</div>)
  //                     }
  //                   </div>
  //                   <div className='mb-4'>
  //                     <span className='font-bold'>Payment </span>
  //                     {
  //                       patient.payment_details && patient.payment_details.map(bill => <div key={useUID()} className="badge badge-primary mr-1">{bill.date} : {bill.amount}</div>)
  //                     }
  //                   </div>
  //                   <h5 className='font-bold mb-4'>Reports</h5>
  //                   <div className='join flex gap-6 flex-auto'>
  //                     {
  //                       patient.report.map(rep => (
  //                         <div className="w-[50%]">
  //                           <img
  //                             src={rep.url}
  //                             className="w-full" />
  //                           <p>{rep.report_name}</p>
  //                         </div>
  //                       ))
  //                     }
  //                   </div>
  //                   <div className="modal-action">
  //                     <form method="dialog">
  //                       {/* if there is a button in form, it will close the modal */}
  //                       <button className="btn border-2 border-neutral-content mr-3">Close</button>
  //                     </form>
  //                   </div>
  //                 </div>
  //               </dialog>
  //             </tr>
  //           ))
  //         }

  //         {
  //           fromSearch && searchedPatients && searchedPatients?.map((patient, index) => (
  //             <tr className='border-b-2 border-primary-content cursor-pointer' key={useUID()} onClick={() => document.getElementById(`${index}modal`).showModal()}>
  //               <th key={useUID()}>{index + 1}</th>
  //               <td key={useUID()}>{patient.patient_name}</td>
  //               <td key={useUID()} className='hidden md:block'>{patient.mobile_no}</td>
  //               <td key={useUID()}>{patient.symptoms}</td>
  //               <td key={useUID()} className='hidden md:block'>{patient.last_visited}</td>
  //               <dialog id={index + "modal"} className="modal"  >
  //                 <div className="modal-box border-2 border-neutral-content bg-base text-gray-300">
  //                   <h3 className="font-bold text-xl text-center">{patient.patient_name}</h3>
  //                   <div className='flex justify-between text-base my-4'>
  //                     <h5><span className='font-bold'>Mobile</span> - {patient.mobile_no}</h5>
  //                     <h5><span className='font-bold'>Age</span> - {patient.age}</h5>
  //                     <h5><span className='font-bold'>Weight</span> - {patient.weight}</h5>
  //                     <h5><span className='font-bold'>Gender</span> - {patient.gender}</h5>
  //                   </div>
  //                   <div className='mb-4'>
  //                     <span className='font-bold'>Symptoms </span>
  //                     {
  //                       patient.symptoms.split(',').map(sym => <div key={useUID()} className="badge badge-primary mr-3">{sym}</div>)
  //                     }
  //                   </div>
  //                   <div className='mb-4 flex flex-wrap gap-3'>
  //                     <span className='font-bold'>Prescriptions </span>
  //                     {
  //                       patient.prescriptions.map(med => <div key={useUID()} className="badge badge-primary mr-1">{med.medicine_name} : {med.dosage}</div>)
  //                     }
  //                   </div>
  //                   <div className='mb-4'>
  //                     <span className='font-bold'>Payment </span>
  //                     {
  //                       patient.payment_details && patient.payment_details.map(bill => <div key={useUID()} className="badge badge-primary mr-1">{bill.date} : {bill.amount}</div>)
  //                     }
  //                   </div>
  //                   <h5 className='font-bold mb-4'>Reports</h5>
  //                   <div className='join flex gap-6 flex-auto'>
  //                     {
  //                       patient.report.map(rep => (
  //                         <div className="w-[50%]">
  //                           <img
  //                             src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
  //                             className="w-full" />
  //                           <p>{rep.report_name}</p>
  //                         </div>
  //                       ))
  //                     }
  //                   </div>
  //                   <div className="modal-action">
  //                     <form method="dialog">
  //                       {/* if there is a button in form, it will close the modal */}
  //                       <button className="btn border-2 border-neutral-content mr-3">Close</button>
  //                       {fromSearch && fromUpdate ? <NavLink to={`/user/receptionist/update/${patient.patient_name}`}
  //                       ><button className="btn border-2 border-neutral-content"
  //                         onClick={(e) => {
  //                           setUpdatePatientDetails(searchedPatients);
  //                           console.log(updatePatientDetails)
  //                         }}
  //                       >Update</button></NavLink> : <></>}

  //                     </form>
  //                   </div>
  //                 </div>
  //               </dialog>
  //             </tr>
  //           ))
  //         }
  //         {/* row 2 */}

  //       </tbody>
  //     </table>
  //   </div >

  // )
}

export default AllPatientsPage
import React, { useState } from 'react'
import { appointments, todaysAppointments } from "../../../dummyData"
const AllAppointmentsPage = () => {
  const [showTodaysApp, setShowTodaysApp] = useState(true);
  const [showAllApp, setShowAllApp] = useState(false);
  return (
    <div className='md:w-[70%]  w-[100%] px-5 md:px-0 mx-auto mt-7 font-semibold' data-theme="cupcake">
      <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Appointment Details</h3>
      <div className="collapse collapse-plus  border-b-2 border-primary bg-neutral text-neutral-content">
        <input type="radio" name="my-accordion-3" checked={showTodaysApp} onClick={() => {
          setShowAllApp(false)
          setShowTodaysApp(prev => !prev)
        }} />
        <div className="collapse-title text-xl font-medium">
          Today's Appointments
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table bg-secondary text-secondary-content  table-xs md:table-sm font-semibold">
              {/* head */}
              <thead className='text-secondary-content'>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Mobile No.</th>
                  <th className='hidden md:block'>Age</th>
                  <th className='hidden md:block'>Gender</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  todaysAppointments.map((appointment, index) => (
                    <tr key={index}>
                      <th key={index + 1}>{index + 1}</th>
                      <td key={index + 2}>{appointment.patient_name}</td>
                      <td key={index + 3}>{appointment.mobile_no}</td>
                      <td key={index + 4} className='hidden md:block'>{appointment.age}</td>
                      <td key={index + 5} className='hidden md:block'>{appointment.gender}</td>
                      <td key={index + 6}>{appointment.date_of_app}</td>
                      <td key={index + 7}>{appointment.time_of_app}</td>
                    </tr>
                  ))
                }
                {/* row 2 */}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus border-b-2 border-primary bg-neutral text-neutral-content mt-4">
        <input type="radio" name="my-accordion-3" checked={showAllApp} onClick={() => {
          setShowTodaysApp(false);
          setShowAllApp(prev => !prev)
        }} />
        <div className="collapse-title text-xl font-medium">
          All Appointments
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table bg-secondary text-secondary-content table-xs md:table-sm">
              {/* head */}
              <thead className='text-secondary-content'>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Mobile No.</th>
                  <th className='hidden md:block'>Age</th>
                  <th className='hidden md:block'>Gender</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  appointments.map((appointment, index) => (
                    <tr className="" key={index}>
                      <th key={index + 1}>{index + 1}</th>
                      <td key={index + 2}>{appointment.patient_name}</td>
                      <td key={index + 3}>{appointment.mobile_no}</td>
                      <td key={index + 4} className='hidden md:block'>{appointment.age}</td>
                      <td key={index + 5} className='hidden md:block'>{appointment.gender}</td>
                      <td key={index + 6}>{appointment.date_of_app}</td>
                      <td key={index + 7}>{appointment.time_of_app}</td>
                    </tr>
                  ))
                }
                {/* row 2 */}

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AllAppointmentsPage
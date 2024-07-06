import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePatientsContext } from "../../context/PatientDetails.context"
import axios from 'axios';
import toast from 'react-hot-toast';
import { nanoid } from "nanoid"
import { NavLink } from 'react-router-dom';
let temp = []
const AllAppointmentsPage = () => {
  const [showTodaysApp, setShowTodaysApp] = useState(true);
  const [showAllApp, setShowAllApp] = useState(false);
  const { visitedPatients } = usePatientsContext();
  const queryClient = useQueryClient();
  const [names, setNames] = useState([]);
  const { data: allAppointments, isSuccess: allAppLoading, refetch, isRefetchError: allReftchError } = useQuery({
    queryKey: ['allAppointments'],
    queryFn: async () => {
      try {
        console.log("called all")

        const res = await axios.get('/api/v1/users/appointments');
        return res.data.data;
      } catch (error) {
        toast.error("unable to fetch Todays Appointments")
        return [];
      }
    }
  })
  const { data: todaysAppointments, isSuccess: dailyAppLoading, refetch: todayReftech, isRefetchError: todaysRefetchError } = useQuery({
    queryKey: ['todaysAppointments'],
    queryFn: async () => {
      try {
        console.log("called today")
        const res = await axios.get('/api/v1/users/dailyAppointments');
        return res.data.data;
      } catch (error) {
        toast.error("unable to fetch Todays Appointments")
        return [];
      }
    }
  })

  useEffect(() => {
    refetch();
    todayReftech();
    if (todaysRefetchError || allReftchError) {
      toast.error("Unable to get appointments");
      return;
    }
    if (!dailyAppLoading || !allAppLoading) queryClient.invalidateQueries({ queryKey: ['authUser'] })

    visitedPatients.map(item => {
      temp.push(item.patient_name)
    })
    setNames(temp);
  }, [])

  if (!dailyAppLoading || !allAppLoading) return (<div className='skeleton md:w-[70%]  w-[100%] px-5 md:px-0 mx-auto mt-7 font-semibold'>
    <h3 className='skeleton my-4 text-2xl font-bold text-neutral-content text-center'></h3>
    <div className='skeleton md:w-[70%]  w-[100%] px-5 md:px-0 mx-auto mt-7 font-semibold bg-neutral'>
      <h3 className='skeleton my-4'></h3>
      <div className="skeleton collapse collapse-plus border-b-2 border-primary">
        <input type="radio" name="my-accordion-3" checked />
        <div className="skeleton collapse-title">
        </div>
        <div className="skeleton bg-neutral">
          <div className="skeleton overflow-x-auto bg-neutral">
            <table className="skeleton table table-xs md:table-sm font-semibold">
              {/* head */}
              <thead className='skeleton '>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <th className='skeleton'></th>
                  <th className='skeleton'></th>
                  <th className='hidden md:block skeleton'></th>
                  <th className='hidden md:block skeleton'></th>
                  <th className='skeleton'></th>
                  <th className='skeleton'></th>
                </tr>
              </thead>
              <tbody className='skeleton'>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className='skeleton md:w-[70%]  w-[100%] px-5 md:px-0 mx-auto mt-7 font-semibold'>
      <h3 className='skeleton my-4'></h3>
      <div className="skeleton collapse collapse-plus  border-b-2 border-primary">
        <input type="radio" name="my-accordion-3" checked={showTodaysApp} onClick={() => {
          setShowAllApp(false)
          setShowTodaysApp(prev => !prev)
        }} />
        <div className="skeleton collapse-title">
        </div>
        <div className="skeleton collapse-content">
          <div className="skeleton overflow-x-auto">
            <table className="skeleton table table-xs md:table-sm font-semibold">
              {/* head */}
              <thead className='skeleton '>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <th className='skeleton'></th>
                  <th className='skeleton'></th>
                  <th className='hidden md:block skeleton'></th>
                  <th className='hidden md:block skeleton'></th>
                  <th className='skeleton'></th>
                  <th className='skeleton'></th>
                </tr>
              </thead>
              <tbody className='skeleton'>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
                <tr className='skeleton'>
                  <th className='skeleton'></th>
                  <td className='skeleton'></td>
                  <td className='skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='hidden md:block skeleton'></td>
                  <td className='skeleton'></td>
                  <td className=' skeleton'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>)
  return (
    <div className='md:w-[70%]  w-[100%] px-5 md:px-0 mx-auto mt-7 font-semibold' data-theme="cupcake">
      <h3 className='my-4 text-2xl font-bold text-neutral-content text-center'>Appointment Details</h3>
      <div className="collapse collapse-plus  border-b-2 border-primary bg-neutral text-neutral-content">
        <input type="radio" name="my-accordion-3" defaultChecked={showTodaysApp} onClick={() => {
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
                  todaysAppointments && todaysAppointments.map((appointment, index) => (
                    <div className="dropdown dropdown-end w-full">
                      <tr key={nanoid()} tabIndex={0} role="button" className='grid grid-cols-7 text-center'>
                        <th>{index + 1}</th>
                        <td>{appointment.patient_name}</td>
                        <td>{appointment.mobile_no}</td>
                        <td className='hidden md:block'>{appointment.age}</td>
                        <td className='hidden md:block'>{appointment.gender}</td>
                        <td>{appointment.date_of_app.substring(0, 10)}</td>
                        <td>{Number(appointment.time_of_app.substring(0, 2)) > 12 ? appointment.time_of_app.substring(0, 10) + " PM" : appointment.time_of_app.substring(0, 10) + " AM"}</td>
                      </tr>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow text-neutral-content">
                        <li className='hover:bg-success hover:text-success-content hover:rounded-full'><a>{names.includes(appointment.patient_name) ? "Update Details" : "Add Details"}</a></li>
                        <li className='hover:bg-error hover:text-error-content hover:rounded-full'><a>Delete</a></li>
                      </ul>
                    </div>
                  ))
                }
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

                <tr className='grid grid-cols-7 md:grid-cols-9 text-center'>
                  <th>Sr. No.</th>
                  <th className='col-span-2'>Name</th>
                  <th className='col-span-2'>Mobile No.</th>
                  <th className='hidden md:block'>Age</th>
                  <th className='hidden md:block'>Gender</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>

              </thead>
              <tbody>
                {
                  allAppointments && allAppointments?.map((appointment, index) => (
                    <div className="dropdown dropdown-end w-full">
                      <tr key={nanoid()} tabIndex={0} role="button" className='grid grid-cols-7 md:grid-cols-9 text-center'>
                        <th>{index + 1}</th>
                        <td className='col-span-2'>{appointment.patient_name}</td>
                        <td className='col-span-2'>{appointment.mobile_no}</td>
                        <td className='hidden md:block'>{appointment.age}</td>
                        <td className='hidden md:block'>{appointment.gender}</td>
                        <td>{appointment.date_of_app.substring(0, 10)}</td>
                        <td>{Number(appointment.time_of_app.substring(0, 2)) > 12 ? appointment.time_of_app.substring(0, 10) + " PM" : appointment.time_of_app.substring(0, 10) + " AM"}</td>
                      </tr>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow text-neutral-content">
                        <NavLink to={`/user/receptionist/${names.includes(appointment.patient_name) ? "update" : "addPatient"}/${appointment.patient_name}`}><li className='hover:bg-success hover:text-success-content hover:rounded-full'><a>{names.includes(appointment.patient_name) ? "Update Details" : "Add Details"}</a></li></NavLink>
                        <li className='hover:bg-error hover:text-error-content hover:rounded-full'><a>Delete</a></li>
                      </ul>
                    </div>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AllAppointmentsPage
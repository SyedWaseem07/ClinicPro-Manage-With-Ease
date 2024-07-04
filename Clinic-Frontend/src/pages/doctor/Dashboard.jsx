import React, { useEffect } from 'react'
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlinePostAdd } from "react-icons/md";
import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"
const Dashboard = () => {
  const { data: revenue, isSuccess: isRevenueLoading } = useQuery({
    queryKey: ['revenueInfo'],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/v1/users/doctor/revenueInfo");
        return res.data.data;
      } catch (error) {
        toast.error("Unable to fetch revenue info");
        return {};
      }
    }
  })
  const { data: patientCount, isSuccess: isPatientCountLoading } = useQuery({
    queryKey: ['PatientCount'],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/v1/users/doctor/patientCountInfo");
        return res.data.data;
      } catch (error) {
        toast.error("Unable to fetch patient count info");
        return {};
      }
    }
  })
  const { data: avgAppointments, isSuccess: isAverageAppointmentsLoading } = useQuery({
    queryKey: ['AverageAppointments'],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/v1/users/doctor/averageAppointments");
        return res.data.data;
      } catch (error) {
        toast.error("Unable to fetch average appointments info");
        return {};
      }
    }
  })
  // useEffect(() => {

  // }, [])
  return (
    <div className='lg:w-[70%] px-5 pb-10 md:px-0 w-full  mx-auto mt-7 font-semibold mb-8 md:mb-0'>
      <h3 className='my-2 text-2xl font-bold text-neutral-content text-center'>Clinic Statistics</h3>
      <div className='flex items-center my-2 flex-col w-[100%]'>
        <div className='flex flex-col w-full mx-auto'>
          <h4 className='mt-1 mb-2 text-lg text-center'>Revenue Stats</h4>
          {isRevenueLoading && <div className="stats stats-vertical lg:stats-horizontal shadow bg-neutral mx-auto">
            <div className="stat mx-auto">
              <div className="stat-figure text-primary">
                <GiReceiveMoney size={30} />
              </div>
              <div className="stat-title">Daily Revenue</div>
              <div className="stat-value text-primary">{revenue[0].count}</div>
              <div className="stat-desc">{Math.abs(revenue[0].difference)}{revenue[0].difference > 0 ? " more than last day" : " less than last day"} </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <RiMoneyRupeeCircleLine size={30} />
              </div>
              <div className="stat-title">Weekly Revenue</div>
              <div className="stat-value text-secondary">{revenue[1].count}</div>
              <div className="stat-desc">{Math.abs(revenue[1].difference)}{revenue[1].difference > 0 ? " more than last week" : " less than last week"}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <GiReceiveMoney size={30} />
              </div>
              <div className="stat-title">Monthly Revenue</div>
              <div className="stat-value text-secondary">{revenue[2].count}</div>
              <div className="stat-desc">{Math.abs(revenue[2].difference)}{revenue[2].difference > 0 ? " more than last month" : " less than last month"}</div>
            </div>
          </div>}
        </div>
        <div className="divider divider-neutral"></div>

        <div className='flex flex-col w-full mx-auto'>
          <h4 className='mt-1 mb-2 text-lg text-center'>Appointments Stats</h4>
          {isAverageAppointmentsLoading && <div className="stats stats-vertical shadow bg-neutral lg:stats-horizontal mx-auto">
            <div className="stat mx-auto">
              <div className="stat-figure text-primary">
                <MdOutlinePostAdd size={30} />
              </div>
              <div className="stat-title">Average Appointments</div>
              <div className="stat-value text-primary">{avgAppointments.Average_Appointments}</div>
              <div className="stat-desc">{Math.abs(avgAppointments.difference)}{avgAppointments.difference > 0 ? " more than last day" : " less than last day"}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary" >
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div >

          </div>}
        </div>
        <div className="divider divider-neutral"></div>

        <div className='flex flex-col'>
          <h4 className='mt-1 mb-2 text-lg text-center'>Patients Visit Stats</h4>
          {isPatientCountLoading && <div className="stats stats-vertical lg:stats-horizontal shadow bg-neutral">
            <div className="stat">
              <div className="stat-figure text-primary">
                <FiUserPlus size={30} />
              </div>
              <div className="stat-title">Daily visits</div>
              <div className="stat-value text-primary">{patientCount[0].count}</div>
              <div className="stat-desc">{Math.abs(patientCount[0].difference)}{patientCount[0].difference > 0 ? " more than last day" : " less than last day"}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FiUserPlus size={30} />
              </div>
              <div className="stat-title">Weekly visits</div>
              <div className="stat-value text-secondary">{patientCount[1].count}</div>
              <div className="stat-desc">{Math.abs(patientCount[1].difference)}{patientCount[1].difference > 0 ? " more than last week" : " less than last week"}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FiUserPlus size={30} />

              </div>
              <div className="stat-title">Monthly visits</div>
              <div className="stat-value text-secondary">{patientCount[2].count}</div>
              <div className="stat-desc">{Math.abs(patientCount[2].difference)}{patientCount[2].difference > 0 ? " more than last month" : " less than last month"}</div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard


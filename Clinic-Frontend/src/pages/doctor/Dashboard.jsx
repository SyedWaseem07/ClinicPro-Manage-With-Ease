import React from 'react'
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlinePostAdd } from "react-icons/md";
const Dashboard = () => {
  return (
    <div className='lg:w-[70%] px-5 pb-10 md:px-0 w-full  mx-auto mt-7 font-semibold mb-8 md:mb-0'>
      <h3 className='my-2 text-2xl font-bold text-neutral-content text-center'>Clinic Statistics</h3>
      <div className='flex items-center my-2 flex-col w-[100%]'>
        <div className='flex flex-col w-full mx-auto'>
          <h4 className='mt-1 mb-2 text-lg text-center'>Revenue Stats</h4>
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-neutral mx-auto">
            <div className="stat mx-auto">
              <div className="stat-figure text-primary">
                <GiReceiveMoney size={30} />
              </div>
              <div className="stat-title">Daily Revenue</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <RiMoneyRupeeCircleLine size={30} />
              </div>
              <div className="stat-title">Weekly Revenue</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <GiReceiveMoney size={30} />
              </div>
              <div className="stat-title">Monthly Revenue</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
        <div className="divider divider-neutral"></div>

        <div className='flex flex-col w-full mx-auto'>
          <h4 className='mt-1 mb-2 text-lg text-center'>Appointments Stats</h4>
          <div className="stats stats-vertical shadow bg-neutral lg:stats-horizontal mx-auto">
            <div className="stat mx-auto">
              <div className="stat-figure text-primary">
                <MdOutlinePostAdd size={30} />
              </div>
              <div className="stat-title">Average Appointments</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
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

          </div>
        </div>
        <div className="divider divider-neutral"></div>

        <div className='flex flex-col'>
          <h4 className='mt-1 mb-2 text-lg text-center'>Patients Visit Stats</h4>
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-neutral">
            <div className="stat">
              <div className="stat-figure text-primary">
                <FiUserPlus size={30} />
              </div>
              <div className="stat-title">Daily visits</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FiUserPlus size={30} />
              </div>
              <div className="stat-title">Weekly visits</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FiUserPlus size={30} />

              </div>
              <div className="stat-title">Monthly visits</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


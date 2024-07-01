import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AllAppointmentsPage from './pages/common/AllAppointmentsPage'
import AllPatientsPage from './pages/common/AllPatientsPage'
import Navbar from './components/Navbar'
import SearchPatient from './pages/common/SearchPatient'
import { allPatientDetails } from "../dummyData"
import Profile from './pages/common/Profile'
import ChangePassword from './pages/common/ChangePassword'
import AddPatientDetails from './pages/receptionist/AddPatientDetails'
import AddAppointment from './pages/receptionist/AddAppointment'
import UpdatePatientDetails from './pages/receptionist/UpdatePatientDetails'
import Dashboard from './pages/doctor/Dashboard'
const App = () => {
  const [theme, setTheme] = useState('forest');
  const user = true;
  return (
    <div className='flex w-full mb-10 md:mb-0' data-theme={theme}>
      {user && <Navbar role={"receptionist"} theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='user'>
          <Route path='appointments' element={<AllAppointmentsPage />} />
          <Route path='patients' element={<AllPatientsPage allPatientDetails={allPatientDetails} />} />
          <Route path='searchPatient' element={<SearchPatient />} />
          <Route path='profile' element={<Profile role={"receptionist"} />} />
          <Route path='changePassword' element={<ChangePassword />} />

          <Route path='receptionist' >
            <Route path='' element={<AllAppointmentsPage />} />
            <Route path='updatePatient' element={<SearchPatient fromSearch={true} />} />
            <Route path='addPatient' element={<AddPatientDetails />} />
            <Route path='addAppointment' element={<AddAppointment />} />
            <Route path='update/:id' element={<UpdatePatientDetails />} />
          </Route>

          <Route path='doctor' element={<Dashboard />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App

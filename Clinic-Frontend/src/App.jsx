import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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
import { Toaster } from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import PatientDetailsPage from './pages/common/PatientDetailsPage'
const App = () => {
  const [theme, setTheme] = useState('forest');
  const { data: authUser, isLoading } = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      try {
        const res = await axios.get('/api/v1/users/getCurrentUser');
        return res.data.data;
      } catch (error) {
        return null;
      }
    }
  })
  return (
    <div className='flex w-full mb-10 md:mb-0' data-theme={theme}>
      {authUser && <Navbar user={authUser} theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={`/user/${authUser.role}/`} />} />
        <Route path='user'>
          <Route path='receptionist' >
            <Route path='' element={authUser && authUser.role === "receptionist" ? <AllAppointmentsPage /> : <Navigate to="/login" />} />
            <Route path='updatePatient' element={authUser && authUser.role === "receptionist" ? <SearchPatient fromSearch={true} fromUpdate={true} /> : <Navigate to="/login" />} />
            <Route path='addPatient' element={authUser && authUser.role === "receptionist" ? <AddPatientDetails /> : <Navigate to="/login" />} />
            <Route path='addAppointment' element={authUser && authUser.role === "receptionist" ? <AddAppointment /> : <Navigate to="/login" />} />
            <Route path='update/:name' element={authUser && authUser.role === "receptionist" ? <UpdatePatientDetails /> : <Navigate to="/login" />} />
            <Route path='patients' element={authUser && authUser.role === "receptionist" ? <AllPatientsPage fromHome={true} /> : <Navigate to="/login" />} />
            <Route path='searchPatient' element={authUser ? <SearchPatient fromSearch={true} /> : <Navigate to="/login" />} />
            <Route path='profile' element={authUser && authUser.role === "receptionist" ? <Profile /> : <Navigate to="/login" />} />
            <Route path='changePassword' element={authUser && authUser.role === "receptionist" ? <ChangePassword /> : <Navigate to="/login" />} />
            <Route path='patientInfo/:name/:fromSearch/:fromUpdate' element={authUser && authUser.role === "receptionist" ? <PatientDetailsPage /> : <Navigate to="/login" />} />
            <Route path='patientInfo/:name/' element={authUser && authUser.role === "receptionist" ? <PatientDetailsPage /> : <Navigate to="/login" />} />
            <Route path='patientInfo/:name/:fromSearch' element={authUser && authUser.role === "receptionist" ? <PatientDetailsPage /> : <Navigate to="/login" />} />
            <Route path='patientInfo/:name/:fromUpdate' element={authUser && authUser.role === "receptionist" ? <PatientDetailsPage /> : <Navigate to="/login" />} />
          </Route>
          <Route path='doctor' >
            <Route path='' element={authUser && authUser.role === "doctor" ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path='patients' element={authUser && authUser.role === "doctor" ? <AllPatientsPage fromHome={true} /> : <Navigate to="/login" />} />
            <Route path='searchPatient' element={authUser && authUser.role === "doctor" ? <SearchPatient fromSearch={true} /> : <Navigate to="/login" />} />
            <Route path='profile' element={authUser && authUser.role === "doctor" ? <Profile /> : <Navigate to="/login" />} />
            <Route path='changePassword' element={authUser && authUser.role === "doctor" ? <ChangePassword /> : <Navigate to="/login" />} />
            <Route path='appointments' element={authUser && authUser.role === "doctor" ? <AllAppointmentsPage /> : <Navigate to="/login" />} />
            <Route path='patientInfo/:name/' element={authUser && authUser.role === "doctor" ? <PatientDetailsPage /> : <Navigate to="/login" />} />
            <Route path='patientInfo/:name/:fromSearch' element={authUser && authUser.role === "doctor" ? <PatientDetailsPage /> : <Navigate to="/login" />} />
            <Route path='patientInfo/:name/:fromUpdate' element={authUser && authUser.role === "doctor" ? <PatientDetailsPage /> : <Navigate to="/login" />} />
            <Route path='profile' element={authUser && authUser.role === "doctor" ? <Profile /> : <Navigate to="/login" />} />
          </Route>
        </Route>

      </Routes>
      <Toaster />
    </div>
  )
}

export default App

import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { Navigate, Route, Routes } from 'react-router-dom'
import Appointment from './pages/Appointment'
import Dashboard from './pages/Dashboard'
import Doctors from './pages/Doctors'
import DoctorDashboard from './pages/DoctorDashboard'
import Careers from './pages/Careers'
import AppointmentsRecieved from './pages/AppointmentsRecieved'
import Jobs from './pages/Jobs'
import ApplicationReceived from './pages/ApplicationReceived'
import DoctorAdmin from './pages/DoctorAdmin'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctordashboard' element={<DoctorDashboard/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/appointmentsreceived' element={<AppointmentsRecieved/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/applicationreceived' element={<ApplicationReceived/>}/>
      <Route path='/doctoradmin' element={<DoctorAdmin/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>

    <Footer/>

    </>
  )
}

export default App

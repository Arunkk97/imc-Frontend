import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { Navigate, Route, Routes } from 'react-router-dom'
import Appointment from './pages/Appointment'
import Dashboard from './pages/Dashboard'
import Doctors from './pages/Doctors'

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
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>

    <Footer/>

    </>
  )
}

export default App

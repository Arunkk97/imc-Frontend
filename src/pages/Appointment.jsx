import React from 'react'
import Header from '../components/Header'
import AppointHead from '../components/AppointHead'

function Appointment() {
  return (
    <>
   <Header insideAuth={true}/>
    <AppointHead/>
    </>
  )
}

export default Appointment
//USER DASHBOARD  USER DASHBOARD  USER DASHBOARD  USER DASHBOARD  USER DASHBOARD  USER DASHBOARD 

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUSerAppointmentsAPI } from '../services/allAPI'
import Usernav from '../components/Usernav'
import userDash from '../assets/userDash.png'


function DoctorDashboard() {

    const [displayName, setDisplayName] = useState("")
    const [userAppointment, setUserAppointment] = useState([])
    console.log(userAppointment);

    useEffect(() => {
        getUserAppointment()
        if (sessionStorage.getItem("existingUser")) {
            const { username } = JSON.parse(sessionStorage.getItem("existingUser"))
            setDisplayName(username)

        } else {
            setDisplayName("")
        }
    }, [])


    const getUserAppointment = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getUSerAppointmentsAPI(reqHeader)
            console.log(result);
            if (result.status == 200) {
                setUserAppointment(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Usernav />

            <div className=' mt-5 '>
                <h2 className='ms-5 fw-bolder'>Welcome  <span className='text-primary'> {displayName},</span></h2>
            </div>

            <div className='appoint mt-5 d-flex justify-content-center'>
                <div className="col-lg-6">
                    <img style={{ height: '400px' }} className='w-100' src={'https://jivandeep.org/image/home-img.svg'} alt="" />
                </div>
                <div className="col-lg-6 ">
                   <div className='mt-20'>
                         <h1 className='fw-bolder '>Stay Safe,Stay Healthy</h1>
                        <Link to={'/appointment'}> <button className='btn btn-success rounded mt-2'>Book Appointment</button></Link>
                   </div>

                </div>
                
            </div>


            <div className="container ">
                <h3 className='fw-bolder text-warning mt-5'>Appointment History</h3>

                <div className='container table-responsive'>
                    <table className='table shadow mt-5  '>
                        <thead>
                            <tr>
                                <th>Sl No.</th>
                                <th>PATIENT</th>
                                <th>DATE</th>
                                <th>DOCTOR</th>
                                <th>DEPARTMENT</th>
                                {/* <th>STATUS</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {userAppointment?.length > 0 ?
                                userAppointment?.map((appoint, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{appoint.name}</td>
                                        <td>{appoint.appointmentDate}</td>
                                        <td>{appoint.doctor}</td>
                                        <td>{appoint.department}</td>

                                    </tr>
                                )) :
                                <div className='text-danger fw-bolder'>Nothing to display</div>
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default DoctorDashboard
import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import { getAllAppointmentsAPI } from '../services/allAPI'

function AppointmentsRecieved() {
    const [allAppointments, setAllAppointments] = useState([])

    useEffect(() => {
        getAllAppointments()
    }, [])

    const getAllAppointments = async () => {
        try {
            const result = await getAllAppointmentsAPI()
            console.log(result);
            if (result.status == 200) {
                setAllAppointments(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    console.log(allAppointments);

    return (
        <>
            <DashboardNav />

            <div className='container'>
                <h2 className='text-warning fw-bolder mt-5'>Appointments Received</h2>
            </div>

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
                        {allAppointments?.length > 0 ?
                            allAppointments?.map((appoint, index) => (
                                <tr key={index} >
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
        </>
    )
}

export default AppointmentsRecieved
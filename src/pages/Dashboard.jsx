import React from 'react'
import DashboardNav from '../components/DashboardNav'



function Dashboard() {
    return (
        <>
            <DashboardNav />

            <h2 className='mt-5 ms-5 fw-bolder'>Welcome <span className='text-primary'>Admin,</span></h2>

            <h5 className='text-warning mt-5 text-center'>APPOINTMENTS RECEIVED</h5>

            <div className='container'>
                <table className='table shadow mt-5 '>
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>PATIENT</th>
                            <th>DATE</th>
                            <th>DOCTOR</th>
                            <th>DEPARTMENT</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Arun</td>
                            <td>05/06/2024</td>
                            <td>Vikram</td>
                            <td>Dermatologist</td>
                            <td>
                                <select>
                                    <option className='text-warning' value="Pending">Pending</option>
                                    <option className='text-success' value="Accepted">Accepted</option>
                                    <option className='text-danger' value="Rejected">Rejected</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard
import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import { Card, Col, Row } from 'react-bootstrap'
import { getAllAppointmentsAPI, getAllJobApplicationCountAPI } from '../services/allAPI';

function Dashboard() {
    const [allAppointments, setAllAppointments] = useState([])
    const [allApplicationCount, setAllApplicationCount] = useState([])
    console.log(allApplicationCount);

    useEffect(() => {
        getAllAppointments()
        getAllJobApplicationCount()
    }, [])

    const getAllJobApplicationCount = async () => {
        
        try {
            const result = await getAllJobApplicationCountAPI()
            console.log(result);
            if (result.status == 200) {
                setAllApplicationCount(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

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

            <h2 className='mt-5 ms-5 fw-bolder'>Welcome <span className='text-primary'>Admin,</span></h2>

            <div className='container mt-5 mb-5'>
                <Row className='d-flex justify-content-around'>
                    <Col sm={12} md={6} lg={4} className='mb-3'>
                        <Card className='d-flex shadow rounded'>
                            <Card.Body>
                                <Card.Title>Total Appointments Recieved : {allAppointments.length}</Card.Title>
                                {/* <Card.Text>{allAppointments.length}</Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col sm={12} md={6} lg={4}>
                        <Card className='d-flex shadow rounded'>
                            <Card.Body>
                                <Card.Title>Total Applications Recieved: {allApplicationCount.length}</Card.Title>
                                {/* <Card.Text></Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className='mt-5'>
                <img className='w-100' src="https://acsonnet.com/wp-content/uploads/2021/05/hospital-management.jpg" alt="" />
            </div>
          
        </>
    )
}

export default Dashboard
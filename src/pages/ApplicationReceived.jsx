import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { getAllJobApplicationAPI } from '../services/allAPI'
import { SERVER_URL } from '../services/serverURL'

function ApplicationReceived() {
    const [allApplication, setAllApplication] = useState([])
    console.log(allApplication);

    useEffect(() => {
        getAllJobApplication()

    }, [])

    const getAllJobApplication = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            // "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getAllJobApplicationAPI(reqHeader)
            console.log(result);
            if (result.status == 200) {
                setAllApplication(result.data)
                // setPdfUrl()
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <DashboardNav />

            <div className='container'>
                <h2 className='text-warning fw-bolder mt-5'>Applications Received</h2>
            </div>

            <div className='container mt-5'>
                <Row className='mt-3'>
                    {allApplication?.length > 0 ?
                        allApplication?.map((application, index) => (
                            <Col key={index} className='mb-3 ' sm={12} md={6} lg={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <h4> <span className='fw-bolder'>JobId:</span> {application?.jobId}</h4>
                                        </Card.Title>
                                        {/* <Card.Img className='w-25' variant="top" src={`${SERVER_URL}/uploads/${application?.resume}`} /> */}
                                        {/* {`${SERVER_URL}/uploads/${application?.resume}`} */}

                                        <Card.Text className='mt-2'>
                                            <h5><span className='fw-bolder'>Name:</span> {application?.name}</h5>
                                            <h6><span className='fw-bolder'>Address:</span> {application?.address}</h6>
                                            <h6><span className='fw-bolder'>Phone:</span> {application?.phone}</h6>
                                            <h6><span className='fw-bolder'>Email:</span> {application?.email}</h6>
                                            <h6><span className='fw-bolder'>Gender:</span> {application?.gender}</h6>
                                            <h6><span className='fw-bolder'>Age:</span> {application?.age}</h6>
                                            <h6><span className='fw-bolder'>Qualification: </span>{application?.qualification}</h6>
                                        </Card.Text>
                                        <a href={`${SERVER_URL}/uploads/${application?.resume}`} target='_blank'><button>Click here to view Resume</button></a>
                                        <div className='d-flex justify-content-between mt-3'>
                                            <Button variant="success">Shortlist</Button>
                                            <Button variant="danger">Rejected</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) :
                        <div></div>

                    }
                </Row>
            </div>
        </>
    )
}

export default ApplicationReceived
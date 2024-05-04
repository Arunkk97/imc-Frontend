import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { removeJobAPI } from '../services/allAPI';
import { deleteResponseContext } from '../context/ContextApi';
import Edit from './Edit';

function Jobcard({ displayData }) {
    const { deleteResponse, setDeleteResponse } = useContext(deleteResponseContext)

    const handleDelete = async (jobId) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            //api call
            const result = await removeJobAPI(jobId, reqHeader)
            if (result.status == 200) {
                setDeleteResponse(result)
            } else {
                console.log(result);
            }
        }
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><span className='fw-bolder'>JobId:</span> {displayData.jobId}</ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Title:</span> {displayData.title}</ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Qualification:</span> {displayData.qualification}</ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Experience:</span>{displayData?.experience} years</ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Description:</span>{displayData?.description}</ListGroup.Item>
                    </ListGroup>

                    <div className='d-flex justify-content-around mt-3'>
                        <Button variant="link"><Edit displayData={displayData} /></Button>
                        <Button onClick={() => handleDelete(displayData?._id)} variant="link"> <i className="fa-solid fa-trash text-danger"></i></Button>
                    </div>
                </Card.Body>
            </Card>


        </>
    )
}

export default Jobcard
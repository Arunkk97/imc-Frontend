import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import EditDoctor from './EditDoctor';
import { SERVER_URL } from '../services/serverURL';
import { removeDoctorAPI } from '../services/allAPI';
import { docDeleteResponseContext } from '../context/ContextApi';


function AdminDoctorCard({ displayData }) {
    const{docDeleteResponse, setDocDeleteResponse}=useContext(docDeleteResponseContext)
    console.log(displayData);

    const handleDelete = async (docId) => {
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
            //api call
            const result=await removeDoctorAPI(docId,reqHeader)
            if(result.status==200){
              setDocDeleteResponse(result)
            }else{
              console.log(result);
            }
          }
    }

    return (
        <>
            <Card className='mt-3 shadow ' style={{ width: '18rem' }}>
                <div className='d-flex justify-content-center mt-3'>
                    <Card.Img variant="top" className='w-50' src={`${SERVER_URL}/uploads/${displayData?.doctorImage}`} />

                </div>                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><span className='fw-bolder'>Name:</span>{displayData?.name} </ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Address:</span> {displayData?.address}</ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Phone:</span>{displayData?.phone}</ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Email:</span>{displayData?.email}</ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Qualification:</span>{displayData?.qualification}</ListGroup.Item>
                        <ListGroup.Item><span className='fw-bolder'>Department:</span>{displayData?.department}</ListGroup.Item>
                    </ListGroup>

                    <div className='d-flex justify-content-around mt-3'>
                        <Button variant="link"><EditDoctor displayData={displayData} /></Button>
                        <Button onClick={() => handleDelete(displayData?._id)} variant="link"> <i className="fa-solid fa-trash text-danger"></i></Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default AdminDoctorCard
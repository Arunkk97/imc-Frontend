//doctor display home page card
import React from 'react'
import { Card } from 'react-bootstrap'
import { SERVER_URL } from '../services/serverURL'

function DoctorCard({ displayData }) {
    return (
        <>
            <Card className='mt-5 shadow text-center ' style={{ width: '18rem' }}>
                <Card.Img className=' p-2' variant="top" src={`${SERVER_URL}/uploads/${displayData?.doctorImage}`} />
                <Card.Body>
                    <Card.Title className=' fw-bolder'> {displayData?.name}</Card.Title>
                    <Card.Text className=' '>
                        <h6>{displayData?.department}</h6>
                        {/* <h6>{displayData?.qualification}</h6> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default DoctorCard
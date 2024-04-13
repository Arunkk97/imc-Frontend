import React from 'react'
import { Card } from 'react-bootstrap'


function DoctorCard() {
    return (
        <>
            <Card className='mt-5 shadow ' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdnjs.angroos.com/wp-content/uploads/2023/05/Doctors-day.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default DoctorCard
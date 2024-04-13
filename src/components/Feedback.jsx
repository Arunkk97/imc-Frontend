import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


function Feedback() {
  return (
    <>
      <div className='container'>
        <h3 className='text-warning  '>What Our Patient Says</h3>

        <Col className='mb-4' sm={12} md={6} lg={4}>
          <Card className='mt-5 shadow ' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



      </div>

    </>
  )
}

export default Feedback
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


function AppointHead() {
    return (
        <>
            <div className='appimg d-flex justify-content-left align-items-center '>
                <h3 className='fw-bolder text-light ms-5'>BOOK AN APPOINTMENT </h3>
            </div>

            <Container className='mt-5 shadow p-5'>
              
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter your age"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select
                                    as="select"
                                    required
                                    
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="appointmentDate">
                                <Form.Label>Appointment Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="department">
                                <Form.Label>Department</Form.Label>
                                <Form.Select
                                    as="select"
                                    required
                                >
                                    <option value="">Select a Department</option>
                                    <option value="male">Cardiology</option>
                                    <option value="female">Neurology</option>
                                    <option value="other">Nephrology</option>
                                    <option value="other">Orthopaedics</option>
                                    <option value="other">Pulmonology</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="doctor">
                                <Form.Label>Doctor</Form.Label>
                                <Form.Select
                                    as="select"
                                    required
                                >
                                    <option value="">Select a Doctor</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3' controlId="remarks">
                                <Form.Label>Remarks</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter remarks (if any)"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className='mt-3' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        </>
    )
}

export default AppointHead
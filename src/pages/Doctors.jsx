import React from 'react'
import DashboardNav from '../components/DashboardNav'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DoctorCard from '../components/DoctorCard';


function Doctors() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <DashboardNav />


            <div className='container mt-5'>

                <div className='d-flex '>
                    <div className="col-lg-6">
                        <h3 className='fw-bolder text-warning '>Our Doctors</h3>
                    </div>
                    <div className="col-lg-6 text-end ms-5">
                        <button onClick={handleShow} className='btn btn-success '>Register A New Doctor</button>
                    </div>
                </div>


                <Row >
                    <Col className='mb-4' sm={12} md={6} lg={4}>
                        <DoctorCard/>
                    </Col>

                </Row>
            </div>



            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <label>
                                <input type="file" style={{ display: 'none' }} />
                                <img height={'200px'} className='img-fluid' src="https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png" alt="" />
                            </label>

                        </div>
                        <div className="col-lg-8">
                            <div className='mb-2'>
                                <input type="text" className='form-control my-2' placeholder='Name' />
                            </div>
                            <div className='mb-2'>
                                <input type="email" className='form-control' placeholder='Email' />
                            </div>
                            <div className='mb-2'>
                                <input type="phone" className='form-control my-2' placeholder='Mobile Number' />
                            </div>
                            <div className='mb-2'>
                                <input type="text" className='form-control' placeholder='Specialisation'
                                />
                            </div>
                            
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>



        </>
    )
}

export default Doctors
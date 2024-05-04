import React, { useContext, useEffect } from 'react'
import DashboardNav from '../components/DashboardNav'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/upload.webp'
import { addDoctorAPI, getAllDoctorAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDoctorCard from '../components/AdminDoctorCard';
import { Col, Row } from 'react-bootstrap';
import { docDeleteResponseContext, docEditResponseContext } from '../context/ContextApi';

function DoctorAdmin() {
    const { docEditResponse, setdocEditResponse } = useContext(docEditResponseContext)
    const { docDeleteResponse, setDocDeleteResponse } = useContext(docDeleteResponseContext)

    const [allDoctors, setAllDoctors] = useState([])
    console.log(allDoctors);

    useEffect(() => {
        getAllDoctors()

    }, [docDeleteResponse, docEditResponse])

    const getAllDoctors = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            // "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getAllDoctorAPI(reqHeader)
            console.log(result);
            if (result.status == 200) {
                setAllDoctors(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const [doctorDetails, setDoctorDetails] = useState({
        name: "", address: "", phone: "", email: "", qualification: "", department: "", doctorImage: ""
    })

    console.log(doctorDetails);

    const [imageFileStatus, setImageFileStatus] = useState(false)
    const [preview, setPreview] = useState("")

    useEffect(() => {
        if (doctorDetails.doctorImage.type == "image/png" || doctorDetails.doctorImage.type == "image/jpg" || doctorDetails.doctorImage.type == "image/jpeg") {
            setImageFileStatus(true)
            setPreview(URL.createObjectURL(doctorDetails.doctorImage))
        } else {
            setPreview(uploadImg)
            setImageFileStatus(false)
            setDoctorDetails({ ...doctorDetails, doctorImage: "" })
        }
    }, [doctorDetails.doctorImage])

    const handleAddDoctor = async () => {
        const { name, address, phone, email, qualification, department, doctorImage } = doctorDetails
        if (!name || !address || !phone || !email || !qualification || !department || !doctorImage) {
            toast.warning('Please fill the form completely!!!')
        } else {
            const reqBody = new FormData()
            reqBody.append("name", name)
            reqBody.append("address", address)
            reqBody.append("phone", phone)
            reqBody.append("email", email)
            reqBody.append("qualification", qualification)
            reqBody.append("department", department)
            reqBody.append("doctorImage", doctorImage)

            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                }
                try {
                    const result = await addDoctorAPI(reqBody, reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        // toast.success('Doctor added successfully !!!')
                        setDoctorDetails({ name: "", address: "", phone: "", email: "", qualification: "", department: "", doctorImage: "" })
                        getAllDoctors()
                        handleClose()

                    } else {
                        toast.warning(result.response.data)
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setDoctorDetails({ name: "", address: "", phone: "", email: "", qualification: "", department: "", doctorImage: "" })
    }
    const handleShow = () => setShow(true);
    return (
        <>
            <DashboardNav />

            <div className='container d-flex justify-content-between my-5'>
                <h2 className='text-warning fw-bolder '>Doctors</h2>
                <button onClick={handleShow} className='btn btn-success'>Add Doctor</button>
            </div>


            <div className='container'>
                <Row className=' mt-3'>
                    {allDoctors?.length > 0 ?
                        allDoctors?.map((doc) => (
                            <Col className='mb-3' sm={12} md={6} lg={4}>
                                <AdminDoctorCard displayData={doc} />
                            </Col>
                        )) :
                        <div className='fw-bolder text-danger m-5 text-center'>Doctors not found</div>
                    }

                </Row>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                size='lg'
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Doctors</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>
                                <input type='file' onChange={e => setDoctorDetails({ ...doctorDetails, doctorImage: e.target.files[0] })} style={{ display: 'none' }} />
                                <img style={{ height: '200px' }} className='img-fluid' src={preview} alt="" />
                            </label>
                            {!imageFileStatus &&
                                <div className="text-danger fw-bolder my-2">*Upload Photo(png,jpg,jpeg)here!!!</div>
                            }
                        </div>
                        <div className="col-lg-8">
                            <div className='mb-2'>
                                <input value={doctorDetails.name} onChange={(e) => setDoctorDetails({ ...doctorDetails, name: e.target.value })} type="text" className='form-control' placeholder='Name' />
                            </div>

                            <div className="input-group mb-2">
                                <textarea value={doctorDetails.address} onChange={(e) => setDoctorDetails({ ...doctorDetails, address: e.target.value })} placeholder='Address' className="form-control" aria-label="With textarea"></textarea>
                            </div>

                            <div className=' mb-2'>
                                <input value={doctorDetails.phone} onChange={(e) => setDoctorDetails({ ...doctorDetails, phone: e.target.value })} type="tel" className='form-control' placeholder='Phone' />
                            </div>

                            <div className=' mb-2'>
                                <input value={doctorDetails.email} onChange={(e) => setDoctorDetails({ ...doctorDetails, email: e.target.value })} type="text" className='form-control' placeholder='Email' />
                            </div>
                            <div className='mb-2'>
                                <input value={doctorDetails.qualification} onChange={(e) => setDoctorDetails({ ...doctorDetails, qualification: e.target.value })} type="text" className='form-control' placeholder='Qualification' />
                            </div>

                            <div className=' mb-2'>
                                <input value={doctorDetails.department} onChange={(e) => setDoctorDetails({ ...doctorDetails, department: e.target.value })} type="text" className='form-control' placeholder='Department' />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAddDoctor} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position='top-center' theme='colored' autoClose={3000} />

        </>
    )
}

export default DoctorAdmin
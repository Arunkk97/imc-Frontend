import React, { useEffect, useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import Header from '../components/Header'
import { getCareerJobAPI, jobApplicationAPI } from '../services/allAPI'
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import uploadImg from '../assets/uploadPdf.png'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function Careers() {
    const [careers, setCareers] = useState([])
    const [imageFileStatus, setImageFileStatus] = useState(false)
    // const [preview, setPreview] = useState("")
    const [jobAppDetails, setJobAppDetails] = useState({
        name: "", address: "", phone: "", email: "", gender: "", age: "", qualification: "", jobId: "", resume: ""
    })
    console.log(careers);

    const navigate = useNavigate()

    console.log(jobAppDetails);

    useEffect(() => {
        getCareersJob()
    }, [])

    const getCareersJob = async () => {
        try {
            const result = await getCareerJobAPI()
            console.log(result);
            if (result.status == 200) {
                setCareers(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (jobAppDetails.resume) {
            setImageFileStatus(true)
            // setPreview(URL.createObjectURL(jobAppDetails.resume))
        } else {
            // setPreview(uploadImg)
            setImageFileStatus(false)
            setJobAppDetails({ ...jobAppDetails, resume: "" })
        }
    }, [jobAppDetails.resume])

    const handleApplyJob = async () => {
        const { name, address, phone, email, gender, age, qualification, jobId, resume } = jobAppDetails
        if (!name || !address || !phone || !email || !gender || !age || !qualification || !jobId || !resume) {
            toast.warning('Please fill the form completely!!!')
        } else {
            const reqBody = new FormData()
            reqBody.append("name", name)
            reqBody.append("address", address)
            reqBody.append("phone", phone)
            reqBody.append("email", email)
            reqBody.append("gender", gender)
            reqBody.append("age", age)
            reqBody.append("qualification", qualification)
            reqBody.append("jobId", jobId)
            reqBody.append("resume", resume)

            const token = sessionStorage.getItem("token")
            if (!token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                }
                try {
                    const result = await jobApplicationAPI(reqBody, reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        toast.success('Your job application have been successfully submitted !!!')
                        setTimeout(() => {
                            navigate('/')
                        }, 2000)
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
        setJobAppDetails({ name: "", address: "", phone: "", email: "", gender: "", age: "", qualification: "", jobId: "", resume: "" })
    }
    const handleShow = () => setShow(true);


    return (
        <>
            <Header insideAuth={true} />

            <div className='container mt-5'>

                <div className='d-flex '>
                    <div className="col-lg-6">
                        <h3 className='fw-bolder text-warning '>Join Us</h3>
                    </div>

                </div>

                <Row className='mt-3'>
                    {careers?.length > 0 ?
                        careers?.map((job) => (
                            <Col key={job} className='mb-3 ' sm={12} md={6} lg={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item><span className='fw-bolder'>JobId:</span> {job?.jobId}</ListGroup.Item>
                                            <ListGroup.Item><span className='fw-bolder'>Title:</span> {job?.title}</ListGroup.Item>
                                            <ListGroup.Item><span className='fw-bolder'>Qualification:</span> {job?.qualification}</ListGroup.Item>
                                            <ListGroup.Item><span className='fw-bolder'>Experience:</span>{job?.experience} years</ListGroup.Item>
                                            <ListGroup.Item><span className='fw-bolder'>Description:</span>{job?.description}</ListGroup.Item>
                                        </ListGroup>

                                        <div className='d-flex justify-content-center mt-3'>
                                            <Button onClick={handleShow} className='btn btn-success' >Apply</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) :
                        <div className='text-danger fw-bolder'>Currently no vacancies available!!!</div>
                    }
                </Row>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>IMC Jobs</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row">
                        <div className="col-lg-4">
                            {/* <label>
                                <input type='file' style={{ display: 'none' }} onChange={e => setJobAppDetails({ ...jobAppDetails, resume: e.target.files[0] })} />
                                <img style={{ height: '200px' }} className='img-fluid' src={preview} alt="" />
                            </label> */}
                            <Form.Label className='text-light'>Upload Resume</Form.Label>
                            <Form.Control onChange={e => setJobAppDetails({ ...jobAppDetails, resume: e.target.files[0] })} type="file" placeholder="Upload Resume" />
                            {!imageFileStatus &&
                                <div className="text-danger fw-bolder my-2">*Upload your resume!!!</div>
                            }
                        </div>
                        <div className="col-lg-8">
                            <div className='mb-2'>
                                <input type="text" className='form-control' value={jobAppDetails.jobId} onChange={(e) => setJobAppDetails({ ...jobAppDetails, jobId: e.target.value })} placeholder='JobId' />
                            </div>

                            <div className='mb-2'>
                                <input type="text" className='form-control' value={jobAppDetails.name} onChange={(e) => setJobAppDetails({ ...jobAppDetails, name: e.target.value })} placeholder='Name' />
                            </div>

                            <div className="input-group mb-2">
                                <textarea value={jobAppDetails.address} onChange={(e) => setJobAppDetails({ ...jobAppDetails, address: e.target.value })} placeholder='Address' className="form-control" aria-label="With textarea"></textarea>
                            </div>

                            <div className=' mb-2'>
                                <input value={jobAppDetails.phone} onChange={(e) => setJobAppDetails({ ...jobAppDetails, phone: e.target.value })} type="tel" className='form-control' placeholder='Phone' />
                            </div>
                            <div className='mb-2'>
                                <input value={jobAppDetails.email} onChange={(e) => setJobAppDetails({ ...jobAppDetails, email: e.target.value })} type="text" className='form-control' placeholder='Email' />
                            </div>
                            <div className=' mb-2'>
                                <select value={jobAppDetails.gender} onChange={(e) => setJobAppDetails({ ...jobAppDetails, gender: e.target.value })} class="form-select" aria-label="Default select example">
                                    <option selected>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>

                                </select>
                            </div>
                            <div className=' mb-2'>
                                <input value={jobAppDetails.age} onChange={(e) => setJobAppDetails({ ...jobAppDetails, age: e.target.value })} type="number" className='form-control' placeholder='Age' />
                            </div>
                            <div className='mb-2'>
                                <input value={jobAppDetails.qualification} onChange={(e) => setJobAppDetails({ ...jobAppDetails, qualification: e.target.value })} type="text" className='form-control' placeholder='Qualification' />
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleApplyJob} variant="primary">Apply</Button>
                </Modal.Footer>
            </Modal>
            
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </>
    )
}

export default Careers
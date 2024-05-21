import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bookAppointmentAPI, getAllDocAndDepAPI, getAllDoctorAppointAPI } from '../services/allAPI';


function AppointHead() {
    const navigate = useNavigate()
    const [doc, setDoc] = useState('')
    const [allDocAppoint, setAllDocAppoint] = useState("")
    const [loginStatus, setLoginStatus] = useState(false)
    const [bookingDetails, setBookingDetails] = useState({
        name: '', email: '', phone: '', age: '', gender: '', appointmentDate: '', department: '', doctor: '', remarks: ''
    })
    console.log(bookingDetails.department);
    console.log(allDocAppoint);

    const [validate, setvalidate] = useState(false)
    const [dateError, setdateError] = useState("")

    const handleDateBlur = (e) => {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        if (selectedDate <= today) {
            setdateError("Appointment date cannot be in the past or today!");
        } else {
            setdateError("")
        }
    }

    useEffect(() => {
        getAllDocAndDep()
    }, [bookingDetails.department])

    const getAllDocAndDep = async () => {
        const result = await getAllDocAndDepAPI(bookingDetails.department)
        if (result.status == 200) {
            setDoc(result.data);
        } else {
            console.log(result.response.data);
        }
    }

    useEffect(() => {
        getDoctorsAppoint()
    }, [])

    const getDoctorsAppoint = async () => {
        try {
            const result = await getAllDoctorAppointAPI()
            console.log(result);
            if (result.status == 200) {
                setAllDocAppoint(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setLoginStatus(true)
        } else {
            setLoginStatus(false)
        }
    }, [])



    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            const { name, email, phone, age, gender, appointmentDate, department, doctor, remarks } = bookingDetails
            const today = new Date();
            const selectedDate = new Date(appointmentDate);

            if (selectedDate <= today) {
                toast.warning("Appointment date cannot be in the past or today!");
                return
            }
            if (loginStatus) {
                if (!name || !email || !phone || !age || !gender || !appointmentDate || !department || !doctor && remarks) {
                    toast.warning('Please fill the form completely!!!')
                } else {
                    const reqBody = new FormData()

                    reqBody.append("name", name)
                    reqBody.append("email", email)
                    reqBody.append("phone", phone)
                    reqBody.append("age", age)
                    reqBody.append("gender", gender)
                    reqBody.append("appointmentDate", appointmentDate)
                    reqBody.append("department", department)
                    reqBody.append("doctor", doctor)
                    reqBody.append("remarks", remarks)

                    const token = sessionStorage.getItem("token")

                    if (token) {
                        const reqHeader = {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                        try {
                            const result = await bookAppointmentAPI(reqBody, reqHeader)
                            console.log(result);
                            if (result.status == 200) {
                                toast.success('Your Appointment has Booked Successfully !!!')
                                setBookingDetails({ name: '', email: '', phone: '', age: '', gender: '', appointmentDate: '', department: '', doctor: '', remarks: '' })
                                setTimeout(() => {
                                    navigate('/doctordashboard')
                                }, 2000)
                            }
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }
            } else {
                toast.warning('Please login!!!')
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            }
        }
        setvalidate(true)
    }

    return (
        <>
            <div className='appimg d-flex justify-content-left align-items-center '>
                <h3 className='fw-bolder text-light ms-5'>BOOK AN APPOINTMENT </h3>
            </div>

            <Container className='mt-5 shadow p-5'>

                <Form noValidate validated={validate} onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    value={bookingDetails.name} onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Please enter your name</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    value={bookingDetails.email} onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
                                />
                                <Form.Control.Feedback type='invalid'>Please enter valid email address</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    value={bookingDetails.phone} onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    required
                                    pattern='[0-9]{10}'
                                />
                                <Form.Control.Feedback type='invalid'>Please enter valid phone number</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    value={bookingDetails.age} onChange={(e) => setBookingDetails({ ...bookingDetails, age: e.target.value })}
                                    type="number"
                                    placeholder="Enter your age"
                                    required
                                    min='0'
                                />
                                <Form.Control.Feedback type='invalid'>Please enter your age</Form.Control.Feedback>

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select
                                    value={bookingDetails.gender} onChange={(e) => setBookingDetails({ ...bookingDetails, gender: e.target.value })}
                                    as="select"
                                    required

                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>Please select your gender</Form.Control.Feedback>

                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="appointmentDate">
                                <Form.Label>Appointment Date</Form.Label>
                                <Form.Control
                                    onBlur={handleDateBlur}
                                    value={bookingDetails.appointmentDate} onChange={(e) => setBookingDetails({ ...bookingDetails, appointmentDate: e.target.value })}
                                    type="date"
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Please select Appointment date</Form.Control.Feedback>

                                {dateError && <div className='text-danger'>{dateError}</div>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="department">
                                <Form.Label>Department</Form.Label>
                                <Form.Select
                                    value={bookingDetails.department} onChange={(e) => setBookingDetails({ ...bookingDetails, department: e.target.value })}
                                    as="select"
                                    required
                                >
                                    <option value="">Select a Department</option>
                                    {allDocAppoint?.length > 0 &&
                                        allDocAppoint?.map(dep => (
                                            <option >{dep?.department}</option>
                                        ))
                                    }

                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>Please select a doctor</Form.Control.Feedback>

                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId="doctor">
                                <Form.Label>Doctor</Form.Label>
                                <Form.Select
                                    value={bookingDetails.doctor} onChange={(e) => setBookingDetails({ ...bookingDetails, doctor: e.target.value })}
                                    as="select"
                                    required
                                >
                                    <option value="">Select a Doctor</option>

                                    {doc?.length > 0 &&
                                        doc?.map(docc => (
                                            <option value={docc.name}>{docc.name}</option>
                                        ))
                                    }
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>Please select a doctor</Form.Control.Feedback>

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3' controlId="remarks">
                                <Form.Label>Remarks</Form.Label>
                                <Form.Control
                                    value={bookingDetails.remarks} onChange={(e) => setBookingDetails({ ...bookingDetails, remarks: e.target.value })}
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

            <ToastContainer position='top-center' theme='colored' autoClose={3000} />

        </>
    )
}

export default AppointHead
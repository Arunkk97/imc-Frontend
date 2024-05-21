import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadImg from '../assets/upload.webp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editDoctorAPI } from '../services/allAPI';
import { SERVER_URL } from '../services/serverURL';
import { docEditResponseContext } from '../context/ContextApi';

function EditDoctor({ displayData }) {
    const { docEditResponse, setdocEditResponse } = useContext(docEditResponseContext)
    const [updateDocDetails, setUpdateDocDetails] = useState({
        id: displayData?._id, name: displayData?.name, address: displayData?.address, phone: displayData?.phone, email: displayData?.email, qualification: displayData?.qualification, department: displayData?.department, doctorImage: ""
    })
    const [preview, setPreview] = useState("")

    useEffect(() => {
        if (updateDocDetails?.doctorImage) {
            setPreview(URL.createObjectURL(updateDocDetails.doctorImage))
        } else {
            setPreview("")
        }
    }, [updateDocDetails?.doctorImage])

    const handleUpdate = async () => {
        const { name, address, phone, email, qualification, department, doctorImage } = updateDocDetails
        if (!name || !address || !phone || !email || !qualification || !department) {
            toast.warning('Please fill the form completely!!!')
        } else {
            //proceed to api call
            const reqBody = new FormData()
            reqBody.append("name", name)
            reqBody.append("address", address)
            reqBody.append("phone", phone)
            reqBody.append("email", email)
            reqBody.append("qualification", qualification)
            reqBody.append("department", department)
            preview ? reqBody.append("doctorImage", doctorImage) : reqBody.append("doctorImage", displayData.doctorImage)

            const token = sessionStorage.getItem("token")

            if (token) {
                const reqHeader = {
                    "Content-Type": preview ? "multipart/form-data" : "application/json",
                    "Authorization": `Bearer ${token}`
                }
                //API call
                try {
                    const result = await editDoctorAPI(updateDocDetails.id, reqBody, reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        handleClose()
                        //pass response view
                        setdocEditResponse(result)
                    } else {
                        console.log(result.response);
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
        setUpdateDocDetails({ id: displayData?._id, name: displayData?.name, address: displayData?.address, phone: displayData?.phone, email: displayData?.email, qualification: displayData?.qualification, department: displayData?.department, doctorImage: "" })
    }
    const handleShow = () => {
        setShow(true);
        setUpdateDocDetails({ id: displayData?._id, name: displayData?.name, address: displayData?.address, phone: displayData?.phone, email: displayData?.email, qualification: displayData?.qualification, department: displayData?.department, doctorImage: "" })
    }
    return (
        <>

            <button onClick={handleShow} className='btn'> <i className="fa-solid fa-edit me-1 "></i></button>

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
                                <input type='file' onChange={e => setUpdateDocDetails({ ...updateDocDetails, doctorImage: e.target.files[0] })} style={{ display: 'none' }} />
                                <img style={{ height: '200px' }} className='img-fluid' src={preview ? preview : `${SERVER_URL}/uploads/${displayData?.doctorImage}`} alt="" />
                            </label>
                        </div>
                        <div className="col-lg-8">
                            <div className='mb-2'>
                                <input value={updateDocDetails.name} onChange={(e) => setUpdateDocDetails({ ...updateDocDetails, name: e.target.value })} type="text" className='form-control' placeholder='Name' />
                            </div>

                            <div className="input-group mb-2">
                                <textarea value={updateDocDetails.address} onChange={(e) => setUpdateDocDetails({ ...updateDocDetails, address: e.target.value })} placeholder='Address' className="form-control" aria-label="With textarea"></textarea>
                            </div>

                            <div className=' mb-2'>
                                <input value={updateDocDetails.phone} onChange={(e) => setUpdateDocDetails({ ...updateDocDetails, phone: e.target.value })} type="tel" className='form-control' placeholder='Phone' />
                            </div>

                            <div className=' mb-2'>
                                <input value={updateDocDetails.email} onChange={(e) => setUpdateDocDetails({ ...updateDocDetails, email: e.target.value })} type="text" className='form-control' placeholder='Email' />
                            </div>
                            <div className='mb-2'>
                                <input value={updateDocDetails.qualification} onChange={(e) => setUpdateDocDetails({ ...updateDocDetails, qualification: e.target.value })} type="text" className='form-control' placeholder='Qualification' />
                            </div>

                            <div className=' mb-2'>
                                <input value={updateDocDetails.department} onChange={(e) => setUpdateDocDetails({ ...updateDocDetails, department: e.target.value })} type="text" className='form-control' placeholder='Department' />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </>
    )
}

export default EditDoctor
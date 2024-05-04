//job post update
import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editJobAPI } from '../services/allAPI';
import { editResponseContext } from '../context/ContextApi';

function Edit({ displayData }) {
    const { editResponse, setEditResponse } = useContext(editResponseContext)

    const [jobData, setJobData] = useState({
        id: displayData?._id, title: displayData?.title, qualification: displayData?.qualification, experience: displayData?.experience, description: displayData?.description
    })
    const [show, setShow] = useState(false);

    const handleUpdate = async () => {
        const { title, qualification, experience, description } = jobData
        if (!title || !qualification || !experience || !description) {
            toast.warning('Please fill the form completely!!!')
        } else {
            //proceed to api call
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("qualification", qualification)
            reqBody.append("experience", experience)
            reqBody.append("description", description)

            const token = sessionStorage.getItem("token")

            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                //API call
                try {
                    const result = await editJobAPI(jobData.id, reqBody, reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        handleClose()
                        //pass response view
                        setEditResponse(result)
                    } else {
                        console.log(result.response);
                    }

                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    const handleClose = () => {
        setShow(false);
        setJobData({
            id: displayData?._id, title: displayData?.title, qualification: displayData?.qualification, experience: displayData?.experience, description: displayData?.description
        })
    }
    const handleShow = () => {
        setShow(true);
        setJobData({
            id: displayData?._id, title: displayData?.title, qualification: displayData?.qualification, experience: displayData?.experience, description: displayData?.description
        })
    }
    return (
        <>
            <button onClick={handleShow} className='btn'> <i className="fa-solid fa-edit me-1 "></i></button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>IMC Job Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">

                        <div className="col-lg">
                            <div className='mb-2'>
                                <input type="text" value={jobData?.title} onChange={e => setJobData({ ...jobData, title: e.target.value })} className='form-control' placeholder='Job title' />
                            </div>

                            <div className=' mb-2'>
                                <input type="text" value={jobData?.qualification} onChange={e => setJobData({ ...jobData, qualification: e.target.value })} className='form-control' placeholder='Qualification' />
                            </div>
                            <div className='mb-2'>
                                <input type="text" value={jobData.experience} onChange={e => setJobData({ ...jobData, experience: e.target.value })} className='form-control' placeholder='Experience' />
                            </div>
                            <div className="input-group">
                                <textarea value={jobData.description} onChange={e => setJobData({ ...jobData, description: e.target.value })} placeholder='Description' className="form-control" aria-label="With textarea"></textarea>
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

export default Edit
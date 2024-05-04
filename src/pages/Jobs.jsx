import React, { useContext, useEffect } from 'react'
import DashboardNav from '../components/DashboardNav'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getJobPostAPI, jobPostAPI } from '../services/allAPI';
import Jobcard from '../components/Jobcard';
import { Col, Row } from 'react-bootstrap';
import { deleteResponseContext, editResponseContext } from '../context/ContextApi';


function Jobs() {
    const{editResponse, setEditResponse}=useContext(editResponseContext)
    const{deleteResponse, setDeleteResponse}=useContext(deleteResponseContext)
    const [getAllJobs, setGetAllJobs] = useState([])

    const [jobDetails, setJobDetails] = useState({
        title: "", qualification: "", experience: "", description: "",jobId:""
    })
    console.log(jobDetails);
    console.log(getAllJobs);

    useEffect(() => {
        getAllJobPost()
    }, [deleteResponse,editResponse])


    const getAllJobPost = async () => {
        const token=sessionStorage.getItem("token")
        const reqHeader={
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getJobPostAPI(reqHeader)
            console.log(result);
            if (result.status == 200) {
                setGetAllJobs(result.data)
            }

        } catch (err) {
            console.log(err);
        }
    }

    const handleAdd = async () => {
        const { title, qualification, experience, description,jobId } = jobDetails
        if (!title || !qualification || !experience || !description || !jobId) {
            toast.warning('Please fill the form completely!!!')
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("qualification", qualification)
            reqBody.append("experience", experience)
            reqBody.append("description", description)
            reqBody.append("jobId", jobId)

            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                  }
                try {
                    const result = await jobPostAPI(reqBody,reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        // toast.success('Job Posted Successfully !!!')
                        // alert('Job Posted Successfully !!!')
                        handleClose()
                        getAllJobPost()

                    }else{
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
        setJobDetails({ title: "", qualification: "", experience: "", description: "",jobId:"" })
        setShow(false);

    }
    const handleShow = () => setShow(true);
    return (
        <>
            <DashboardNav />

            <div className='container'>

                <div className=" d-flex justify-content-between mb-5">
                    <h2 className='text-warning fw-bolder mt-5'>Jobs</h2>
                    <button onClick={handleShow} className='btn btn-success mt-5 rounded'>Add </button>
                </div>

              <Row className='mt-3'>
                    {getAllJobs?.length > 0 ?
                        getAllJobs?.map((job) => (
                            <Col key={job} className='mb-3 ' sm={12} md={6} lg={4}>
                                <Jobcard displayData={job} />
                            </Col>
                        )) :
                        <div className='text-danger fw-bolder'>Currently no vacancies available!!!</div>
                    }
              </Row>

            </div >


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>IMC Jobs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">

                        <div className="col-lg">
                        <div className='mb-2'>
                                <input type="text" value={jobDetails.jobId} onChange={e => setJobDetails({ ...jobDetails, jobId: e.target.value })} className='form-control' placeholder='JobId' />
                            </div>

                            <div className='mb-2'>
                                <input type="text" value={jobDetails.title} onChange={e => setJobDetails({ ...jobDetails, title: e.target.value })} className='form-control' placeholder='Job title' />
                            </div>

                            <div className=' mb-2'>
                                <input type="text" value={jobDetails.qualification} onChange={e => setJobDetails({ ...jobDetails, qualification: e.target.value })} className='form-control' placeholder='Qualification' />
                            </div>
                            <div className='mb-2'>
                                <input type="text" value={jobDetails.experience} onChange={e => setJobDetails({ ...jobDetails, experience: e.target.value })} className='form-control' placeholder='Experience' />
                            </div>
                            <div className="input-group">
                                <textarea value={jobDetails.description} onChange={e => setJobDetails({ ...jobDetails, description: e.target.value })} placeholder='Description' className="form-control" aria-label="With textarea"></textarea>
                            </div>

                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position='top-center' theme='colored' autoClose={3000} />

        </>
    )
}

export default Jobs
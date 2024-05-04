//doctor display home page
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import DoctorCard from '../components/DoctorCard';
import Header from '../components/Header';
import { getAllDoctorHomeAPI } from '../services/allAPI';

function Doctors() {
    const[allDoctorsHome,setAllDoctorsHome]=useState([])
    console.log(allDoctorsHome);

    useEffect(()=>{
        getDoctorsHome()
    },[])

    const getDoctorsHome = async () => {
        try {
            const result = await getAllDoctorHomeAPI()
            console.log(result);
            if (result.status == 200) {
                setAllDoctorsHome(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
   
    return (
        <>
            <Header insideAuth={true} />

            <div className='container mt-5'>
                <div className='d-flex '>
                    <div className="col-lg-6">
                        <h3 className='fw-bolder text-warning '>Our Doctors</h3>
                    </div>
                </div>

                <Row >
                   { allDoctorsHome?.length>0?
                   allDoctorsHome?.map(doc=>(
                    <Col className='mb-4' sm={12} md={6} lg={4}>
                        <DoctorCard displayData={doc} />
                    </Col>
                   )):
                   <div className='fw-bolder text-danger'>No Doctors Available</div>
                   
                    }
                </Row>
            </div>

        </>
    )
}

export default Doctors
import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function Contact() {

    return (
        <>
            <div id='contact' className='  mt-5 shadow'>
                <div >
                    <h3 className='text-warning  pt-4 mb-5 mt-5 ms-5'>Get In Touch With Us</h3>

                    <div className=' container d-flex'>

                        <div className="col-lg-4">
                            <h4 className='text-primary fw-bolder'>IMC Health Care Group</h4>
                            <p>Indira Gandhi Road, Kochi - 673004 <br /> Kerala, India</p>
                            <h6 className='text-warning'>PHONE</h6>
                            <p>+91 9876543210</p>
                            <h6 className='text-warning'>EMERGENCY</h6>
                            <p>+91 9876543210</p>
                            <h6 className='text-warning'>EMAIL</h6>
                            <p>contactus@imc.com</p>
                        </div>

                        <div className="col-lg-4">
                        </div>

                        <div className="col-lg-4 ">
                            <iframe className='w-100 h-75' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18693.05747327291!2d76.2710712769169!3d9.95630338558917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872bbdc6f25b9%3A0x34f610c36c0dac66!2sImc%20International%20Marketing!5e0!3m2!1sen!2sin!4v1712963158834!5m2!1sen!2sin" width={"600px"} height={"450px"} style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact
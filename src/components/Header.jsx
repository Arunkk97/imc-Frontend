import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logos from '../assets/logos.png'


function Header({ insideAuth }) {
    return (
        <>

            {/* sticky top */}

            <Container fluid className='tophead ' style={{ backgroundColor: "#050c6c" }}>
                <Row>
                    <div className="col-lg-12 d-flex justify-content-start my-2 ps-5" style={{ color: '#8f8989' }}>
                        <span ><i className="fa-solid fa-phone pe-1" style={{ color: '#fff' }}></i>Need Help? Call:<a className="ps-1" style={{ color: '#8f8989', cursor: "pointer" }}>+91 9096 156 156</a></span>
                        <div className="vl mx-1 ">|</div>
                        <a style={{ cursor: "pointer" }}><i className="fa-solid fa-envelope pe-1" style={{ color: '#fff' }}></i>contactus@imc.com</a>
                    </div>
                </Row>
            </Container>


            {/* navbar */}

            <Navbar sticky='top' expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'}>   <img className='w-100' style={{ height: '50px' }} src={logos} alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link className='text-dark fw-bolder'><Link className='text-decoration-none text-dark' to={'/'}>HOME</Link></Nav.Link>
                            <Nav.Link className='text-dark fw-bolder'><Link className='text-decoration-none text-dark' to={'/doctors'}>DOCTORS</Link></Nav.Link>
                            <Nav.Link className='text-dark fw-bolder'>HOSPITALS</Nav.Link>
                            <Nav.Link href='#contact'  className='text-dark fw-bolder'>CONTACT</Nav.Link>
                            <Nav.Link className=' fw-bolder blink '><Link className='text-decoration-none text-danger' to={'/appointment'}>APPOINTMENT</Link></Nav.Link>
                        </Nav>
                        {insideAuth &&
                            <Link to={'/login'}>  <button className='btn btn-outline-success'>Sign In</button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
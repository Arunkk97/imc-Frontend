import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logos from '../assets/logos.png'
import { Link } from 'react-router-dom';




function DashboardNav() {
  return (
    <>
     <Navbar sticky='top' expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'}>   <img className='w-100' style={{ height: '50px' }} src={logos} alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link className='text-dark fw-bolder'><Link className='text-decoration-none text-dark' to={'/'}>HOME</Link></Nav.Link>
                            <Nav.Link className='text-dark fw-bolder'><Link  className='text-decoration-none text-dark' to={'/doctors'}>DOCTORS</Link></Nav.Link>
                            {/* <Nav.Link className='text-dark fw-bolder'>HOSPITALS</Nav.Link> */}
                            {/* <Nav.Link  className='text-dark fw-bolder'>CONTACT</Nav.Link> */}
                            {/* <Nav.Link className=' fw-bolder blink '><Link className='text-decoration-none text-danger' to={'/appointment'}>APPOINTMENT</Link></Nav.Link> */}
                        </Nav>
                       
                             <button className='btn btn-outline-danger'>Sign Out</button>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    </>
  )
}

export default DashboardNav
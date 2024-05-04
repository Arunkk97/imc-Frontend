import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logos from '../assets/logos.png'
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthContext } from '../context/TokenAuth';

function Usernav() {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <>
      <Navbar sticky='top' expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand >
            <Link to={'/'}>   <img className='w-100' style={{ height: '50px' }} src={logos} alt="" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto "></Nav>
            <button onClick={logout} className='btn btn-outline-danger'>Sign Out</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Usernav
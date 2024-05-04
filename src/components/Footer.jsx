import React from 'react'
import { Link } from 'react-router-dom'
import logos from '../assets/logos.png'

function Footer() {
  return (
    <>
      <div style={{ height: '250px' }} className=' w-100  shadow px-3 mt-5 pt-5'>
        <div className='footer-content d-flex justify-content-between'>
          
          <div md={3} style={{ width: '400px' }} >
            <Link to={'/'}>  <img className='w-25' src={logos} alt="" /></Link>
          </div>

          <div className='link d-flex flex-column'>
            <h5 className='d-flex text-primary'>Links</h5>
            <Link className='text-black' to={'/'} style={{ textDecoration: 'none', }}>Landing Page</Link>
            <Link className='text-black' to={'/home'} style={{ textDecoration: 'none', }}>Home Page</Link>
            <Link className='text-black' to={'/watch'} style={{ textDecoration: 'none', }}>Watch History</Link>
          </div>

          <div className='link d-flex flex-column'>
            <h5 className='d-flex text-primary'>IMC Media Centre</h5>
            <Link className='text-black' to={'/'} style={{ textDecoration: 'none', }}>News and Events</Link>
            <Link className='text-black' to={'/home'} style={{ textDecoration: 'none', }}>Blog</Link>
            <Link className='text-black' to={'/watch'} style={{ textDecoration: 'none', }}>Testimonial</Link>
          </div>

          <div md={3} className='contact'>
            <h5 className='text-primary'  >Follow Us</h5>
            <div className=' mt-3'>
              <a target='blank' className='me-5' style={{ textDecoration: 'none', }} href="https://www.facebook.com/"><i class="fa-brands fa-facebook "></i></a>
              <a target='blank' className='me-5' style={{ textDecoration: 'none', color: 'red' }} href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
              <a target='blank' className='me-5' style={{ textDecoration: 'none', color: 'black' }} href="https://twitter.com/?lang=en"><i class="fa-brands fa-x-twitter"></i></a>
              <a target='blank' className='me-5' style={{ textDecoration: 'none', }} href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <p className='text-center fw-bolder mt-5'>Copyright &copy; 2024 imc hospital. All rights reserved</p>
      </div>

    </>
  )
}

export default Footer
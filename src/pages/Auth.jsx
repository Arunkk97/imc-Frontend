import React from 'react'
import Header from '../components/Header'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import login from '../assets/login.webp'


function Auth({insideRegister}) {
  return (
    <>
    <Header/>

    <div style={{ width: '100%', minHeight: '100vh' }} className="d-flex justify-content-center align-items-center pt-3">
        <div className="container w-75">
          <Link to={'/'} style={{ textDecoration: 'none' }}> <i className="fa-solid fa-home "></i> Back to Home</Link>
          <div className="card shadow p-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img className='w-100 ' src={login} alt="" />
              </div>
              <div className="col-lg-6">
                <h1 className='fw-bolder mt-2 '>IMC Health Care Group</h1>
                <p className='fw-bolder mt-2 '>Sign {insideRegister ? 'up' : 'in'} to your account</p>
                <Form >

                  {
                    insideRegister &&
                    <FloatingLabel
                      controlId="floatingInputName"
                      label="Username"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="Username" />
                    </FloatingLabel>
                  }

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control  type="password" placeholder="Password" />
                  </FloatingLabel>

                  {
                    insideRegister ?
                      <div className='mt-3'>
                        <button  className='btn btn-primary'>Register</button>
                        <p>Already have an account? Click here to <Link className='text-info' style={{ textDecoration: 'none' }} to={'/login'}>Login</Link></p>
                      </div> :
                      <div className='mt-3'>
                        <button  className='btn btn-primary'>Login</button>
                        <p>New user? Click here to <Link className='text-info' style={{ textDecoration: 'none' }} to={'/register'}>Register</Link></p>
                      </div>
                  }

                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default Auth
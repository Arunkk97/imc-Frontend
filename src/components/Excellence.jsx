import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import AOS from 'aos'
import 'aos/dist/aos.css'



function Excellence() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (
    <>
      <div className='container mt-4 '>
        <h3 className='text-warning mb-4'>Center of Excellence</h3>

        <div  className='row d-flex justify-content-around '>

          <Card data-aos="zoom-in-right" className='mb-3 pt-2' style={{ width: '18rem' }}>
            <Card.Img className='w-100 ' variant="top" src="https://sreechandhospital.com/wp-content/uploads/2022/02/7.jpg" />
            <Card.Body>
              <Card.Title className='fw-bolder text-center'>Emergency & Trauma Care</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card data-aos="zoom-in-up" className='mb-3 pt-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://sreechandhospital.com/wp-content/uploads/2022/02/8.jpg" />
            <Card.Body>
              <Card.Title className='fw-bolder text-center'>Gastroenterology</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card data-aos="zoom-in-left" className='mb-3 pt-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://sreechandhospital.com/wp-content/uploads/2022/02/4.jpg" />
            <Card.Body>
              <Card.Title className='fw-bolder text-center'>Cardiac Science</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>



        </div>



      </div>
    </>
  )
}

export default Excellence
import React from 'react'
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel';
import Excellence from '../components/Excellence'
import Feedback from '../components/Feedback'
import Playstore from '../components/Playstore';
import Contact from '../components/Contact';


function Home() {
    return (
        <>
            <Header insideAuth={true} />

            {/* carousel */}

            <Carousel fade >
                <Carousel.Item>
                    <img src="https://www.hnchospitals.com/img/slider/slide-11.jpg" alt="" />
                    <Carousel.Caption>
                        <h3 className='text-dark fw-bolder ' >We Take Care of Your  Health</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.hnchospitals.com/img/slider/slide1-2.jpg" alt="" />
                    <Carousel.Caption>
                        <h3 className='text-dark fw-bolder'>We Thirive to Ensure  Better Families and  Communities</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.hnchospitals.com/img/slider/slide1-3.jpg" alt="" />
                    <Carousel.Caption>
                        <h3 className='text-dark fw-bolder'>The Greatest Gift You can Give Your Family and The World is a Healthy You</h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div className='container mt-5 '>
                <div className='row align-items-center' >
                    <div className="col-lg-6">
                        <h3 className='text-warning mb-2'>Our Story</h3>
                        <p style={{ textAlign: 'justify' }}>imc Hospitals and Clinics are established with the aim to offer advanced medical treatments of international standards. In addition to offering traditional and established medical care services, imc is distinguished with its speciality medical services. This means imc has the personnel and facilities to provide advanced medical inquiry and treatments which are unique to this region.
                            Whether a patient is coming in for a routine or a specialized procedure, they will always benefit from imc's unique ability to quickly implement the newest discoveries and advancements in medicine. imc health care group comprises of multi speciality hospitals and clinics with modern facilities and services with various departments working round the clock.
                            Every member of our team has pledged to make the services commitment to their knowledge to provide our patients, families and this is supported by the highest order of compassion, innovation, science and technology.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg" alt="" />
                    </div>


                </div>

            </div>

            <Excellence />

            <div className='mt-5 mb-5 parallx1'>
                {/* <img src="https://assets.kpmg.com/is/image/kpmg/nurse-holding-stethoscope-in-hand-in-front-of-colleagues-in-hospital-hall-event:cq5dam.web.1400.350" alt="" /> */}
            </div>

            <Feedback />
            <div className='mt-5 mb-5 parallx2'>
                {/* <img src="https://assets.kpmg.com/is/image/kpmg/nurse-holding-stethoscope-in-hand-in-front-of-colleagues-in-hospital-hall-event:cq5dam.web.1400.350" alt="" /> */}
            </div>
            <Contact/>
            <Playstore/>




        </>
    )
}

export default Home
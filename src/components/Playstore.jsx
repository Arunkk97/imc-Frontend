import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import appstore from '../assets/appstore.png'
import playstore from '../assets/playstore.jpg'

function Playstore() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <>
      <h3 className='text-warning text-center mt-5 mb-3'>Download Our Apps. Everything You Need to Know</h3>

      <div className='d-flex justify-content-center'>
        <a data-aos="fade-right" href='https://www.apple.com/in/store' target='_blank'><img style={{ height: '50px' }} src={appstore} alt="" /></a>
        <a data-aos="fade-left" href='https://play.google.com/store/apps?hl=en_IN&gl=US' target='_blank'><img style={{ height: '50px' }} src={playstore} alt="" /></a>
      </div>
    </>
  )
}

export default Playstore 
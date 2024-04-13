import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Playstore() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <>
    <h3 className='text-warning text-center mt-5 mb-3'>Download Our Apps. Everything You Need to Know</h3>

    <div className='d-flex justify-content-center'>
      <a data-aos="fade-right" href='https://www.apple.com/in/store' target='_blank'><img style={{height:'50px'}} src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png" alt="" /></a>
      <a data-aos="fade-left" href='https://play.google.com/store/apps?hl=en_IN&gl=US' target='_blank'><img style={{height:'50px'}} src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/07/playstore-1690375555.jpg" alt="" /></a>
    </div>
    </>
  )
}

export default Playstore 
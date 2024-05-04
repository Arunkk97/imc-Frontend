import React from 'react'
import Typewriter from 'typewriter-effect'


function Message() {
  return (
    <>
      <div className='container ' style={{ height: '150px' }}>
        <h3 className='text-warning  '>Our Vision</h3>

        <div className='text-center fw-bolder mt-3  ' style={{ fontFamily: 'cursive', fontSize: '30px' }}>
          <Typewriter
            options={{
              strings: ["Working together in bringing a smile to all our patients by providing exceptional health care services...", "To make a healthy difference in our patients lives and community by combining quality and care..."],
              autoStart: true,
              loop: true,
              deleteSpeed: 50
            }}
          />
        </div>
      </div>

    </>
  )
}

export default Message
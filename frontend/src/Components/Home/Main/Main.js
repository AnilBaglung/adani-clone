import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <>
      <section className='main'>
        <video src='../assets/adani enterprise/AEL_vid.mp4' itemType='video/mp4' className='video'  preload='auto' autoPlay loop muted></video>
      </section>
    </>
  )
}

export default Main
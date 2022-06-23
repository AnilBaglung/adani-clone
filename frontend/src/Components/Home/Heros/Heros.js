import React from 'react'
import './Hero.css'

const Heros = () => {
  return (
    <>
      <section className='ourheros'>
        <div className='sub-hero'>
        <div className='hero-rows'>

          <div className='hero-column'>
          <iframe height='500' width='1500' src="https://www.youtube.com/embed/oRsQQ01sApo" title='Youtube Video Player'></iframe>
          </div>

          <div className='hero-column'>
            <div className='text-desc'>
            <h3>Adani Vidya Mandir</h3>
            <p>Watch the story of #InclusiveGrowth and transformation driven by #ResponsibleMining practices in Surguja, Chhattisgarh. In the remote areas of Surguja, Adani has been on a mission to drive the overall development of tribal communities. With the establishment of Adani Vidya Mandir, education dreams of hundreds of tribal children are getting fulfilled.</p>
            <span className='watchnow'>Watch Now</span>
            </div>
            <img src='./assets/adani enterprise/1.jpg' alt=''></img>
            <img src='./assets/adani enterprise/2.jpg' alt=''></img>
            <img src='./assets/adani enterprise/3.jpg' alt=''></img>
          </div>
        </div>

        </div>
      </section>
    </>
  )
}

export default Heros
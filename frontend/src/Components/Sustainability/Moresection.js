import React from 'react'
import './Moresection.css'
import { useNavigate } from 'react-router-dom'

const Moresection = () => {
  const navigate = useNavigate()
  return (
    <>
        <div className='more-section'>
        <div className='sub-more-section'>
        <h3> More From the section</h3>
        <div className='section-content'>
            <div className='environment-section' onClick={()=>navigate('../sustainability/environment')}>
              <img src='../assets/adani enterprise/sustainability/Environment_Sustainability.jpg'></img>
              <p className='upper-text'>Environment</p>
              <p className='middle-text'>First company to deploy tree transplantor in coal mining sector in india</p>
            </div>

            <div className='water-section' onClick={()=>navigate('../sustainability/water-management')}>
              <img src='../assets/adani enterprise/sustainability/Water_Sustainability.jpg'></img>
              <p className='upper-text'>Water</p>
              <p className='middle-text'>100% of the water used in mine washery is recycled</p>
            </div>

            <div className='communities-section' onClick={()=>navigate('../sustainability/communities')}>
              <img src='../assets/adani enterprise/sustainability/m.jpg'></img>
              <p className='upper-text'>Communities</p>
              <p className='middle-text'>Transforming lives with a focus on rural Education, Health, Livelihood and Infrastructure</p>
            </div>
            <div className='safety-section' onClick={()=>navigate('../sustainability/safety')}>
              <img src='../assets/adani enterprise/sustainability/Safety_Sustainability.jpg'></img>
              <p className='upper-text'>Safety</p>
              <p className='middle-text'>Primacy to safety, in everything we do</p>
          </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Moresection

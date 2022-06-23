import React from 'react'
import './Sustainability.css'
import Navbar from '../Home/Navbar/Navbar'
import Links  from '../Home/Liinks/Links'
import Footer from '../Home/Footer/Footer'
import {Link, useNavigate} from 'react-router-dom'

const Sustainability = () => {
  const navigate=useNavigate()
  return (
    <>
      <Navbar/>
      <>
      <section className='business-hero-section'>
      <div className='main-img'>
        <img src='../assets/adani enterprise/sustainability/sustu.jpg' alt=''></img>
      </div>
      <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>

        </div>

      <div className='sus-main-down'>
        <h3 className='downside'>Sustainability</h3>
        <p>Incubating the nation's growth with sustainable development goals</p>
      </div> 

      </section>
    </>
    <>
      <section className='sus-body'>
      <div className='sus-content'>

        <div className='sus-growth'>
        <h3>Growth with Sustainability</h3>
        <p>At Adani Enterprises Ltd, we believe in implementing an integrated thinking to value creation. The long-term sustainability of our business is built on the foundation of delivering sustained value for our stakeholders. Our journey of value-creation is built around an integrated approach of taking into account Environment, Sustainability and Governance principles.</p>

        </div>

        <div className='more-section'>
        <h3> More From the section</h3>
        <div className='section-row-2'>
          <div className='column-left'>
            <div className='environment-section' onClick={()=>navigate('/sustainability/environment')}>
              <img src='../assets/adani enterprise/sustainability/Environment_Sustainability.jpg'></img>
              <p className='upper-text'>Environment</p>
              <p className='middle-text'>First company to deploy tree transplantor in coal mining sector in india</p>
            </div>
            <div className='column-2'>
            <div className='water-section' onClick={()=>navigate('/sustainability/water-management')}>
              <img src='../assets/adani enterprise/sustainability/Water_Sustainability.jpg'></img>
              <p className='upper-text'>Water</p>
              <p className='middle-text'>100% of the water used in mine washery is recycled</p>
            </div>
            <div className='communities-section' onClick={()=>navigate('/sustainability/communities')}>
              <img src='../assets/adani enterprise/sustainability/m.jpg'></img>
              <p className='upper-text'>Communities</p>
              <p className='middle-text'>Transforming lives with a focus on rural Education, Health, Livelihood and Infrastructure</p>
            </div>
            </div>
          </div>
          <div className='column-right'>
           <p>Read our latest</p>
           <h4>Sustainability Report</h4>
           <img src='../assets/adani enterprise/sustainability/right.jpg'></img>
           <span>Archives</span>
          </div>
        </div>
        <div className='safety-section' onClick={()=>navigate('/sustainability/safety')}>
              <img src='../assets/adani enterprise/sustainability/Safety_Sustainability.jpg'></img>
              <p className='upper-text'>Safety</p>
              <p className='middle-text'>Primacy to safety, in everything we do</p>
          </div>

        </div>
        </div>
      </section>
    </>
      <Links/>
      <Footer/>

    </>
  )
}

export default Sustainability
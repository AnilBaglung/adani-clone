import React from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import Footer from '../../Home/Footer/Footer'
import Links from '../../Home/Liinks/Links'
import Moresection from '../Moresection'
import { useNavigate } from 'react-router-dom'

const Watermang = () => {
  const navigate= useNavigate()
  return (
    <>
      <Navbar/>

      <section className='business-hero-section'>
      <div className='main-img'>
        <img src='../assets/adani enterprise/sustainability/Water_Sustainability.jpg' alt=''></img>
      </div>
      <div className='business-top'>
        <div onClick={()=>navigate('../../')}><p className='upside'>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('../sustainability')}><p>Sustainability</p></div>
      </div>

      <div className='sus-main-down'>
        <h3 className='downside'>Water</h3>
        <p style={{width:'80%'}}>100% of the water used in mine washery is recycled</p>
      </div> 

      </section>

      <div className='more-section'>
        <div className='sub-main-section'>
        <div className='my-social-icons'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-square"></i>
        <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className='row-2-main'>
        <div className='left-text'>
          <p style={{fontFamily:'sans-serif', lineHeight:'25px'}}>Water is the most critical aspect of the mining operations. The seepage water as a part of mining operations is gathered into a temporary reservoir and using the same for the mining operations. Till date, we have ensured that 100% of the water used in mine washery is recycled.<br/><br/>Additionally, the systems, technology and machinery deployed ensures minimal water usage.<br/><br/>Through Adani Foundation, we also work in the nearby community areas to increase the capacity of ponds and building of check dams to enhance rain water harvesting. These initiatives have helped increase the ground water tables and made water accessible for irrigation and drinking purpose.</p>
        </div>

        <div className='column-right'>
        <p>Read our latest</p>
          <h4>Sustainability Report</h4>
          <img src='../assets/adani enterprise/sustainability/right.jpg'></img>
          <span>Archives</span>
        </div>

        </div>

        </div>
      </div>


      <Moresection/>

      <Links/>
      <Footer/>      
    </>
  )
}

export default Watermang
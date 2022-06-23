import React from 'react'
import './Safety.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Moresection  from '../Moresection'
import { useNavigate } from 'react-router-dom'

const Safety = () => {
  const navigate= useNavigate()
  return (
    <>
    <Navbar/>

    <section className='business-hero-section'>
    <div className='main-img'>
      <img src='../assets/adani enterprise/sustainability/Safety_Sustainability.jpg' alt=''></img>
    </div>
    <div className='business-top'>
      <div onClick={()=>navigate('../../')}><p className='upside'>Home</p></div>
      <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
      <div onClick={()=>navigate('../sustainability')}><p>Sustainability</p></div>
    </div>

    <div className='sus-main-down'>
      <h3>Safety</h3>
      <p>Primacy to safety, in everything we do</p>
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
        <p style={{fontFamily:'sans-serif', lineHeight:'25px'}}>Safety is of paramount importance in coal mining due to its inherent hazardous nature.<br/><br/>In India, The Directorate General of Mines Safety (DGMS) has laid out stringent standards of mining operation in order to ensure workers’ safety at mines. Adani Mining believes in absolute adherence to the highest level of safety standards and the same has been recognized by DGMS over the years. The company has been awarded first in ‘Publicity Propaganda’ and second best in ‘Surveying’ at the Annual Safety Fortnight Meet 2015 among SECL & all private captive coal mines of Bilaspur, Jabalpur & Raigarh region.<br/><br/>The company gives a lot of emphasis on inculcating safety in the lives of its employees. Each employee, including contractors are provided safety training regularly. Every quarter, Safety Week is celebrated. Events such as safety slogan competitions, quiz and safety poster competitions etc. are also organized which have helped in creating awareness among employees. There have been Zero unsafe incidents in the mining area since inception of operation in year 2013 at Parsa Mine site, which is a remarkable achievement. Safety is an ongoing endeavor and we are determined to raise the bar day by day.<br/><br/>In Indonesia, the company follows health and safety program at operations site and provides people with safety shoes, helmet, visibility vest, safety glasses/goggles, gloves; etc. as required by the nature of work. Till date there has been no fatalities at the operations site. </p>
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

export default Safety
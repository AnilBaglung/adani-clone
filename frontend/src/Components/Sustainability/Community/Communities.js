import React from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Moresection  from '../Moresection'
import {Link, useNavigate} from 'react-router-dom'

const Communities = () => {
  const navigate= useNavigate()
  return (
    <>
    <Navbar/>

    <section className='business-hero-section'>
    <div className='main-img'>
      <img src='../assets/adani enterprise/sustainability/m.jpg' alt=''></img>
    </div>
    <div className='business-top'>
      <div onClick={()=>navigate('../../')}><p className='upside'>Home</p></div>
      <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
      <div onClick={()=>navigate('../sustainability')}><p>Sustainability</p></div>
    </div>

    <div className='sus-main-down'>
      <h3 className='downside'>Communities</h3>
      <p style={{width:'80%'}}>Transforming lives with a focus on rural Education, Health, Livelihood and Infrastructure</p>
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
        <p style={{fontFamily:'sans-serif', lineHeight:'25px'}}>Through Adani Foundation, the CSR arm of Adani Group, we now reach 18 states and 2,250 villages and towns touching over 5,00,000 families. Along with the growth of the business, it is this goodness that makes our efforts meaningful.<br/><br/>To know more, visit <a href="https://adanifoundation.org" style={{color:'blue', textDecoration:'none', fontSize:'18px'}} target='_blank'>adanifoundation.org</a></p>
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

export default Communities
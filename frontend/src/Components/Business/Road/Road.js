import React from 'react'
import './Road.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const Road = () => {
  const navigate=useNavigate()
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false
  };
  return (
    <>
      <Navbar/>

  <section className='business-hero-section'>
  <div className='main-img'>
      <img src='../assets/adani enterprise/business/RI1.jpg' alt=''></img>
  </div>
  <div className='business-top'>

  <div onClick={()=>navigate('/')}><p>Home</p></div>
  <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
  <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
  </div>
  <div className='business-type-text'><p>Road, Metro and Rail</p></div>
  <div className='business-down'>
      <h3 className='downside'>Building India's lifeline</h3>
  </div> 

  </section>

  <section className='business-service'>
    <div className='business-service-desc'>
      <div className='business-service-2-row'>

      <div className='business-service-col-2'>
      <div>
        <h3 className='business-headline'>Road, Metro and Rail</h3>
        <p>To contribute towards Nation Building and Infrastructure development, the Company intends to tap the opportunities in the road, metro & rail sector by developing national highways, expressways, tunnels, metro-rail, railways, etc.<br/><br/>Adani Group has a successful track record of nurturing businesses in the Infrastructure Sector. The group has developed several railway lines in India and abroad. Adani owns the longest private railway lines spanning about 300 km in India. These private rail lines are connected to our ports, mines and other business hubs to ensure seamless cargo movement.</p><br/>
        <ul className='road-metro-ul'>
          <li className='road-metro-li'>As part of the new business, the Group will focus on nation-wide projects initiated by the National Highways Authority of India (NHAI) and Ministry of Road Transport and Highways (MORTH), Ministry of Railways, Metro Corporations of the various States and similar projects under the purview of other Central or State Authorities.</li>
          <li className='road-metro-li'>As a developer, the Company will primarily target PPP projects structured on the Build-Operate-Transfer (BOT), Toll-Operate-Transfer (TOT) & Hybrid-Annuity Mode (HAM) models.</li>
          <li className='road-metro-li'>The Group has won 3 projects (Bilaspur-Pathrapali in Chattisgarh, Suryapet-Khammam and Mancherial –Repallewada in Telangana) comprising approximately 650 lane kms under HAM model of NHAI.</li>
        </ul>
      </div>
      </div>
      <div className='business-service-col-2'>
      <Slider {...settings}>
        <div className='business-service-img'>
          <img src='../assets/adani enterprise/Business/RI2.jpg' alt=''></img>
        </div>
        <div className='business-service-img'>
          <img src='../assets/adani enterprise/Business/Road2.jpg' alt=''></img>
        </div>
      </Slider>


      </div>

      </div>

      </div>
      </section>

      <Links/>
      <Footer/>
    </>
  )
}

export default Road
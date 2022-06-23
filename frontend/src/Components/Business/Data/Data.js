import React from 'react'
import './Data.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const Data = () => {
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
        <img src='../assets/adani enterprise/business/data center2.png' alt=''></img>
    </div>
    <div className='business-top'>

    <div onClick={()=>navigate('/')}><p>Home</p></div>
    <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
    <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
    </div>
    <div className='business-type-text'><p>Data Center</p></div>
    <div className='business-down'>
        <h3 className='downside'>Inherent capabilities to build network of hyperscale data centres</h3>
    </div> 

    </section>

    <section className='business-service'>
      <div className='business-service-desc'>
        <div className='business-service-2-row'>

          <div className='business-service-col-2'>
          <div>
            <h3 className='business-headline'>Data Center</h3>
            <p>As India’s internet economy continues to be on a surge, as there is an increasing need to build requisite datacentre to ensure seamless uninterrupted data consumption and storage.<br/><br/>The growing smartphone subscribers with rising monthly mobile data traffic, coupled with rising broadband penetration and increasing digital transactions per year, will create an enormous need to collect, store, process and distribute data.<br/><br/>Adani Enterprises Ltd (AEL) is the only company with inherent capabilities to build Data centres across the country. At AEL, we are competitively placed with some key advantages, namely:</p><br/>
            <ul className='data-center-ul'>
              <li >Complete ownership of large land parcels across the country</li>
              <li>Project management capabilities and resources availability</li>
              <li>End-to-end power value chain (generation, transmission and distribution)</li>
              <li>Fiber connectivity and strong network connectivity</li>
              <li>Renewable Power generation to ensure sustainability</li>
              <li>Strong Policy advocacy credentials</li>
              <li>As a part of our initial plan, we intend to build Data Centers in NCR, Mumbai, Chennai & Hyderabad</li>
            </ul>
          </div>
          </div>
          <div className='business-service-col-2'>
          <Slider {...settings}>
            <div className='business-service-img'>
              <img src='../assets/adani enterprise/Business/data3.jpg' alt=''></img>
            </div>
            <div className='business-service-img'>
              <img src='../assets/adani enterprise/Business/data2.jpg' alt=''></img>
            </div>
          </Slider>


        </div>

      </div>


      </div>
    </section>

    <section className='events'>
      <div className='events-row'>
        <h2>Visit the website for details</h2>
        <button className='explore-button'><a href='https://www.adanisolar.com/' target='_blank'>Visit Now</a></button>
      </div>

    </section>

    <Links/>
    <Footer/>
    </>
  )
}

export default Data
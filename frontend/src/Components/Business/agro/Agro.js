import React from 'react'
import './agro.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const Agro = () => {
  const navigate = useNavigate()

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
            <img src='../assets/adani enterprise/business/FruitBanner.jpg' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
        </div>
        <div className='business-type-text'><p>Agro</p></div>
        <div className='business-down'>
            <h3 className='downside'>Empowering over 15,000 farmers in Himanchal Pradesh</h3>
        </div> 

        </section>

        <section className='business-service'>
          <div className='business-service-desc'>
            <div className='business-service-2-row'>

            <div className='business-service-col-2'>
            <div>
              <h3 className='business-headline'>Agro</h3>
              <p>Adani Agri Fresh Limited (AAFL), a wholly owned subsidiary of the company has pioneered the establishment of integrated storage, handling and transportation infrastructure for Apples in Himachal Pradesh. It has set up modern Controlled Atmosphere storage facilities at three locations, such as Rewali, Sainj, and Rohru in Shimla District.<br/><br/>The Company has also set up a marketing network in major towns across India to cater to the needs of wholesale, retail and organized retail chain stores. The Company which is marketing Indian fruits under the brand name FARM-PIK, has expanded its footprint in the branded fruit segment. The Company also imports Apples, Pears, Kiwis, Oranges, Grapes etc. from various countries for sale in India.</p>
            </div>
            </div>
            <div className='business-service-col-2'>
            <Slider {...settings}>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Farmpik2.jpg' alt=''></img>
              </div>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Farmpik3.jpg' alt=''></img>
              </div>
            </Slider>


            </div>

            </div>

            </div>
            </section>

            
            <section className='events'>
              <div className='events-row'>
                <h2>Visit the website for details</h2>
                <button className='explore-button'><a href='https://www.farmpik.com/' target='_blank' style={{color:'white'}}>Visit Now</a></button>
              </div>

            </section>

      <Links/>
      <Footer/>
    </>
  )
}

export default Agro
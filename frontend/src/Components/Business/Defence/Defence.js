import React, {useState} from 'react'
import './Defence.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const Defence = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false
  };
  const navigate = useNavigate()
  const [click, setClick] = useState('')
  const handleMenu=()=>setClick(!click)

  return (
    <>
        <Navbar/>
        <section className='business-hero-section'>
        <div className='main-img'>
            <img src='../assets/adani enterprise/business/Defence1.jpg' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
        </div>
        <div className='business-type-text'><p>Defence & Aerospace</p></div>
        <div className='business-down'>
            <h3 className='downside'>Enhancing India's Defence and Industrial Capabilities</h3>
        </div> 

        </section>

        <section className='business-service'>
          <div className='business-service-desc'>
            <div className='business-service-2-row'>

            <div className='business-service-col-2'>
            <div>
              <h3 className='business-headline'>Defence & Aerospace</h3>
              <p>Adani Defence and Aerospace leads Adani Enterprises Ltd., foray into defence and aerospace and our vision is to help transform India into a destination for world class high tech defence manufacturing aligned to the ‘Make in India’ initiative.<br/><br/>India is determined to be among the top five countries in the world in defence capabilities and a vibrant defence industry is essential to securing national sovereignty and self-reliance in defence.<br/><br/>We are working with Global OEM’s and Indian MSMEs to manufacture fighter aircraft, unmanned aerial systems, helicopters, submarines, air defence guns, missiles and small arms. We are also developing tier 1 capabilities in avionics and systems, opto-electronics, aerostructure and precision components, aerospace composites as well as radar and electronic warfare systems.</p>
            </div>
            <div className='readmore-text'>
              <div onClick={handleMenu} className={click? 'displaynone':'displayyes'}>
              <p>Read More <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
              <div className={click? 'displayyes':'displaynone'}>
              <p style={{textAlign:'left'}}>We are making strategic investments and setting up global standards defence manufacturing to help grow MSMEs and India’s defence ecosystem.<br/><br/>Our aim is to enhance India’s defence and industrial capabilities and to help the nation realise its ambition of strategic independence.</p>
            </div>
              <div onClick={handleMenu} className={click? 'displayyes':'displaynone'}>
              <p>Read Less <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
              </div>
            </div>
            </div>
            <div className='business-service-col-2'>
            <Slider {...settings}>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Defence2.jpg' alt=''></img>
              </div>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Defence3.jpg' alt=''></img>
              </div>
            </Slider>


            </div>

            </div>

            </div>
            </section>

            
            <section className='events'>
              <div className='events-row'>
                <h2>Visit the website for details</h2>
                <button className='explore-button'><a href='https://www.adanidefence.com/' target='_blank' >Visit Now</a></button>
              </div>

            </section>

      <Links/>
      <Footer/>
    </>
  )
}

export default Defence
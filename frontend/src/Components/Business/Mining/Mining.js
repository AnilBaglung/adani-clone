import React,{useState} from 'react'
import './Mining.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'

const Mining = () => {
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
            <img src='../assets/adani enterprise/business/Mining1.jpg' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
        </div>
        <div className='business-type-text'><p>Mining Services</p></div>
        <div className='business-down'>
            <h3 className='downside'>India’s first private mining company who pioneered the concept of Mine Developer and Operator (MDO)</h3>
        </div> 

        </section>

        <section className='business-service'>
          <div className='business-service-desc'>
            <div className='business-service-2-row'>

            <div className='business-service-col-2'>
            <div>
              <h3 className='business-headline'>Mining Service</h3>
              <p>Electricity is an essential tool to empower humanity in the rapidly growing world. While evolved conglomerates such as the Adani Group have taken a leap in promoting environment friendly solar and wind power, coal remains the dominant fuel for 1.25 billion strong population of India.<br/><br/>It is well established that the average electricity consumption of people in India is abysmally low as compared to our global peers. With increasing urbanisation and changing lifestyle, the demand for electricity is likely to only increase in the future. According to industry projections, power demand in India is likely to touch 1600 billion units by 2022 and spiral up to 2100 billion units over the next decade. This will be catered to by a variety of energy sources, including coal.<br/><br/>At Adani Enterprises Limited, we bridge the gap between demand and supply of coal through a combination of imports and responsible mining. Besides contributing to the domestic coal production with the help of environment friendly practices, we have also developed a strong supplier base in South Africa, Australia, USA and Russia among other coal rich geographies.</p>
            </div>
            <div className='readmore-text'>
              <div onClick={handleMenu} className={click? 'displaynone':'displayyes'}>
              <p>Read More <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
              <div className={click? 'displayyes':'displaynone'}>
              <p style={{textAlign:'left'}}>In just about two years after setting up our mining business unit, we pioneered the Mine Developer and Operator (MDO) model in 2009 starting with the Parsa East and Kanta Basan Coal Blocks. This project from planning to production was done in a record time of 3.5 years, which is a benchmark for the coal mining industry in India. In March 2013, we successfully dispatched the first rake of coal to a state-owned power generation utility of Rajasthan.<br/><br/>Our vision of achieving energy security for the nation is gradually transforming lives across the nooks and corners of the country. The project of Parsa East & Kanta Basan, for instance, has employed more than 400 tribal people. A school has been started to impart quality education to tribal children. Free medical assistance and health care are now available at their doorstep. Vocational training to women is making them self-sufficient and financially independent. The company has also established a football academy at Ambikapur to nurture and nourish the aspirations of the tribal youth.</p>
            </div>
              <div onClick={handleMenu} className={click? 'displayyes':'displaynone'}>
              <p>Read Less <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
              </div>
            </div>
            </div>
            <div className='business-service-col-2'>
            <Slider {...settings}>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Mining2.jpg' alt=''></img>
              </div>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Integrated2.jpg' alt=''></img>
              </div>
            </Slider>


            </div>


            </div>

            <div className='all-businesses'>
            <h3 className='business-headline' style ={{marginBottom:'30px'}}>Our Mining Operation</h3>
          <div className='all-businesses-row'>
          

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/Mining.jpg' alt=''></img>
              <h5>India</h5>
              <p>Pioneer of Mine Developer & Operator(MDO)<br/>Concept in India;mines in Indonesia & Australia</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/MinePic.jpg' alt=''></img>
              <h5>Indonesia</h5>
              <p>Largest employer in Bunyu Island, Indonesia</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/mine-01-2019.jpg' alt=''></img>
              <h5>Australia</h5>
              <p>Energy solutions for an advancing world</p>
            </div>
            </div>
            </div>
            

          </div>
        </section>


        <Links/>
        <Footer/>


    </>
  )
}

export default Mining
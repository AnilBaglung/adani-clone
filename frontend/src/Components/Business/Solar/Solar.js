import React,{useState} from 'react'
import './Solar.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const Solar = () => {
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
            <img src='../assets/adani enterprise/business/Solar-Banner.jpg' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
        </div>
        <div className='business-type-text'><p>Solar manufacturing</p></div>
        <div className='business-down'>
            <h3 className='downside'>Lighting up India's solar dream</h3>
        </div> 

        </section>

        <section className='business-service'>
          <div className='business-service-desc'>
            <div className='business-service-2-row'>

            <div className='business-service-col-2'>
            <div>
              <h3 className='business-headline'>Solar Manufacturing</h3>
              <p>Incubating India’s solar dream through Adani Solar, Adani Enterprises has set up the country’s first and largest vertically integrated Solar Photovoltaic Manufacturing and EPC business in Mundra Special Economic Zone (SEZ).<br/><br/>With a 1.5 GW capacity along with Research and Development (R&D) facilities within an Electronic Manufacturing Cluster (EMC) facility, this state-of the-art Adani Solar plant produces Solar Cells and Modules. It is well supported by manufacturing units of critical components that includes EVA, Back-sheet, Glass, Junction box and Solar cell and string interconnect ribbon, designed to achieve maximum efficiency in the Indian market.</p>
            </div>
            <div className='readmore-text'>
              <div onClick={handleMenu} className={click? 'displaynone':'displayyes'}>
              <p>Read More <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
              <div className={click? 'displayyes':'displaynone'}>
              <p style={{textAlign:'left'}}>With projects over 250 MW commissioned and over 400 MW under execution, Adani Solar is also India’s fastest growing rooftop and distributed solar EPC Company. It is one of the leading partner in the government’s “Make in India” initiative through its various measures of 12 GW CPSU scheme, KUSUM scheme etc. <br/><br/>The cutting-edge technology, with machines and equipment sourced from the best-in-class producers, aim to help in cost leadership, scale of operations and reliability standards as per global benchmarks. With its multi-level infrastructure, the manufacturing facility will be optimized for scaling up to 3.5 GW of modules and cells under a single roof.</p>
            </div>
              <div onClick={handleMenu} className={click? 'displayyes':'displaynone'}>
              <p>Read Less <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
              </div>
            </div>
            </div>
            <div className='business-service-col-2'>
            <Slider {...settings}>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Solar2.jpg' alt=''></img>
              </div>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Solar3.jpg' alt=''></img>
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

export default Solar
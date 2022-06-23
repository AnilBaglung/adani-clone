import React,{useState} from 'react'
import './Aboutus.css'
import Navbar from '../Home/Navbar/Navbar'
import Links from '../Home/Liinks/Links'
import Footer from '../Home/Footer/Footer'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom'

const Aboutus = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  const navigate = useNavigate()
  const [click, setClick] = useState('')
  const handleMenu=()=>setClick(!click)
  return (
    <>
    <Navbar/>

    <section className='business-hero-section'>
      <div className='main-img'>
        <img src='../assets/adani enterprise/About-us-banner.jpg' alt=''></img>
      </div>
      <div className='business-top'>
      <div onClick={()=>navigate('../../')}><p className='upside'>Home</p></div>
      <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
      <div onClick={()=>navigate('../about')}><p>About-Us</p></div>
      </div>

      <div className='env-down'>
        <p>Nurturing businesses that address national importance and creates value for stakeholders</p>
      </div> 

      </section>

      <section className='about-body'>
        <div className='aboutus-container'>
        <div className='about-enterprise'>
          <h3>About Enterprises</h3>
          <p>Adani Enterprises Limited (AEL) is the flagship company of the Adani Group, one of India’s largest business organisations. Over the years, Adani Enterprises has focused on building stellar infrastructural assets contributing to nation-building.</p>
          <div className='readmore-text'>
            <div onClick={handleMenu} className={click? 'displaynone':'displayyes'}>
            <p>Read More <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
            <div className={click? 'displayyes':'displaynone'}>
              <p style={{textAlign:'left'}}>Having successfully built unicorns like Adani Transmission, Adani Power, Adani Ports & SEZ, Adani Green Energy and Adani Total Gas, the company has contributed significantly to make the country self-reliant.<br/><br/>The next-generation of its strategic business investments are centered on the fields of airport management, roads, data center and water infrastructure. Following these principles has led to very strong returns to our shareholders. A one-rupee investment in Adani Enterprises, which was the group’s first IPO in 1994, has returned over 800x.</p>
            </div>
            <div onClick={handleMenu} className={click? 'displayyes':'displaynone'}>
            <p>Read Less <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
          </div>

          <div className='vision-row'>
          <div className='vision-col'>
            <h3>Vision</h3>
            <p>To be a world class leader in businesses that enrich lives and contribute to nations in building infrastructure through sustainable value creation.</p>
          </div>
          <div className='vision-col'>
          <Slider {...settings}>
          <div className='text-image'>
            <img src='./assets/adani enterprise/1trust.png'></img>
            <h5>Trust</h5>
            <p>We shall believe in your employee and other stakeholders</p>
          </div>

          <div className='text-image'>
            <img src='./assets/adani enterprise/1Courage.png'></img>
            <h5>Courage</h5>
            <p>We shall embrace new ideas and businesses</p>
          </div>

          <div className='text-image'>
            <img src='./assets/adani enterprise/1Commitment.png'></img>
            <h5>Commitment</h5>
            <p>We shall standby our promisses and adhere to high standards of businesses</p>
          </div>
          </Slider>


          </div>
          </div>

          <div className='gautam-adani'>
            <div className='adani-row'>
              <div className='adani-column' onClick={()=>navigate('/about/chairman-message')}>
              <h2>Chairman's Corner</h2>
              <p>We continue to draw inspiration from our vision ‘Growth with Goodness’, to be a world class leader in businesses that enrich lives and contribute to nation building.</p>
              <p style={{fontSize:'16px', marginBottom:'20px'}}>Read More</p>
              <h5>Gautam Adani</h5>
              <span>Chairman, Adani Group</span>
              </div>
              <div className='adani-column'>
                <img src='./assets/adani enterprise/GA.png'></img>
              </div>
            </div>
          </div>

          <div className='board-of-director'>
          <h3>Board Of Directors</h3>
          <p>Visionary leadership, illustrious experience, and remarkable track record have been the signature of our legacy. Browse this section to know more about our Board of Directors.</p>
          <div className='board-director-row'>
          <div className='company-director'>
            <img src='../assets/adani enterprise/leader/gautam_adani.jpg' alt=''></img>
            <div>
            <h2>Gautam Adani</h2>
            <p>Chairman</p>
            </div>

          </div>
          <div className='company-director'>
            <img src='../assets/adani enterprise/leader/rajesh_adani.png' alt=''></img>
            <div>
            <h2>Rajesh Adani</h2>
            <p>Managing Director</p>
            </div>
          </div>
          <div className='company-director'>
            <img src='../assets/adani enterprise/leader/pranavadani.jpg' alt=''></img>
            <div>
            <h2>Pranav Adani</h2>
            <p>Director</p>
            </div>
          </div>
          <div className='company-director'>
            <img src='../assets/adani enterprise/leader/Photo1update.jpg' alt=''></img>
            <div>
            <h2>Vinay Prakash</h2>
            <p>Director</p>
            </div>
          </div>

          </div>
          <button className='view-more' onClick={()=>navigate('/about/board')}>View All</button>

          </div>


          <div className='about-timeline'>
          <h3>Timeline</h3>
          <div className='timeline-row-3'>
            <div className='timeline-col-3'>
              <h1>2019</h1>
              <p>2nd largest IRM player in the world</p>
            </div>

            <div className='timeline-col-3'>
              <h1>2018</h1>
              <p>Demerger of Adani Green Energy and Adani Gas Limited</p>
            </div>

            <div className='timeline-col-3'>
              <h1>2017</h1>
              <p>Started manufacturing Solar PV panels</p>
            </div>

          </div>
          <button className='view-more' onClick={()=>navigate('/about/timeline')}>View All</button>
          </div>


        </div>
        </div>
      </section>


    <Links/>
    <Footer/>
    </>
  )
}

export default Aboutus
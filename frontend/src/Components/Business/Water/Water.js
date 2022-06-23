import React, {useState} from 'react'
import './Water.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const Water = () => {
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
            <img src='../assets/adani enterprise/business/Water_Banner.jpg' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
        </div>
        <div className='business-type-text'><p>Water</p></div>
        <div className='business-down'>
            <h3 className='downside'>Development and rehabilitation of sewage treatment plants and its associated infrastructure</h3>
        </div> 

        </section>

        <section className='business-service'>
          <div className='business-service-desc'>
            <div className='business-service-2-row'>

            <div className='business-service-col-2'>
            <div>
              <h3 className='business-headline'>Water</h3>
              <p>Water, a basic necessity, is a scarce resource. India which accounts for 17% of world population has access to only 4% of fresh water resources. Lack of holistic policy for water resource management has resulted in acute water crisis in many parts of the country.<br/><br/>Realizing the above, Government of India has taken a path-breaking step forward by amalgamating various government department and ministries into a centralized Jal Shakti Ministry.<br/><br/>Foreseeing the massive need for water infrastructure capacity augmentation in the country we at the Adani Group, have decided to focus on this business segment. The Group has taken the first step by bagging the prestigious waste water treatment, recycle and reuse project at Prayagraj under the National Mission for Clean Ganga Framework.</p><br/>
            </div>
            <div className='readmore-text'>
              <div onClick={handleMenu} className={click? 'displaynone':'displayyes'}>
              <p>Read More <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
              <div className={click? 'displayyes':'displaynone'}>
              <p style={{textAlign:'left'}}>The Group proposes to build upon this in the coming year by exploring similar opportunities. In addition to this, the Group will also explore opportunities in the desalination water space wherein projects for desalination of sea water/brackish water shall be taken up to produce portable water for consumption of general public and industrial purpose.</p>
            </div>
              <div onClick={handleMenu} className={click? 'displayyes':'displaynone'}>
              <p>Read Less <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
              </div>
            </div>
            </div>
            <div className='business-service-col-2'>
            <Slider {...settings}>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Water2.jpg' alt=''></img>
              </div>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Water3.jpg' alt=''></img>
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

export default Water
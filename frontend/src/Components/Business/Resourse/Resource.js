import React,{useState} from 'react'
import './Resourse.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const Resource = () => {
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
            <img src='../assets/adani enterprise/business/ICM_Banner.jpg' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
        </div>
        <div className='business-type-text'><p>Integrated Resources Management</p></div>
        <div className='business-down'>
            <h3 className='downside'>India's largest Integrated Resources Management player and a leading supplier in the world</h3>
        </div> 

        </section>

        <section className='business-service'>
          <div className='business-service-desc'>
            <div className='business-service-2-row'>

            <div className='business-service-col-2'>
            <div>
              <h3 className='business-headline'>Integrated Resources Management</h3>
              <p>In our endeavour towards fulfilling the gap in the availability of coal at thermal power plants of India and to meet coal needs of the nation, we ventured into coal management in 1999. It was one of the urgent needs of an emerging economy. At the same time the country needed richer coal to regulate the impact of dwindling fossil fuels on the economy. We delivered our first rake of imported coal to Suratgarh thermal power station.</p><br/>
            </div>
            <div className='readmore-text'>
              <div onClick={handleMenu} className={click? 'displaynone':'displayyes'}>
              <p>Read More <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
              <div className={click? 'displayyes':'displaynone'}>
              <p style={{textAlign:'left'}}>Today, Adani Enterprises Ltd. (AEL) is largest coal supplier in India and one of the leading suppliers of the vital minerals globally. We are the largest importer of coal from Indonesia. And, our presence in the entire value chain, including logistics, has made us one of the significant revenue earners for the Indian Railways.</p>
            </div>
              <div onClick={handleMenu} className={click? 'displayyes':'displaynone'}>
              <p>Read Less <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
              </div>
            </div>
            </div>
            <div className='business-service-col-2'>
            <Slider {...settings}>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Integrated2.jpg' alt=''></img>
              </div>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Coal3.jpg' alt=''></img>
              </div>
            </Slider>


            </div>

            </div>

            <div className='milestone-at-glance'>
            <h3 className='business-headline'>Milestones at a glance</h3>
            <div className='milestone-row'>
              <div className='milestone-col'>
                <img src='../assets/adani enterprise/Business/coal.png' alt=''></img>
                <p>Traded approx. 66 million tons of coal</p>
              </div>

              <div className='milestone-col'>
                <img src='../assets/adani enterprise/Business/largest-importer.png' alt=''></img>
                <p>Largest importer in India and largest off taker in Indonesia, South Africa and USA for India</p>
              </div>
              <div className='milestone-col'>
                <img src='../assets/adani enterprise/Business/Expanding.png' alt=''></img>
                <p>Expanding in South Asia, ASEAN and pacific region</p>
              </div>
              <div className='milestone-col'>
                <img src='../assets/adani enterprise/Business/Integrated-model.png' alt=''></img>
                <p>Integrated model with expertise in entire supply chain to provide customers delight</p>
              </div>

            </div>
            </div>

            <div className='market-approach'>
            <div className='market-approach-row'>

            <div className='market-approach-col'>
              <h3 className='business-headline'>Sustainable Business Model</h3>
              <p>We have scaled up the business by integrating the complete supply chain from coal mines to the customer through operational excellence.</p>
              <p>Vast experience gained over the years and expertise of our committed team helps to create value for customers by providing end-to-end solutions. Our competitive advantage is derived from the synergy between our businesses by leveraging the state-of-art-infrastructure and support facilities. Adani Group’s largest commercial sea port in India at Mundra and company owned terminals on both the East and West Coasts of India makes us a valuable partner for efficient logistics.</p>
            </div>
            <div className='market-approach-col'>
            <h3 className='business-headline'>Market Approach</h3>
            <p>Our “door to door – coal delivery model comprises taking the risk, responsibility and accountability of sourcing the coal from suppliers, managing sea-borne logistics, providing intermediate holding facility at discharge ports and inland transportation to finally delivering coal at the doorstep of customers. This unique approach has allowed us to create a base of over 600 satisfied customers across various industries such as Power, Cement, Steel and Iron amongst others.</p>
            </div>

            </div>
            </div>

            </div>
            </section>


            <section className='footprint'>
            <div className='footprint-text'>
            <h3 className='business-headline'>Footprint</h3>
            <p>Our expansive country-wide network of more than 10 marketing offices and 20 operational ports enables us to have the reach and scale to provide services to business partners, making us the undisputed leader over the last decade. We have established our presence in emerging coal markets such as Sri Lanka, Thailand, Vietnam, China, Dubai etc. We are a team of more than 200 experienced, highly qualified and energetic people (average age of 40 years). With four global offices, 18 branch centres and a head office based out of Gurgaon, our footprints would only grow and benefit a wider spectrum of people.</p>
            <img src='../assets/adani enterprise/Business/coal-mgmt-map.png' ></img>
            </div>
            </section>


            <Links/>
            <Footer></Footer>    
    </>
  )
}

export default Resource
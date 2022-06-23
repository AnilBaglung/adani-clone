import React,{useState} from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'
import './OilFood.css'

const Oilfood = () => {
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
        <div className='main-img' style={{background:'darkgray'}}>
            <img src='../assets/adani enterprise/business/Edibleoils_Banner.jpg' alt=''></img>
        </div>
        <div className='business-top' style={{background:'rgba(0, 0, 0, 0.3215686274509804)'}}>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
        </div>
        <div className='business-type-text' style={{background:'rgba(0, 0, 0, 0.3215686274509804)', marginTop:'30px'}}><p>Edible Oil And Foods</p></div>
        <div className='business-down'>
            <h3 className='downside'>Contributing to India's food security and building a healthy nation</h3>
        </div> 

        </section>

        <section className='business-service'>
          <div className='business-service-desc'>
            <div className='business-service-2-row'>

            <div className='business-service-col-2'>
            <div>
              <h3 className='business-headline'>Edible Oil and Foods</h3>
              <p>Adani Wilmar Limited (AWL) is a joint venture incorporated in January 1999 between Adani Group, a the leader in International Trading & Private Infrastructure with businesses in key industry verticals such as resources, logistics and energy, and Wilmar International Limited – Singapore, Asia’s leading Agri business group. The Group was created with a vision of ‘Nation Building’ by developing assets of national economic significance. Adani Wilmar’s business activities include oil palm cultivation, oilseed crushing, edible oil refining, sugar milling and refining, specialty fat, oleo chemical, biodiesel and fertilizer manufacturing and grain processing. It has over 850 manufacturing plants and an extensive distribution network covering China, India, Indonesia and 30 other countries.</p>
            </div>
            <div className='readmore-text'>
              <div onClick={handleMenu} className={click? 'displaynone':'displayyes'}>
              <p>Read More <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
              <div className={click? 'displayyes':'displaynone'}>
              <p style={{textAlign:'left'}}>The joint venture kicked off with the commissioning of India's first port-based refinery at Mundra in Gujarat and similar units were developed in other locations.<br/><br/>To know more, visit</p><br/>
              <a href='https://www.fortunefoods.com/' target='_blank' style={{color:'blue'}}>Fortunefoods.com</a><br/><br/>
              <a href='https://www.adaniwilmar.com/' target='_blank' style={{color:'blue'}}>Adaniwilmar.com</a>
            </div>
              <div onClick={handleMenu} className={click? 'displayyes':'displaynone'}>
              <p>Read Less <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
              </div>
            </div>
            </div>
            <div className='business-service-col-2'>
            <Slider {...settings}>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/Wilmar2.jpg' alt=''></img>
              </div>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/179010.jpg' alt=''></img>
              </div>
            </Slider>


            </div>
            </div>
            
            <div className='milestone-food'>
              <h3 className='business-headline' style={{textAlign:'left'}}>Milestone at a glance</h3>
              <div className='milestone-food-row'>
                <div className='milestone-food-col'>
                  <img src='../assets/adani enterprise/Business/oil-icon.png' ></img>
                  <h4>16,800</h4>
                  <p>Tones Per Day</p>
                  <p>Refining Capacity</p>
                </div>

                <div className='milestone-food-col1'>
                  <img src='../assets/adani enterprise/Business/plant-icon.png' ></img>
                  <h4>6,000</h4>
                  <p>Tones Per Day</p>
                  <p>Crushing Capacity</p>
                </div>

                <div className='milestone-food-col2'>
                  <img src='../assets/adani enterprise/Business/Packing-Capacity.png' ></img>
                  <h4>12,900</h4>
                  <p>Tones Per Day</p>
                  <p>Packaging Capacity</p>
                </div>

                <div className='milestone-food-col3'>
                  <img src='../assets/adani enterprise/Business/Outlets.png' ></img>
                  <h4>1 Million +</h4>
                  <p>Outlets</p>
                </div>

                <div className='milestone-food-col4'>
                  <img src='../assets/adani enterprise/Business/Distributor.png' ></img>
                  <h4>5,000</h4>
                  <p>Distributors</p>
                </div>

              </div>
            </div>

            </div>
            </section>

            <section className='adani-brands'>
            <h3 className='business-headline'>Brands</h3>
            <div className='our-brands-row'>
              <div className='brands-img'>
                <img src='../assets/adani enterprise/Business/fortune-logo.png'></img>
              </div>
              <div className='brands-img'>
                <img src='../assets/adani enterprise/Business/aadhaar-logo.png'></img>
              </div>
              <div className='brands-img'>
                <img src='../assets/adani enterprise/Business/fryola-logo.png'></img>
              </div>
              <div className='brands-img'>
                <img src='../assets/adani enterprise/Business/raag-logo.png'></img>
              </div>
              <div className='brands-img'>
                <img src='../assets/adani enterprise/Business/kings-logo.png'></img>
              </div>
              <div className='brands-img'>
                <img src='../assets/adani enterprise/Business/avsar-logo.png'></img>
              </div>
              <div className='brands-img'>
                <img src='../assets/adani enterprise/Business/jubilee-logo.png'></img>
              </div>
              <div className='brands-img'>
                <img src='../assets/adani enterprise/Business/bullet-logo.png'></img>
              </div>
            </div>

            </section>

        <section className='business-service'>
          <div className='business-service-desc'>
            <div className='business-service-2-row'>

            <div className='business-service-col-2'>
            <div>
              <h3 className='business-headline'>Fortune - India’s largest edible oil brand</h3>
              <p>The company has the largest range of edible oils spanning across the categories of Soya, Sun, Mustard, Rice bran, Groundnut, Cottonseed and the company has extended its basket of offering with the introduction of the revolutionary oil – Vivo, India’s first oil for Diabetes care. Besides oil, AWL has also forayed into packed Basmati Rice, pulses, Soya Chunks, Besan and the Fortune Chakki Fresh Atta. The product portfolio of Adani Wilmar spans under various brands such as - Fortune, King’s, Bullet, Raag, Avsar, Pilaf, Jubilee, Fryola, Alpha and Aadhar.</p>
            </div>
            <div className='readmore-text'>
              <div onClick={handleMenu} className={click? 'displaynone':'displayyes'}>
              <p>Read More <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
            </div>
              <div className={click? 'displayyes':'displaynone'}>
              <p style={{textAlign:'left'}}><br/>Adani Wilmar Limited also caters to institutional demand through its industry essential range which includes bulk packs of consumer essentials as well as Lauric & Bakery fats, Castor Oil derivatives, Oleo chemicals and Soya value added products. A state-of-the-art Oleo chemical plant at Mundra gives an unmatched output of 400 TPD and it is one of the largest single location facilities in India. The extensive array of products includes fatty acids, stearic acids, soap noodles and refined glycerin. The company also has a combined processing capacity of 1200 MT of castor seeds per day with solvent and refining units. The castor oil manufacturing facilities are equipped with cutting-edge technology to manufacture different grades of castor oil such as cold pressed, pharma grade and low moisture oil.<br/><br/>Adani Wilmar has introduced branded Edible oil to Middle-East and is now exporting its products including Lecithin, Castor & Soya value added products to more than 19 countries in the Middle-East, South East Asia & East Africa including Singapore, Australia & New Zealand.<br/><br/>The brand commands the loyalty and confidence of over 30 million households and this success is evident in the recognition and awards that have been bestowed upon it:</p><br/>
              <ul className='fortune-india-list'>
                <li>In 2016, Selected amongst the ‘Most Admired Brand and Business leaders’ by the prestigious ‘Whitepage International’.</li>
                <li>In 2016, The Economic Times ‘Best Corporate Brands’ Award.</li>
                <li>In 2016, DuPont Awards for Packaging Innovation.</li>
                <li>In 2016, Porter Prize.</li>
                <li>In 2017, Frost & Sullivan India F&B Innovative Product of the year Award</li>
                <li>Awarded Superbrands 2017-18 for three consecutive time in a row</li>
                <li>In 2018, Most Trusted Brand-Readers Digest – for sixth consecutive year.</li>
                <li>In 2018, Adani Wilmar Limted was bestowed with Silver Rank by ACEF ASIAN LEADERSHIP AWARDS for Best Public Health Initiative – SuPoshan</li>
                <li>In 2018, SKOCH Award to the CSR - SuPoshan Project</li>
              </ul>
            </div>
              <div onClick={handleMenu} className={click? 'displayyes':'displaynone'}>
              <p>Read Less <i class={click? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}></i></p>
              </div>
            </div>
            </div>
            <div className='business-service-col-2'>
              <div className='business-service-img'>
                <img src='../assets/adani enterprise/Business/banner.jpg' alt=''></img>
              </div>
              


            </div>
            </div>

            </div>
            </section>

            
            <section className='events'>
              <div className='events-row'>
                <h2>Visit the website for details</h2>
                <button className='explore-button'><a href='https://www.adaniwilmar.com/' target='_blank'>Visit Now</a></button>
              </div>

            </section>




      <Links/>
      <Footer/>
    </>
  )
}

export default Oilfood
import React from 'react'
import './Business.css'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'
import Links from '../Home/Liinks/Links'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Business = () => {
  const navigate= useNavigate()
  return (
    <>
      <Navbar/>

      <section className='business-hero-section'>
        <div className='main-img'>
            <img src='../assets/adani enterprise/business/business_banner.png' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>

        </div>

        <div className='business-down'>
            <h3 className='downside'>Interests spanning from fundamental sectors and those catering to the changing aspirations of emerging economies</h3>
        </div> 

        </section>

        <section className='business-body'>
        <div className='business-main-contents'>
        <h3 className='business-headline'>Businesses</h3>
        <p>Adani Enterprises Limited, the flagship company of the Adani Group has been driven by the philosophy of incubating stellar infrastructural asset catering to underserved sectors of India. It’s diversified portfolio is broadly split into energy & utilities, transport & logistics and emerging businesses.<br/><br/>Since the Company’s listing in 1994, it has maximised value for stakeholders, while contributing to nation building. Adani Enterprises Limited is presently focused on businesses related to airports, roads, water management, data centers, solar manufacturing, defence and aerospace, edible oils and foods, mining, integrated resource solutions and integrated agri products.</p>
        
        <div className='business-button'>
        <button className='view-more'><div class><p>All Businesses</p><i className="fa-solid fa-angle-down"></i></div></button>
        </div>

        <div className='all-businesses'>
          <div className='all-businesses-row'>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/Airport1.jpg' alt=''></img>
              <h5>Airports</h5>
              <p>Turning India's transit gateways into world-class destinations</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/data center2.png' alt=''></img>
              <h5>Data Center</h5>
              <p>Inherent capabilities to build network of hyperscale data centres</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/Defence1.jpg' alt=''></img>
              <h5>Defence & Aerospaces</h5>
              <p>Enhancing the nation's defence capabilities</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/Edibleoils_Banner.jpg' alt=''></img>
              <h5>Edible Oil & Foods</h5>
              <p>contributing to India's food security and build healthy nation</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/FruitBanner.jpg' alt=''></img>
              <h5>Agro</h5>
              <p>Empowering over 15,000 farmers in Himanchal Pradesh</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/ICM_Banner.jpg' alt=''></img>
              <h5>Integrated Resource Management</h5>
              <p>Energizing India's economy responsibly</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/Mining.jpg' alt=''></img>
              <h5>Mining Services</h5>
              <p>Pioner of Mine Developer & Operator (MDO) <br/>Concept in India; mines in Indonesia & Australia</p>
            </div>


            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/RI1.jpg' alt=''></img>
              <h5>Road, Metro & Rail</h5>
              <p>Building India's lifeline</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/Solar-Banner.jpg' alt=''></img>
              <h5>Solar Manufacturing</h5>
              <p>Lighting up India's solar dream</p>
            </div>

            <div className='all-businesses-col'>
              <img src='../assets/adani enterprise/Business/Water_Banner.jpg' alt=''></img>
              <h5>Water</h5>
              <p>Development and rehabilitation of sewage treatment plants and its associated infrastructure</p>
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

export default Business
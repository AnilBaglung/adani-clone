import React from 'react'
import './Airport.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const Airport = () => {
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
            <img src='../assets/adani enterprise/business/Airport1.jpg' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('/businesses')}><p>Businesses</p></div>
        </div>
        <div className='business-type-text'><p>Airports</p></div>
        <div className='business-down'>
            <h3 className='downside'>Turning India's transit gateways into world-class destinations</h3>
        </div> 

      </section>

    <section className='business-service'>
      <div className='business-service-desc'>
      <div className='business-service-2-row'>

      <div className='business-service-col-2'>
      <div>
        <h3 className='business-headline'>Airports</h3>
        <p>The future airports will be places where people want to be and not just a place where a person goes for transportation. With this belief and drawing from the strengths of the Adani Group’s experience in the integrated infrastructure and transportation businesses, Adani Enterprises Ltd. (AEL) ventured into the airports sector in 2019. Given India’s potential to become the 3rd largest global aviation market by 2025 and limitations of the existing aviation infrastructure of our nation, the company incubated the Adani Airports business, in line with its core philosophy of responsible nation-building.<br/><br/>After winning the Airport Authority of India’s global tender to modernize and operate six airports – Ahmedabad, Lucknow, Mangaluru, Jaipur, Guwahati and Thiruvananthapuram – Adani Airports received the Letter of Award to operate, manage and develop these six airports for a period of 50 years. Adani Airports commenced operations in Mangaluru International Airport (Mangaluru) on 31st October, 2020, Chaudhary Charan Singh International Airport (Lucknow) on 2nd November, 2020 and Sardar Vallabhbhai Patel International Airport (Ahmedabad) on 7th November, 2020.<br/><br/>Furthering the objective of building future-ready, robust infrastructure, Adani Airports is committed to redefine the city-airport relationship by building shared facilities that cater to new global travel, life and work requirements.</p><br/>
      </div>
      </div>
      <div className='business-service-col-2'>
      <Slider {...settings}>
        <div className='business-service-img'>
          <img src='../assets/adani enterprise/Business/RI2.jpg' alt=''></img>
        </div>
        <div className='business-service-img'>
          <img src='../assets/adani enterprise/Business/Road2.jpg' alt=''></img>
        </div>
      </Slider>


      </div>

    </div>

    <div className='airport-agreement'>
    <h5>Currently AEL has received Letter of Award (LOAs) for three airports i.e. Ahmedabad, Lucknow and Mangaluru from AAI.</h5>
    <p className='small-agreement-text'>Key particulars of draft concession agreement are as follows:</p>
    <div className='airport-agreement-contents'>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
      <h5>Particular</h5>
      </div>
      <div className='agreement-col2'>
        <h5>Description</h5>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <h5>Scope of the Project</h5>
      </div>
      <div className='agreement-col2'>
        <p>Operations, Management and Development of Airport including–</p>
        <ul>
          <li>design, development, financing, construction, upgradation and expansion of Airport in a phased manner</li>
          <li>operations, maintenance and management of the Airport</li>
          <li>development operation and maintenance of city side</li>
        </ul>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
      <h5>Term</h5>
      </div>
      <div className='agreement-col2'>
        <p>50 years from the COD (as defined in the Concession Agreement)</p>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
      <h5>Monthly Concession Fee</h5>
      </div>
      <div className='agreement-col2'>
        <ul>
          <li>Concessionaire to pay to AAI “Per-Passenger-Fee” for each passenger handled at the airport on monthly basis</li>
          <li>Monthly Concession Fee = (International PAX * Per Passenger Fee for Intl PAX) + (Domestic PAX * Per Passenger Fee for Domestic PAX)</li>
          <li>Per Passenger Fee for International PAX = 2 * Per PAX fee for Domestic PAX</li>
          <li>The Fee paid shall not be taken into account as an allowable expense for determination of aero charges</li>
        </ul>
      </div>
    </div>

    <div className='agreement-row-2 a'>
      <div className='agreement-col'>
      <h5>Control Period & determination of aero charges</h5>
      </div>
      <div className='agreement-col2'>
        <ul>
          <li>Aero charges determined basis Regulated Asset Base (RAB) and approved capex</li>
          <li>30% Shared-till framework (Non-aero and city side development to subsidize aero charges)</li>
          <li>Control period to end in 2021 post which there could be a revision in aero charges by AERA</li>
        </ul>
      </div>
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

export default Airport
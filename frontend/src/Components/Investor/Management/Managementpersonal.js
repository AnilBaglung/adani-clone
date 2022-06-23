import React from 'react'
import './Managementpersonal.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import { useNavigate } from 'react-router-dom'
const Managementpersonal = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar/>
      <section className='Investors-top-section'>
      <div className='investor-up-section'>
        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div><i class="fa-solid fa-chevron-right"></i></div>
        <div onClick={()=>navigate('/investors')}><p>Investors</p></div>
      </div>
      <h1>Board And Committee Charters</h1>

      </section>

      <section className='management-personal'>
      <h3>Adani Enterprises Limited</h3>
      <h5>Names and Contact Details of Key Managerial Personnel (KMPs) authorised to determine materiality of an event/s or information and for the purpose of making disclosures to Stock Exchanges</h5>
      <p>Pursuant to Regulation 30(5) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, the names and Contact Details of Key Managerial Personnel (KMPs) authorised to determine materiality of an event/s or information and for the purpose of making disclosures to Stock Exchanges are as under:</p>
      <div className='management-per-content'>
      <div className='airport-agreement-contents'>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
        <p>Names of KMPs</p>
        </div>
      <div className='agreement-col2'>
      <ul>
        <li>Mr. Jugeshinder Singh, Chief Financial Officer</li>
        <li>Mr. Jatin Jalundhwala, Company Secretary & Joint President (Legal)</li>
        </ul>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <p>Contact Detail</p>
      </div>
      <div className='agreement-col2'>
        <p>Adani Enterprises Limited</p>
        <p>"Adani Corporate House",</p>
        <p>Shantigram, Near Vaishno Devi Circle,</p>
        <p>S. G. Highway, Khodiyar,</p>
        <p>Ahmedabad – 382 421</p>
        <p>E-mail ID: <a href='investor.relations@adani.in' target='_blank' style={{color:'blue'}}>investor.relations@adani.in</a></p>
        <p>Website: <a href='www.adanienterprises.com' style={{color:'blue'}}>www.adanienterprises.com</a></p>
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

export default Managementpersonal
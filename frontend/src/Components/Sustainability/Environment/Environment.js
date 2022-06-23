import React from 'react'
import './Environment.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import Moresection  from '../Moresection'
import { useNavigate } from 'react-router-dom'

const Environment = () => {
  const navigate= useNavigate()
  return (
    <>
      <Navbar/>

      <section className='business-hero-section'>
      <div className='main-img'>
        <img src='../assets/adani enterprise/sustainability/Environment_Sustainability.jpg' alt=''></img>
      </div>
      <div className='business-top'>
        <div onClick={()=>navigate('../../')}><p className='upside'>Home</p></div>
        <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        <div onClick={()=>navigate('../sustainability')}><p>Sustainability</p></div>
      </div>

      <div className='sus-main-down'>
        <h3 className='downside'>Environment</h3>
        <p style={{width:'80%'}}>First company to deploy tree transplantor in coal mining sector in india</p>
      </div> 

      </section>

      <div className='more-section'>
        <div className='sub-main-section'>
        <div className='my-social-icons'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-square"></i>
        <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className='row-2-main'>
        <div className='left-text'>
          <p style={{fontFamily:'sans-serif', lineHeight:'25px'}}>We are the one of the first company to deploy a tree trans-planter for transplanting Sal trees which are found within the mining area.<br/><br></br>Besides this we also aim to plant 29 trees against the loss of 1 tree, such that a dense secondary forest is developed at the end of the mine life over the mined out area.<br/><br/>We have successfully transplanted 8000 trees and planted 296,059 saplings at the Parsa Kente site in Chhattisgarh with 80% survival rate. We have also established a nursery for developing the native species.<br/><br/>Additionally, Land reclamation, i.e. a process of restoring the mined out land to its natural and economically usable state, is a regular practice. We started the reclamation of the void created after mining from the second year of operation of the mine, which is one of the fastest in the country. We have successfully achieved physical reclamation of 74.7 hectares of land and biological reclamation of 118.40 hectare of land.</p>
        </div>

        <div className='column-right'>
        <p>Read our latest</p>
           <h4>Sustainability Report</h4>
           <img src='../assets/adani enterprise/sustainability/right.jpg'></img>
           <span>Archives</span>
        </div>

        </div>

        </div>
      </div>


      <Moresection/>

      <Links/>
      <Footer/>
    </>
  )
}

export default Environment
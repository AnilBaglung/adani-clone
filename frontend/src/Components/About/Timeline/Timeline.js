import React from 'react'
import './Timeline.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Timeline = () => {
  const navigate= useNavigate()
  return (
    <>
      <Navbar/>

      <section className='media-library'>
        <div className='media-cont'>
        <div className='media-container'>
        <div className='home-newsroom' style={{marginLeft:'-12%'}}><div onClick={()=>navigate('/')}>Home</div><div><i className="fa-solid fa-angle-right"></i></div><div onClick={()=>navigate('/about')}>About Us</div></div>
        </div>
        </div>
      </section>

      <section className='company-timeline'>
        <div className='timeline-container'>
        <h3>Timeline</h3>

        <div className='timeline-detail'>
        
        <div className='timeline-det'>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>2022</h2>
            <ul>
              <li>Completed acquisition of Mumbai and Navi Mumbai airports</li>
              <li>Adani Wilmar Limited IPO subscribed 17x</li>
            </ul>
         
          </div>

          <div className='timeline-col2'>
          <h2 className='timeline-year'>2021</h2>
            <ul>
              <li>Data Center JV "Adani Connex" with EdgeConnex to develop and operate Data Centers across India</li>
              <li>Acquired 23.5% stake in India's leading airports - Mumbai airport</li>
            </ul>
         
          </div>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>2020</h2>
            <ul>
              <li>Forayed into Airports business with portfolio of 6 airports</li>
            </ul>
          </div>

          <div className='timeline-col2'>
          <h2 className='timeline-year'>2019</h2>
            <ul>
              <li>Emerged #2 largest IRM player in the world</li>
            </ul>
          </div>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>2018</h2>
            <ul>
              <li>Demerger of Adani Green Energy and Adani Gas</li>
              <li>Fortune emerged largest food FMCG brand in India</li>
            </ul>
          </div>

          <div className='timeline-col2'>
          <h2 className='timeline-year'>2017</h2>
            <ul>
              <li>Started manufacturing Solar PV panels</li>
            </ul>
          </div>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>2015</h2>
            <ul>
              <li>Completed the demerger of APSEZ, APL and ATL</li>
            </ul>
          </div>

          <div className='timeline-col2'>
          <h2 className='timeline-year'>2010</h2>
            <ul>
              <li>Raised QIP of $850 Mn</li>
              <li>Acquired the Carmichael mine Australia</li>
            </ul>
          </div>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>2009</h2>
            <ul>
              <li>Adani Power Limited IPO subscribed 21x</li>
              <li>Bonus Issue 1:1</li>
            </ul>
          </div>


          <div className='timeline-col2'>
          <h2 className='timeline-year'>2008</h2>
            <ul>
              <li>Acquired Bunyu Mine, Indonesia</li>
            </ul>
          </div>


          <div className='timeline-col1'>
          <h2 className='timeline-year'>2007</h2>
            <ul>
              <li>Adani Ports and SEZ Limited IPO Subscribed 116x</li>
              <li>FCCB issue of $250 Mn</li>
              <li>Green Silo Depot commissioned (seven locations)</li>
            </ul>
          </div>

          <div className='timeline-col2'>
          <h2 className='timeline-year'>2006</h2>
            <ul>
              <li>Stock-Split of AEL(10:1)</li>
            </ul>
          </div>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>2005</h2>
            <ul>
              <li>Awarded India's first MDO Contarct</li>
            </ul>
          </div>

          <div className='timeline-col2'>
          <h2 className='timeline-year'>2001</h2>
            <ul>
              <li>Started city gas distribution business</li>
            </ul>
          </div>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>1999</h2>
            <ul>
              <li>Commencement of IRM business</li>
              <li>Signed JV with Wilmar, Singapore</li>
              <li>Bonus Issue 1:1</li>
            </ul>
          </div>

          <div className='timeline-col2'>
          <h2 className='timeline-year'>1996</h2>
            <ul>
              <li>Bonus Issue 1:1</li>
            </ul>
          </div>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>1995</h2>
            <ul>
              <li>Mundra Port commensed operations</li>
            </ul>
          </div>

          <div className='timeline-col2'>
          <h2 className='timeline-year'>1994</h2>
            <ul>
              <li>Listed on BSE and NSE @ Rs. 150/ share</li>
              <li>Subscribed 25x</li>
            </ul>
          </div>

          <div className='timeline-col1'>
          <h2 className='timeline-year'>1988</h2>
            <ul>
              <li>Started commodity trading</li>
            </ul>
          
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

export default Timeline
import React from 'react'
import './Investor.css'
import Navbar from '../Home/Navbar/Navbar'
import Links from '../Home/Liinks/Links'
import Footer from '../Home/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import CorporateCal from './CorporateCal'
import Barchart from './Barchart'
import Barchart1  from './Barchart1'
import Barchart2 from './Barchart2'

const Investor = () => {
  const navigate= useNavigate()
    return (
  <>
    <Navbar/>
    <section className='business-hero-section'>
        <div className='main-img'>
            <img src='../assets/adani enterprise/inv.jpg' alt=''></img>
        </div>
        <div className='business-top'>

        <div onClick={()=>navigate('/')}><p>Home</p></div>
       
        </div>

        <div className='business-down'>
            <h3 className='downside'>Investor Relations</h3>
        </div> 

        </section>
        <section className='investor-container'>
        <div className='investor-sub-container'>
        <div className='listing-row-2'>
        <div className='listing-left-col'>
        <h3 className='business-headline'>Listing Information</h3>
        <div className='listing-detail'>
        <div className='listing-content'>
          <p>Listing since:</p>
        </div>
        <div className='listing-content'>
          <p>Nov 25, 1994</p>
        </div>
        <div className='listing-content'>
          <p>Listed on:</p>
        </div>
        <div className='listing-content'>
          <p>NSE, India<br/>BSE, India</p>
        </div>
        <div className='listing-content'>
          <p>Tickers:</p>
        </div>
        <div className='listing-content'>
          <p>NSE : ADANIENT<br/>BSE : 512599<br/>Bloomberg : ADE:IN<br/>Reuters : ADEL.NS</p>
        </div>
        <div className='listing-content'>
          <p>ISIN code:</p>
        </div>

        <div className='listing-content'>
          <p>INE423A01024</p>
        </div>
        <div className='listing-content'>
          <p>Currency:</p>
        </div>
        <div className='listing-content'>
          <p>Indian Rupee</p>
        </div>
        <div className='listing-content'>
          <p>Face Value</p>
        </div>
        <div className='listing-content'>
          <p>1</p>
        </div>
        <div className='listing-content'>
          <p>Shares Outstanding:</p>
        </div>
        <div className='listing-content'>
          <p>1.1 billion</p>
        </div>
        <div className='listing-content'>
          <p>Financial year ending:</p>
        </div>
        <div className='listing-content'>
          <p>March 31 of every year</p>
        </div>
        <div className='listing-content'>
          <p>AGM timeperiod:</p>
        </div>
        <div className='listing-content'>
          <p>July to September</p>
        </div>
        </div>
        </div>

        <div className='listing-right-col'>

          <h4>Latest Information</h4>
          <ul>
            <li><i class="fa-solid fa-tachograph-digital"></i><a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Investors/Investor-Downloads/Investors-Presentation/AEL-Business-Presentation.pdf' target='_blank'>Investor Presentation</a></li>
          </ul>
          <ul>
            <li><i class="fa-solid fa-tachograph-digital"></i><a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Investors/Investor-Downloads/Results-Presentations/AEL-Performance-Highlights-Q4-22.pdf' target='_blank'>Result Presentation</a></li>
          </ul>
          <ul>
            <li><i class="fa-solid fa-tachograph-digital"></i><a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Investors/Investor-Downloads/Result-Press-Release-Dynamic/AEL-Q4-FY22--Press-Release.pdf' target='_blank'>Result Press Release</a></li>
          </ul>
          <ul>
            <li><i class="fa-solid fa-tachograph-digital"></i><a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Investors/Investor-Downloads/Financial/AELOUTCOME03052022.pdf' target='_blank'>Financial Statement</a></li>
          </ul>
          <ul>
            <li><i class="fa-solid fa-tachograph-digital"></i><a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Investors/Investor-Downloads/Results-Conference-Call-Transcripts/Q4-22-Centrum-Adani-04May-2022.pdf' target='_blank'>Conference Call Transcript</a></li>
          </ul>
          <ul>
            <li><i class="fa-solid fa-tachograph-digital"></i><a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Investors/Investor-Downloads/Annual-Report/AEL-SMART-Report-2021.pdf' target='_blank'>Annual Report</a></li>
          </ul>
        </div>

        </div>

        <div className='charts'>
        <div className='chart-row'>

        <Barchart/>
        <Barchart1/>
        <Barchart2/>
        </div>
        </div>
        
        <CorporateCal/>

        <div className='bottom-sub-container'>
          <div className='bottom-container-row'>
    
            <div className='investor-category'>
            <div className='bg-img'>
              <img src='../assets/adani enterprise/investor-downloads.jpg'></img>
            </div>
            <div className='image-and-text'>
            <img src='../assets/adani enterprise/Investor-Download.png'></img>
            <h3>Investor Downloads</h3>
            </div>

            </div>

            <div className='investor-category'>
            <div className='bg-img'>
              <img src='../assets/adani enterprise/corp.jpg'></img>
            </div>
            <div className='image-and-text'>
            <img src='../assets/adani enterprise/newCorporate-Governance.png'></img>
            <h3>Corporate Governance and Statutory Disclosures</h3>
            </div>

            </div>
            <div className='investor-category' onClick={()=>navigate('/investors/faq')}>
            <div className='bg-img'>
              <img src='../assets/adani enterprise/faq.jpg'></img>
            </div>
            <div className='image-and-text'>
            <img src='../assets/adani enterprise/QA.png'></img>
            <h3>Investor FAQs</h3>
            </div>

            </div>
            <div className='investor-category' onClick={()=>navigate('/about/board')}>
            <div className='bg-img'>
              <img src='../assets/adani enterprise/boardofdirector.jpg'></img>
            </div>
            <div className='image-and-text'>
            <img src='../assets/adani enterprise/Board-of-director.png'></img>
            <h3>Board of Directors</h3>
            </div>

            </div>
            <div className='investor-category' onClick={()=>navigate('/investors/management-personal')}>
            <div className='bg-img'>
              <img src='../assets/adani enterprise/keymanagement.jpg'></img>
            </div>
            <div className='image-and-text'>
            <img src='../assets/adani enterprise/Key-Management.png'></img>
            <h3>Key Management Personnel</h3>
            </div>

            </div>
            <div className='investor-category' onClick={()=>navigate('/investors/committe')}>
            <div className='bg-img'>
              <img src='../assets/adani enterprise/boardcommitee.jpg'></img>
            </div>
            <div className='image-and-text'>
            <img src='../assets/adani enterprise/Commitee.png'></img>
            <h3>Board and Committee Charters</h3>
            </div>

            </div>
          </div>
        </div>

        <div className='bottom-sub-container'>
        <div className='bottom-cont-row'>
          <div className='bottom-cont-col'>
            <h4>Registrar & Transfer Agent</h4>
            <p>Link Intime India Private Limited<br/>5th Floor, 506 to 508, Amarnath<br/>Business Centre – 1 (ABC-1), Beside Gala<br/>Business Centre, Nr. St. Xavier’s College<br/>Corner, Off C G Road, Navrangpura,<br/>Ahmedabad – 380009<br/>Tel +91-79-26465179</p>
            <br/>
            <a>ahmedabad@linkintime.co.in</a><br/><br/>
            <a>www.linkintime.co.in</a>
          </div>
          <div className='bottom-cont-col'>
            <h4>Compliance Officer</h4>
            <p>Company Secretary<br/>“Adani Corporate House”,<br/>Shantigram, Near Vaishno Devi Circle,<br/>S. G. Highway, Khodiyar,<br/>Ahmedabad – 382 421<br/><br/>Nodal Officer for IEPF<br/>Mr. Jatin Jalundhwala<br/>Company Secretary & Joint President (Legal)<br/>Adani Enterprises Limited</p>
            <br/><a>investor.relations@adani.in</a>
        
          </div>
          <div className='bottom-cont-col'>
            <h4>Investor Contact</h4>
            <p>Institutional Investors and Research Analysts contact:<br/><br/>Investor Relations, Adani Enterprises Ltd<br/><a>Investor.ael@adani.com</a><br/><br/>D. Balasubramanyam<br/>Group Head- Investor Relations, Adani Group<br/><a>D.Balasubramanyam@adani.com</a></p>
        
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

export default Investor
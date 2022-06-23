import React from 'react'
import './Newsroom.css'
import Navbar from '../Home/Navbar/Navbar'
import Links from '../Home/Liinks/Links'
import Footer from '../Home/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Newsroom = () => {
    const navigate = useNavigate()
    
  return (
    <>
        <Navbar/>

        <section className='business-hero-section'>
        <div className='main-img'>
            <img src='../assets/adani enterprise/new.jpg' alt=''></img>
        </div>
        <div className='business-top'>
            <div onClick={()=>navigate('/')}><p>Home</p></div>
            <div className='business-right-icon'><i className="fa-solid fa-angle-right"></i></div>
        </div>

        <div className='sus-main-down'>
            <h3 className='downside'>Newsroom</h3>
        </div> 

        </section>

        <section className='media'>
            <div className='media-cover'>
                <div className='media-row'>
                    <div className='media-col'>
                        <h3>Media Coverage</h3>
                        <a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Media/Media-Coverage/20220518-ET-Abu-Dhabi-firm-IHC-completes-Rs-15400-cr-investment-in-Adani-Group-companies.jpg?la=en' target='_blank'><div className='col-text'>
                        <i className="fa-solid fa-newspaper"></i>
                        <div>
                        <p>Abu Dhabi Firm IHC Completes Rs 15,000 cr Investment in Adani Group Companies</p>
                        <span>May 18, 2022 | The Economic Times</span></div>
                        </div></a>

                        <a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Media/Media-Coverage/2022_05_10-BS-Adani-raises-doller-250-mn.jpg?la=en' target='_blank'><div className='col-text'>
                        <i className="fa-solid fa-newspaper"></i>
                        <div>
                        <p>Adani raises $250-mn debt for airport sector capex</p>
                        <span>May 10, 2022 | Business Standard</span></div>
                        </div></a>

                        <a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Media/Media-Coverage/2022_05_05-HBL-Airports-business-is-now-2nd-highest-revenue-generator-for-Adani-Group.jpg?la=en' target='_blank'><div className='col-text'>
                        <i className="fa-solid fa-newspaper"></i>
                        <div>
                        <p>Airports business is now 2nd highest revenue generator for Adani Group</p>
                        <span>May 05, 2022 | The Hindu Business Line</span></div>
                        </div></a>

                        <a href='https://www.adanienterprises.com/-/media/Project/Enterprises/Media/Media-Coverage/20220504Business-StandardBangalorePg-No03.jpg?la=en' target='_blank'><div className='col-text'>
                        <i className="fa-solid fa-newspaper"></i>
                        <div>
                        <p>Adani Enterprises’ Q4 net jumps 30% to ₹ 304 crore</p>
                        <span>May 04, 2022 | Business Standard</span></div>
                        </div></a>
                        <p className='readmre'><a href='https://www.adanienterprises.com/newsroom/media-coverage'>Read More</a></p>
                        
                    </div>

                    <div className='media-col'>
                        <h3>Media Releases</h3>
                        <ul>
                        <li><a href='https://www.adanienterprises.com/newsroom/media-releases/Adani-Portfolio-Companies-complete-INR-15400-Cr-primary-equity-transaction-with-IHC' target='_blank'><p>Adani Portfolio Companies complete INR 15,400 Cr primary equity transaction with IHC</p></a>
                        <span>May 17, 2022</span>
                        </li>
                        <li>
                        <p><a href='https://www.adanienterprises.com/newsroom/media-releases/Adani-Enterprises-Ltd-FY22-Results'>Adani Enterprises Ltd FY22 Results</a></p>
                        <span>May 03, 2022</span>
                        </li>
                        <li>
                        <p><a href='https://www.adanienterprises.com/newsroom/media-releases/International-Holding-Company-to-invest-USD-2-billion-in-Adani-Groups-green-portfolio'>International Holding Company to invest USD 2 billion in Adani Group’s green portfolio</a></p>
                        <span>May 08, 2022</span>
                        </li>
                        <li>
                        <p><a href='https://www.adanienterprises.com/newsroom/media-releases/Adani-Group-achieves-financial-closure-of-Navi-Mumbai-International-Airport-project'>Adani Group achieves financial closure of Navi Mumbai International Airport project</a></p>
                        <span>May 29, 2022</span>
                        </li>
                        </ul>
                        <p className='readmre'><a href='https://www.adanienterprises.com/newsroom/media-releases'>Read More</a></p>
                    </div>
                    <div className='media-col3'>
                        <div className='contact-col'>
                            <h2>Media Contacts</h2>
                            <div className='buttons'>
                                <button className='subscribe-button'>Subscribe Us</button>
                                <button className='media-button'>Media Enquiry</button>
                            </div>
                        </div>

                        <div className='media-lib'>
                        <img src='../assets/adani enterprise/library.svg' alt=''></img>
                        <h3>Media Library</h3>
                        </div>
                    </div>
                
                </div>
            </div>

        </section>

        <section className='events'>
        <div className='events-row'>
            <h2>We are Social, Explore our latest happenings and Events</h2>
            <button className='explore-button'>Explore Now</button>
        </div>

        </section>


        <Links/>
        <Footer/>
    </>
  )
}

export default Newsroom
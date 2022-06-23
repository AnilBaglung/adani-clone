import React, {useState} from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
    const [click, setClick] = useState(false)
    const [press, setPress] = useState(false)
    const [pres, setPres] = useState(false)
    const [press1, setPress1] = useState(false)
    const [press2, setPress2] = useState(false)
    const [press3, setPress3] = useState(false)
    const [press4, setPress4] = useState(false)
    const handleMenu=()=>{setClick(!click)}
    const closeMobileMenu =()=>{setClick(false)}
    const handleSubmenu=()=>{setPress(!press)}
    const handleSubmenus=()=>{setPres(!pres)}
    const handleSubmenu1=()=>{setPress1(!press1)}
    const handleSubmenu2=()=>{setPress2(!press2)}
    const handleSubmenu3=()=>{setPress3(!press3)}
    const handleSubmenu4=()=>{setPress4(!press4)}
  return (
    <>
      <section className='navbar' id='nav'>
        <div className='header'>
          <div className='nav-logo'>
            <Link to='/'><img className='logo' src='../assets/adani enterprise/ent-footer.png' alt=''></img></Link>
          </div>

          <div className='mob-icon' onClick={handleMenu} >
          <i className={click? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i>
          </div>


            <ul className={click? 'mobile-menu-active':'mobile-menu'}>

              <li onClick={handleSubmenu}><Link to='/about' style={{textDecoration:'none'}}>About Us</Link><i className={press? 'fa-solid fa-angle-down':'fa-solid fa-angle-right'} onClick={handleSubmenu}></i>
              <div className={ press? 'sub-menu-active': 'sub-menu'}>
                  <h2 className='Exploreabout'>Explore About Us</h2>
                  <ul> 
                    <li onClick={()=>navigate('/about/board')} >Board Of Directors</li>
                    <li onClick={()=>navigate('/about/timeline')} >Timeline</li>
                    <li onClick={()=>navigate('/about/chairman-message')} >Chairman's Message</li>
                  </ul>
                </div>
              </li>

              <li onClick={handleSubmenus}><Link to='/businesses' style={{textDecoration:'none', color:'black'}}>Businesses</Link><i className={pres? "fa-solid fa-angle-down":'fa-solid fa-angle-right'}></i>
              <div className={ pres? 'sub-menu-active': 'sub-menu b'}>
                  <h2 className='Exploreabout'>Explore Businesses</h2>
                  <ul> 
                    <li onClick={()=>navigate('/businesses/mining')} >Mining Services</li>
                    <li onClick={()=>navigate('/businesses/resource')} >Resource Management</li>
                    <li onClick={()=>navigate('/businesses/oilfood')} >Edible Oil & Foods</li>
                    <li onClick={()=>navigate('/businesses/agro')} >Agro</li>
                    <li onClick={()=>navigate('/businesses/solar')} >Solar Manufacturing</li>
                    <li onClick={()=>navigate('/businesses/defence')} >Defence & Aerospace</li>
                    <li onClick={()=>navigate('/businesses/road')} >Roads, Metro & Rails</li>
                    <li onClick={()=>navigate('/businesses/water')} >Water</li>
                    <li onClick={()=>navigate('/businesses/airport')} >Airports</li>
                    <li onClick={()=>navigate('/businesses/data')} >Data Center</li>
                  </ul>
                </div>
              </li>


              <li onClick={handleSubmenu1}><Link to='/sustainability' style={{textDecoration:'none', color:'black'}}>Sustainability<i className={press1? "fa-solid fa-angle-down":'fa-solid fa-angle-right'}></i></Link>
              <div className={ press1? 'sub-menu-active': 'sub-menu s'}>
                  <h2 className='Exploreabout'>Explore Sustainability</h2>
                  <ul> 


                    <li><Link to='/sustainability/environment' style={{textDecoration:'none'}}>Environment</Link></li>
                    <li><Link to='/sustainability/safety' style={{textDecoration:'none'}}>Safety</Link></li>
                    <li><Link to='/sustainability/water-management' style={{textDecoration:'none'}}>Water Management</Link></li>
                    <li><Link to='/sustainability/communities' style={{textDecoration:'none'}}>Communities</Link></li>
                  </ul>
                </div>
              </li>

              <li onClick={handleSubmenu2}><Link to='/investors' style={{textDecoration:'none', color:'black'}}>Investors<i className={press2? "fa-solid fa-angle-down":'fa-solid fa-angle-right'}></i></Link>
              <div className={ press2? 'sub-menu-active': 'sub-menu i'}>
                  <h2 className='Exploreabout'>Explore Investor Relations</h2>
                  <ul> 
                    <li><a href='https://www.adanienterprises.com/investors/investor-downloads' target='_blank'>Investor Downloads</a></li>
                    <li ><a href='https://www.adanienterprises.com/investors/corporate-governance' target='_blank'>Corporate Governance</a></li>
                    <li onClick={()=>navigate('/investors/faq')} >Investor FAQs</li>
                    <li onClick={()=>navigate('/about/board')} >Board of Directors</li>
                    <li onClick={()=>navigate('/investors/management-personal')} >Key Management Personal</li>
                    <li onClick={()=>navigate('/investors/committe')} >Board of Committe Charters</li>
                  </ul>
                </div>
              </li>

              <li onClick={handleSubmenu3}><Link to='/newsroom' style={{textDecoration:'none', color:'black'}}>Newsrooms<i className={press3? "fa-solid fa-angle-down":'fa-solid fa-angle-right'}></i></Link>
              <div className={ press3? 'sub-menu-active': 'sub-menu n'}>
                  <h2 className='Exploreabout'>Explore Newsroom</h2>
                  <ul> 
                    <li><a href='https://www.adanienterprises.com/newsroom/media-coverage' target='_blank'>Media Coverage</a></li>
                    <li><a href='https://www.adanienterprises.com/newsroom/media-releases' target='_blank'>Media Releases</a></li>
                    <li onClick={()=>navigate('/newsroom/media-library')} >Media Library</li>
                    <li><a href='https://www.adanienterprises.com/newsroom/social-media' target='_blank'>Social Media</a></li>
                  </ul>
                </div>
              </li>

              <li onClick={handleSubmenu4} ><a href='https://careers.adani.com/' target='_blank' >Careers</a><i className={press4? "fa-solid fa-angle-down":'fa-solid fa-angle-right'}></i>
              <div className={ press4? 'sub-menu-active': 'sub-menu c'}>
                  <h2 className='Exploreabout'>Explore Careers</h2>
                  <ul> 
                    <li><a href='https://adani.taleo.net/careersection/ex/jobsearch.ftl' target='_blank'>Job Opening</a></li>
                    <li><a href='https://careers.adani.com/#LnD' target='_blank'>L&D</a></li>
                    <li><a href='https://careers.adani.com/#HeroesAtWork' target='_blank'>Our #HerosAtWork</a></li>
                  </ul>
                </div>
                </li>
              <li onClick={closeMobileMenu}><Link to='/contact' style={{textDecoration:'none', color:'black'}}>Contact Us</Link></li>
            </ul>
          

        </div>

      </section>
    </>
  )
}

export default Navbar
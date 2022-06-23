import React,{useState} from 'react'
import './Links.css'
import { Link, useNavigate } from 'react-router-dom'

const Links = () => {
  const navigate=useNavigate()
  const [press, setPress] = useState(false)
  const preesedButton=()=>setPress(!press)
  const [click, setClick] = useState(false)
  const [text, setText]=useState('+ View more')
  const showMore=()=>{
    setClick(!click)
    if(!click){
    setText('- View Less')}
  else{setText('+ View More')}}
  return (
    <>
      <section className='links'>
        <div className='footer-links'>
          <div className='links-2-row'>
          <div className='left-column'>
            <div className='left-col-3'>
            <h4>Businesses</h4>
              <ul>
                <li>Mining Services</li>
                <li>Integrated Resources Management</li>
                <li>Edible Oil & Foods</li>
                <li>Agro</li>
                <li>Solar Manufacturing</li>
                <li className='viewall' onClick={showMore}>{text}</li>
                <li className={click? 'displayyes':'displaynone'}>Defence & Aerospace</li>
                <li className={click? 'displayyes':'displaynone'}>Road, Metro & Rail</li>
                <li className={click? 'displayyes':'displaynone'}>Airports</li>
                <li className={click? 'displayyes':'displaynone'}>Datacenter</li>
                <li className={click? 'displayyes':'displaynone'}>Water</li>
              </ul>
            </div>
            <div className='left-col-3'>
              <h4 onClick={()=>navigate('/sustainability')} style={{cursor:'pointer'}}>Sustainability</h4>
              <ul>
                <li onClick={()=>navigate('/sustainability/Environment')} style={{cursor:'pointer'}}>Environment</li>
                <li onClick={()=>navigate('/sustainability/safety')} style={{cursor:'pointer'}}>Safety</li>
                <li onClick={()=>navigate('/sustainability/water-management')} style={{cursor:'pointer'}}>Water Management</li>
                <li onClick={()=>navigate('/sustainability/communities')} style={{cursor:'pointer'}}>Communities</li>
              </ul>
            </div>
            <div className='left-col-3'>
             <h4>About Us</h4> 
             <h4>Investors</h4>
             <h4>Newsroom</h4>
             <h4>Careers</h4>
             <h4>Contact-Us</h4>
            </div>
            <h4>Downloads</h4>
            <h4>Commercials</h4>
          </div>

          <div className='right-column'>
            <div className='social-icons'>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className='art-img'>
              <img src='../assets/adani enterprise/art.jpg'></img>
            </div>
            <div className='sitemap' onClick={preesedButton}>
              <h5>Sitemap</h5>
              <i className={press? "fa-solid fa-chevron-right":"fa-solid fa-chevron-down"}></i>
            </div>
            <div className={press? 'sitemap-links d':'sitemap-links'}>
             <h4 onClick={()=>navigate('/businesses')} style={{cursor:'pointer'}}>"Businesses</h4>
             <h4 onClick={()=>navigate('/sustainability')} style={{cursor:'pointer'}}>"Sustainability</h4>
             <h4 onClick={()=>navigate('/about')} style={{cursor:'pointer'}}>"About Us</h4> 
             <h4 onClick={()=>navigate('/investors')} style={{cursor:'pointer'}}>"Investors</h4>
             <h4 onClick={()=>navigate('/newsroom')} style={{cursor:'pointer'}}>"Newsroom</h4>
             <a href='https://careers.adani.com/' target='_blank'><h4>"Careers</h4></a>
             <h4 onClick={()=>navigate('/contact')} style={{cursor:'pointer'}}>"Contact-Us</h4>

            </div>
          </div>

          </div>
        </div>
      </section>
    </>

  )
}

export default Links
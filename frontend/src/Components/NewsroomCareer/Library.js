import React from 'react'
import './Library.css'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'
import Links from '../Home/Liinks/Links'
import { useNavigate } from 'react-router-dom'

const Library = () => {
    const navigate = useNavigate()
  return (
    <>
        <Navbar/>
        

        <section className='media-library'>

        <div className='media-container'>
        <div className='home-newsroom'><div onClick={()=>navigate('/')}>Home</div><div><i className="fa-solid fa-angle-right"></i></div><div onClick={()=>navigate('/newsroom')}>Newsroom</div></div>
        <h2>Media Library</h2>

        <div className='media-logo'>
            <h3>Logos</h3>
            <div className='logo-row'>
                <div className='left-side-text'>
                    <h4>Conditions of use</h4>
                    <p>The logo has been made available in good faith and on the basis that:</p>
                    <ul>
                        <li>It will not be used in connection with any purpose that is detrimental to Adani Group, its officers, employees or any third party</li>
                        <li>It is not recreated in any form whatsoever</li>
                        <li>It is not used in lieu of the word 'Adani'</li>
                    </ul>
                </div>
                <div className='logo-img'>
                <img src='../assets/adani enterprise/logo.png' alt=''></img>
                <p className='download'>Download</p>
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

export default Library
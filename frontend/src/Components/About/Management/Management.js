import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Management.css'
import Navbar from '../../Home/Navbar/Navbar';
import Links from '../../Home/Liinks/Links';
import Footer from '../../Home/Footer/Footer';
import Data from './Directors'

const Management = () => {
  const navigate = useNavigate()
  const [director, setDirector] = useState(Data)
  return (
    <>
      <Navbar/>

      <section className='media-library'>
        <div className='media-cont'>
        <div className='media-container'>
        <div className='home-newsroom'><div onClick={()=>navigate('/')}>Home</div><div><i className="fa-solid fa-angle-right"></i></div><div onClick={()=>navigate('/about')}>About Us</div></div>
        </div>
        </div>
      
        <div className='board-director'>
        <div className='board-mang'>
          <h2>Board Of Directors</h2>
          <p>Visionary leadership, illustrious experience, and remarkable track record have been the signature of our legacy. Browse this section to know more about our Board of Directors.</p>
        
        <div className='board-directors'>
        {director.map((item, index)=>
        {return (
          <>
          <div className='company-director' key={index}>
          <img src={item.img} alt=''></img>
          <h3>{item.name}</h3>
          <p>{item.post}</p>
        </div>
          </>
        )})}
        </div>
        </div>
        </div>
        </section>
      <Links/>
      <Footer/>
    </>
  )
}

export default Management
import React, {useState} from 'react'
import './Contact.css'
import Navbar from '../Home/Navbar/Navbar'
import Links from '../Home/Liinks/Links'
import Footer from '../Home/Footer/Footer'
import {useNavigate} from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');

  const thankYou=()=>{
    if(name && email && phonenumber && message){
    setText(' Message sent successfully !');
    setName('');setEmail('');setPhonenumber('');setMessage('')}}
  return (
    <>
      <Navbar/>

      <section className='contact-us'>
      <div className='contact-container'>
      <a onClick={()=>navigate('/')}><p>Home</p></a>
      <h2>Contact Us</h2>
      <div className='contact-up-row'>
        <div className='contact-col-left'>
          <h4>Registered office</h4>
          <p>Adani Corporate House</p>
          <p>Shantigram, Near Vaishnodevi Circle, S G Highway, Ahmedabad-382421, Gujarat, India.</p>
          <p>Tel : +91-79-26565555</p>
        </div>

        <div className='contact-col-right'>
          <h4>Natural Resources Marketing Office</h4>
          <p>Aravalli, Shantigram, Near Vaishnodevi Circle, S G Highway, Ahmedabad-382421, Gujarat, India.</p>
          <a href='customercare.irm@adani.com'><p>customercare.irm@adani.com</p></a>
        </div>
      </div>
      <h3>Write to us</h3>
      <div className='contact-form'>
            <input type='text' name='fullname' id='fullname' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}></input><br></br>
            <input type='email' name='email' id='email' placeholder='Email Adress' value={email} onChange={e=>setEmail(e.target.value)}></input><br></br>
            <input type='phone' name='phone' id='phone' placeholder='Phone Number' value={phonenumber} onChange={e=>setPhonenumber(e.target.value)}></input><br></br>
            <textarea type='text' name='message' id='message' placeholder='Your Message' rows={5} value={message} onChange={e=>setMessage(e.target.value)}></textarea><br></br>
      </div>
      <div className='submit'>
            <button className='button' onClick={thankYou}>Submit</button>
      </div>

      <p className='success'>{text}</p>
      </div>

      </section>


      <Links/>
      <Footer/>
    </>
  )
}

export default Contact
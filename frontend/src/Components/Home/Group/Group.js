import React from 'react'
import './Group.css'
import Slider from "react-slick";

const Group = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay:true,
    initialSlide:0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
  }
    ]
  };
  return (
    <section className='group'>
    <div className='group-container'>
    <h2>Our Group Websites</h2>
    <Slider {...settings}>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/foundation.jpg' alt=''></img>
        <span>Adani Foundation</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani_group.jpg' alt=''></img>
        <span>Adani Group</span>
      </div>

      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/port.jpg' alt=''></img>
        <span>Adani Ports & SEZ</span>
      </div>

      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-gas.jpg' alt=''></img>
        <span>Adani Gas</span>
      </div>

      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-green-energy.jpg' alt=''></img>
        <span>Adani Green Energy</span>
      </div>

      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-transmission.jpg' alt=''></img>
        <span>Adani Transmission</span>
      </div>

      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-power.jpg' alt=''></img>
        <span>Adani Power</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-Electricity.jpg' alt=''></img>
        <span>Adani Electricity</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-solar.jpg' alt=''></img>
        <span>Adani Solar</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-australia.jpg' alt=''></img>
        <span>Adani Australia</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/Realty.jpg' alt=''></img>
        <span>Adani Realty</span>
      </div>

      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-wilmar.jpg' alt=''></img>
        <span>Adani Wilmar</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-bunker.jpg' alt=''></img>
        <span>Adani Bunkering</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-agri-logistics.jpg' alt=''></img>
        <span>Adani Agri Logistics</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/farmpik.jpg' alt=''></img>
        <span>Farmpik</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-capital.jpg' alt=''></img>
        <span>Adani Capital</span>
      </div>

      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adanihousing.jpg' alt=''></img>
        <span>Adani Housing</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/All.jpg' alt=''></img>
        <span>All</span>
      </div>

      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-vidyamandir.jpg' alt=''></img>
        <span>Adani Vidhyamandir</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/AIS.jpg' alt=''></img>
        <span>Adani International School</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-hospital.jpg' alt=''></img>
        <span>Adani Hospital</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/APTRI.jpg' alt=''></img>
        <span>APTRI</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/adani-Defence.jpg' alt=''></img>
        <span>Adani Defence</span>
      </div>
      <div className='group-img'>
        <img src='./assets/adani enterprise/logos/AIMSL.jpg' alt=''></img>
        <span>AIMSL</span>
      </div>

  
      
    </Slider>
  </div>
  </section>
  )
}

export default Group
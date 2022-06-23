import React from 'react'
import './Chairman.css'
import Heros from '../Heros/Heros'

const Chairman = () => {
  return (
    <>
      <section className='chairman'>
        <div className='chairman-sub'>
        <div className='page-row'>

        <div className='news-column'>
          <h3>News and Updates</h3>
          <div>
          <i class="fa-solid fa-newspaper"></i>
          <p>Adani Portfolio Companies complete INR 15,400 Cr primary equity transaction with IHC</p>
          </div>
          <div>
          <i class="fa-solid fa-newspaper"></i>
          <p>Adani Enterprises Ltd FY22 Results</p>
          </div>
          <div>
          <i class="fa-solid fa-newspaper"></i>
          <p>International Holding Company to invest USD 2 billion in Adani Group’s green portfolio</p>
          </div>
          <button className='view-more'>View More</button>
        </div>

        <div className='chairman-column'>
          <div className='adani-corner'>
          <h3>Chairman's Corner</h3>
          <p>We continue to draw inspiration from our vision ‘Growth with Goodness’, to be a world class leader in businesses that enrich lives and contribute to nation building.</p>
          <p>Gautam Adani</p>
          <span>Chairman, Adani Group</span>
          </div>
          

          <div className='first-col'>
          <img src='./assets/adani enterprise/GA.png' alt=''></img>
          </div>
        </div>
        </div>

        </div>
        <Heros/>
      </section>
    </>
  )
}

export default Chairman
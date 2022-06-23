import React from 'react'
import './Value.css'

const Value = () => {
  return (
    <>
      <section className='value'>
        <div className='value-container'>
          <div className='value-row'>

            <div className='value-col'>
            <div className='value-column'>
              <div className='value-img'>
                <img src='./assets/adani enterprise/sus-01.jpg' alt=''></img>
              </div>
              <div className='value-text'>
                <h3>Sustainability</h3>
                <p>Making positive imapact to the environment through everything that we do. Our system ensure that 100% of electrical waste during the time of set-up gets recycled as per the best practice.</p>
              </div>
            </div>
            </div>
            <div className='value-col'>
            <div className='value-column'>
              <div className='value-img'>
                <img src='./assets/adani enterprise/sus-02.jpg' alt=''></img>
              </div>
              <div className='value-text'>
                <h3>Communities</h3>
                <p>Through Adani Foundation, we continue to touch over 500,000 families across India, bringing positive change and transforming narrating a story of godness.</p>
              </div>
            </div>
            </div>

            <div className='value-col'>
            <div className='value-column'>
              <div className='value-img'>
                <img src='./assets/adani enterprise/sus-03.jpg' alt=''></img>
              </div>
              <div className='value-text'>
                <h3>Investor Relations</h3>
                <p>Browse this section or all corporate governence and financial related informations about Adani Enterprises.</p>
              </div>
            </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Value
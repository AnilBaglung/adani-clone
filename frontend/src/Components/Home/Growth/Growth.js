import React from 'react'
import './Growth.css'

const Growth = () => {
  return (
    <>
      <section className='growth'>
        <div className='companygrowth'>
        <div className='growth-row'>

          <div className='growth-column a'>
          <h3>Incubation to Growth</h3>
          <p>Three decades of sustainable value creation by incubating businesses including 6 independent market leaders.</p>
          
          <div className='percentile'>

            <div className='percentile-col'>
            <h4>20+</h4>
            <p>Average experience of top management</p>
            <span>(in years)</span>
            </div>

            <div className='percentile-col'>
            <h4>32%</h4>
            <p>CAGR in share price</p>
            <span>since listing in 1994</span>
            </div>

            <div className='percentile-col'>
            <h4>5</h4>
            <p>Businesses demerged</p>
            <span>and listed till 31st March, 2021</span>
            </div>

          </div>
          
        </div>

        <div className='growth-column b'>
        <img src='./assets/adani enterprise/Layer.png' alt=''></img>
        </div>
    
        </div>
      </div>

      </section>
    </>
  )
}

export default Growth
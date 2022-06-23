import React from 'react'
import './Covid.css'

const Covid = () => {
  return (
    <>
      <section className='covid'>
        <div className='covid-row'>
          <div className='covid-column'>
            <h2>Covid-19 Updates</h2>
            <p>As the incubator of assets critical to India's present and future, Adani Enterprises will continue to perform it's responsibilities and stand with India in its battle against Coronavirus. Click below to know more about the Adani Group's pan-India COVID19 relief measures.</p>
            <p className='readmore'>Read more</p>
          </div>
          <div className='covid-column'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rE2aJ9znh7k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>

      </section>
    </>
  )
}

export default Covid
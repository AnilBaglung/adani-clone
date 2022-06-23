import React from 'react'
import './Commite.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import { useNavigate } from 'react-router-dom'


const Commite = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar/>

      <section className='Investors-top-section'>
      <div className='investor-up-section'>
        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div><i class="fa-solid fa-chevron-right"></i></div>
        <div onClick={()=>navigate('/investors')}><p>Investors</p></div>
      </div>
      <h1>Key Management Personnel</h1>

      </section>

      <section className='management-personal'>
     

    <div className='committe-rows'>

    <h3>Audit Committee</h3>
      <div className='management-per-content'>
      <div className='airport-agreement-contents'>

      <div className='agreement-row-2'>
      <div className='agreement-col'>
        <h5>Name of Member</h5>
      </div>
      <div className='agreement-col2'>
        <h5>Composition of Committee</h5>
      </div>
    </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
        <p>Mr. Hemant Nerurkar</p>
        </div>
      <div className='agreement-col2'>
      <p>Chairman (Non-Executive & Independent Director)</p>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <p>Mr. V. Subramanian</p>
      </div>
      <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <p>Mrs. Vijaylaxmi Joshi</p>
      </div>
      <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
      </div>
    </div>

    </div>
    </div>
    </div>



      <div className='committe-rows'>
      <h3>Nomination and Remuneration Committee</h3>
      <div className='management-per-content'>
      <div className='airport-agreement-contents'>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
        <h5>Name of Member</h5>
        </div>
      <div className='agreement-col2'>
        <h5>Composition of Committee</h5>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <p>Mr. Hemant Nerurkar</p>
      </div>
      <div className='agreement-col2'>
        <p>Chairman (Non-Executive & Independent Director)</p>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <p>Mr. V. Subramanian</p>
      </div>
      <div className='agreement-col2'>
        <p>Chairman (Non-Executive & Independent Director)</p>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <p>Mrs. Vijaylaxmi Joshi</p>
      </div>
      <div className='agreement-col2'>
        <p>Chairman (Non-Executive & Independent Director)</p>
      </div>
    </div>

    </div>
    </div>
    </div>

    <div className='committe-rows'>

    <h3>Stakeholders' Relationship Committee</h3>
      <div className='management-per-content'>
      <div className='airport-agreement-contents'>

      <div className='agreement-row-2'>
      <div className='agreement-col'>
        <h5>Name of Member</h5>
      </div>
      <div className='agreement-col2'>
        <h5>Composition of Committee</h5>
      </div>
    </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
        <p>Mr. V. Subramanian</p>
        </div>
      <div className='agreement-col2'>
      <p>Chairman (Non-Executive & Independent Director)</p>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <p>Mr. Rajesh S. Adani</p>
      </div>
      <div className='agreement-col2'>
        <p>Member (Promotor & Executive Director)</p>
      </div>
    </div>

    <div className='agreement-row-2'>
      <div className='agreement-col'>
        <p>Mr. Pranav Adani</p>
      </div>
      <div className='agreement-col2'>
        <p>Member (Promoter & Executive Director)</p>
      </div>
    </div>

    <div className='agreement-row-2'>
        <div className='agreement-col'>
        <p>Mr. Hemant Nerurkar</p>
        </div>
      <div className='agreement-col2'>
      <p>Member (Non-Executive & Independent Director)</p>
      </div>
    </div>

    </div>
    </div>
    </div>

    <div className='committe-rows'>

      <h3>Corporate Social Responsibility Committee</h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

        <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. V. Subramanian</p>
          </div>
        <div className='agreement-col2'>
        <p>Chairman (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Pranav Adani</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Promoter & Executive Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mrs. Vijaylaxmi Joshi</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>


      </div>
      </div>
      </div>

      <div className='committe-rows'>

      <h3>Risk Management Committee</h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

        <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Vinay Prakash</p>
          </div>
        <div className='agreement-col2'>
        <p>Chairman (Executive Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Narendra Mairpady</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>


      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Jugeshinder Singh, Chief Financial Officer</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Executive, Non-Director)</p>
        </div>
      </div>


      </div>
      </div>
      </div>

      <div className='committe-rows'>

      <h3>MERGERS & ACQUISITIONS COMMITTEE</h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Jugeshinder Singh, Chief Financial Officer</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Executive, Non-Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Narendra Mairpady</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>



      </div>
      </div>
      </div>

      <div className='committe-rows'>

      <h3>LEGAL, REGULATORY & TAX COMMITTEE </h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Pranav V. Adani</p>
        </div>
        <div className='agreement-col2'>
          <p>Chairman (Promoter,  Executive Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Narendra Mairpady</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>



      </div>
      </div>
      </div>

      <div className='committe-rows'>

      <h3>REPUTATION RISK COMMITTEE</h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Pranav V. Adani</p>
        </div>
        <div className='agreement-col2'>
          <p>Chairman (Promoter,  Executive Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Narendra Mairpady</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>



      </div>
      </div>
      </div>

      <div className='committe-rows'>

      <h3>REPUTATION RISK COMMITTEE</h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Vinay Prakash</p>
        </div>
        <div className='agreement-col2'>
          <p>Chairman (Executive Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Narendra Mairpady</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>



      </div>
      </div>
      </div>

      <div className='committe-rows'>

      <h3>CORPORATE RESPONSIBILITY COMITTEE</h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. V. Subramanian</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mrs. Vijaylaxmi Joshi</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>



      </div>
      </div>
      </div>

      <div className='committe-rows'>

      <h3>PUBLIC CONSUMER COMMITTEE</h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. V. Subramanian</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Narendra Mairpady</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>



      </div>
      </div>
      </div>

      <div className='committe-rows'>

      <h3>PUBLIC CONSUMER COMMITTEE</h3>
        <div className='management-per-content'>
        <div className='airport-agreement-contents'>

        <div className='agreement-row-2'>
        <div className='agreement-col'>
          <h5>Name of Member</h5>
        </div>
        <div className='agreement-col2'>
          <h5>Composition of Committee</h5>
        </div>
      </div>

      <div className='agreement-row-2'>
          <div className='agreement-col'>
          <p>Mr. Hemant Nerurkar</p>
          </div>
        <div className='agreement-col2'>
        <p>Member (Non-Executive & Independent Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Pranav V. Adani</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Promoter & Executive Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. Vinay Prakash</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Executive Director)</p>
        </div>
      </div>

      <div className='agreement-row-2'>
        <div className='agreement-col'>
          <p>Mr. V. Subramanian</p>
        </div>
        <div className='agreement-col2'>
          <p>Member (Non-Executive & Independent Director)</p>
        </div>
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

export default Commite
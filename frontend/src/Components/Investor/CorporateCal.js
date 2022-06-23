import React from 'react'
import './Corporatecal.css'

const CorporateCal = () => {
  return (
    <>
        <div className='corporate-cal'>
            <div className='corporate-cal-row'>
            <div className='corporate-left-col'>
                <img src='../assets/adani enterprise/credit-investor-information.png' alt=''></img>
                <div>
                <h5>Credit Investor Information</h5>
                <ul>
                <li>Latest Credit Rating</li>
                <li>Latest Debt Information</li>
                </ul>
                </div>
            </div>

            <div className='corporate-right-col'>
                <div className='top-tittle'>
                    <h2 className='corporate-calender'>Corporate Calender</h2>
                    <h2 className='filing'>Filings</h2>
                </div>

                <div className='corporate-cal-content'>
                <div className='period-meetings'>
                    <h5 className='period-ended'>Period ended</h5>
                    <div className='meeting-date'>
                        <h5 className='meeting-h5'>Date of meetings</h5>
                        <div className='meeting-type'>
                            <h5>AGM</h5>
                            <h5>Audit Commitee</h5>
                            <h5>Board Meeting</h5>
                        </div>
                    </div>
                </div>
                <div className='quarter'>
                    <p>Q1FY23</p>
                    <p>26.07.2022<br/>(Tuesday)</p>
                    <p>04.08.2022<br/>(Thursday)</p>
                    <p>04.08.2022<br/>(Thursday)</p>
                </div>
                <div className='quarter'>
                    <p>Q2FY23</p>
                    <p>-</p>
                    <p>03.11.2022<br/>(Thursday)</p>
                    <p>03.11.2022<br/>(Thursday)</p>
                </div>
                <div className='quarter'>
                    <p>Q2FY23</p>
                    <p>-</p>
                    <p>09.02.2023</p>
                    <p>09.02.2023</p>
                </div>
            </div>    
            </div>
                 
            </div>
        </div>
    </>
  )
}

export default CorporateCal
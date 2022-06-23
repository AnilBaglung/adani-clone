import React, {useState} from 'react'
import './Faq.css'
import Navbar from '../../Home/Navbar/Navbar'
import Links from '../../Home/Liinks/Links'
import Footer from '../../Home/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Faq = () => {
  const navigate = useNavigate()

  const [click, setClick] = useState(false)
  const [click1, setClick1] = useState(false)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  const [click4, setClick4] = useState(false)
  const [click5, setClick5] = useState(false)
  const [click6, setClick6] = useState(false)
  const [click7, setClick7] = useState(false)
  const [click8, setClick8] = useState(false)
  const [click9, setClick9] = useState(false)
  const [click10, setClick10] = useState(false)
  const [click11, setClick11] = useState(false)
  const [click12, setClick12] = useState(false)
  const [click13, setClick13] = useState(false)
  const [click14, setClick14] = useState(false)
  const [click15, setClick15] = useState(false)
  const [click16, setClick16] = useState(false)

  const handleQuestion = ()=>{setClick(!click)}
  const handleQuestion1 = ()=>{setClick1(!click1)}
  const handleQuestion2 = ()=>{setClick2(!click2)}
  const handleQuestion3 = ()=>{setClick3(!click3)}
  const handleQuestion4 = ()=>{setClick4(!click4)}
  const handleQuestion5 = ()=>{setClick5(!click5)}
  const handleQuestion6 = ()=>{setClick6(!click6)}
  const handleQuestion7 = ()=>{setClick7(!click7)}
  const handleQuestion8 = ()=>{setClick8(!click8)}
  const handleQuestion9 = ()=>{setClick9(!click9)}
  const handleQuestion10 = ()=>{setClick10(!click10)}
  const handleQuestion11 = ()=>{setClick11(!click11)}
  const handleQuestion12 = ()=>{setClick12(!click12)}
  const handleQuestion13 = ()=>{setClick13(!click13)}
  const handleQuestion14 = ()=>{setClick14(!click14)}
  const handleQuestion15 = ()=>{setClick15(!click15)}
  const handleQuestion16 = ()=>{setClick16(!click16)}
  return (
    <>
      <Navbar/>
      <section className='Investors-top-section'>
      <div className='investor-up-section'>
        <div onClick={()=>navigate('/')}><p>Home</p></div>
        <div><i class="fa-solid fa-chevron-right"></i></div>
        <div onClick={()=>navigate('/investors')}><p>Investors</p></div>
      </div>
      <h1>Investor Faqs</h1>
       
      <div className='adani-faq'>

      <div className='adani-faq1'>
      <h2>Adani related</h2>
      <div className='adani-questions'>
      <div className='asked-question' onClick={handleQuestion}>
      <p>Where is Adani Enterprises incorporated?</p>
      <i className={click? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click? 'question-answer':'displaynone'}>
      <p>Adani Enterprises is incorporated in Ahmedabad, India.</p>
      </div>

      <div className='asked-question' onClick={handleQuestion1}>
      <p>When was Adani Enterprises incorporated and stock first issued?</p>
      <i className={click1? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click1? 'question-answer':'displaynone'}>
      <p>Adani Enterprises was incorporated in 1988.On September 12, 1994, Adani Enterprises came out with an Initial Public Offering (IPO) of 1,261,900 shares of Rs 10 par value at a premium of Rs 140 per share.</p>
      </div>

      <div className='asked-question' onClick={handleQuestion2}>
      <p>How long has Adani Enterprises been listed/traded?</p>
      <i className={click2? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click2? 'question-answer':'displaynone'}>
      <p>Adani Enterprises was listed on the BSE for the first time on November 25, 1994. It was later on listed on the NSE on June 4, 1997.</p>
      </div>

      </div>
      </div>

      <div className='adani-faq1'>
      <h2>Address change</h2>
      <div className='adani-questions'>
      <div className='asked-question' onClick={handleQuestion3}>
      <p>How do I record a change in my address?</p>
      <i className={click3? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click3? 'question-answer':'displaynone'}>
      <p>A request letter duly signed by the shareholder(s) (including all joint-holders) stating the new address along with the Pin Code (mandatory) and all the Folio Nos must be sent to SSIPL. You must ensure that the signature of the first holder is as per the specimen signature recorded with SSIPL.</p>
      </div>

      <div className='asked-question' onClick={handleQuestion4}>
      <p>If the shares are in electronic mode, what is the procedure for recording change of address?</p>
      <i className={click4? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click4? 'question-answer':'displaynone'}>
      <p>Since the Depository Participant (DP) maintains the records of all the shares in electronic form, therefore any information pertaining to the change in address needs to be furnished to the respective DP.The said DP will then pass on this information to Adani Power as and when required for dispatch of Annual Accounts; Postal ballots, Issue of Bonus shares; payment of dividend or any other communication.</p>
      </div>

      <div className='asked-question' onClick={handleQuestion5}>
      <p>Can joint-holder(s) other than the first holder request for a change in address?</p>
      <i className={click5? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click5? 'question-answer':'displaynone'}>
      <p>No. The request letter for updation of records should be signed by the first holder along with the signatures of the joint holders.</p>
      </div>

      <div className='asked-question' onClick={handleQuestion6}>
      <p>Can there be multiple addresses for a single folio?</p>
      <i className={click6? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click6? 'question-answer':'displaynone'}>
      <p>No. There can only be one registered address for one.</p>
      </div>


      </div>
      </div>

      <div className='adani-faq1'>
      <h2>Dividend</h2>
      <div className='adani-questions'>
      <div className='asked-question' onClick={handleQuestion7}>
      <p>What are the features of the Electronic Clearing Facility (ECS) introduced by the Reserve Bank of India (RBI)?</p>
      <i className={click7? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click7? 'question-answer':'displaynone'}>
      <p>RBI has introduced the Electronic Clearing Service which allows electronic credit of the dividend amount to your bank account for the amount due to you.</p><br/>
      <h3>The salient features are:</h3><br/>
      <p><b>Instant credit -</b>This Facility provides instant credit of dividend amount to your bank account electronically at no extra cost. ECS also eliminates the delay in postal transit and fraudulent encashment of warrants.</p>
      <br/><p><b>Optional Scheme - </b>This scheme is optional Coverage - ECS is presently available in major cities/centres like Ahmedabad, Bangalore, Calcutta, Chennai, Delhi, Hyderabad, Mumbai, Pune. RBI has been extending this facility to various centres from time to time. The scheme is at present available only for payments upto a maximum amount of Rs 500,000.Procedure for credit - Under this facility the amount of dividend payable to you would be directly credited to your bank account. Your bank branch will credit your account and indicate the credit entry as 'ECS' transaction in your passbook/statement of account.</p>
      <p>In case ECS facility is not made available to you by the Company/their Bankers at a particular centre or the amount payable to you exceeds Rs 500,000, the dividend amount due to you would be remitted by means of a dividend warrant which would be posted to your address with the particulars of the bank/branch and account number furnished by you duly incorporated on it.</p>
      </div>

      <div className='asked-question' onClick={handleQuestion8}>
      <p>How do I avail of the ECS Scheme introduced by Reserve Bank of India (RBI)?</p>
      <i className={click8? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click8? 'question-answer':'displaynone'}>
      <p>To avail of ECS facility (i.e. direct electronic credit to your bank account), please write to SSIPL specifying the following details:</p><br/>
      <p>Your folio number<br/>Name and address of the bank branch<br/>Account type and account number<br/>The 9 digit code number of the bank and branch as appearing on the MICR cheque issued by the bank</p><br/>
      <p>This is applicable only for securities held in physical form. For securities held in electronic form, please contact your Depository Participant.</p>
      </div>

      <div className='asked-question' onClick={handleQuestion9}>
      <p>What do the terms 'ex-dividend' and 'record date' mean?</p>
      <i className={click9? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click9? 'question-answer':'displaynone'}>
      <p>Before announcing each dividend and in consultation with the Stock Exchange, Adani Enterprises' sets a date on which shares will be sold without entitlement to the dividend. This is known as going 'ex-dividend'. Before that date they are said to be 'cum dividend'.<br/><br/>If you buy shares before the ex-dividend date you are entitled to receive the dividend recently announced. If you buy on or after that date, in the ex-dividend period, that dividend is payable to the previous owner.<br/><br/>The dividend is paid to shareholders based on the number of shares held on the share register at the deadline ('record date'). The record date is currently two days after the ex-dividend date. If you receive a dividend having recently sold your shares and are unsure whether you are entitled to it, contact the agent who acted on your behalf in the sale. Depending on the terms of the sale, the dividend may be due to the new owner.</p>
      </div>

      </div>
      </div>

      <div className='adani-faq1'>
      <h2>Dematerialisation</h2>
      <div className='adani-questions'>
      <div className='asked-question' onClick={handleQuestion10}>
      <p>What is dematerialisation?</p>
      <i className={click10? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click10? 'question-answer':'displaynone'}>
      <p>Dematerialisation is the process by which a client can get physical certificates converted into electronic balance</p>
      </div>

      <div className='asked-question' onClick={handleQuestion11}>
      <p>How do I convert my paper certificates into an electronic holding?</p>
      <i className={click11? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click11? 'question-answer':'displaynone'}>
      <p>To dematerialize your holding, you should first have an account with a Depository Participant (DP) of your choice. You may then hand-over to your DP, the certificates along with the Dematerialisation Request Form (DRF). Only the securities registered in your name can be submitted for dematerialization. Your DP will then send the DRF and the certificates to SSIPL and an electronic request will also be sent through the National Securities Depository Limited (NSDL) or Central Depository Services Limited (CDSL) network reconfirming the same. SSIPL will verify the documents and if found in order, the dematerialization request will be confirmed to NSDL/CDSL who will in turn inform your DP.</p><br/>
      <p>In the books of the Company, your folio with SSIPL will be debited and the account of NSDL/CDSL will be credited in respect of such dematerialized securities. NSDL/CDSL in their electronic records will credit the account of your DP. Your DP will then credit your account with the number of securities that have been dematerialized and the securities will thereafter be held in electronic form. This process would take approximately 15-20 days.</p>
      </div>

      </div>
      </div>

      <div className='adani-faq1'>
      <h2>Nomination</h2>
      <div className='adani-questions'>
      <div className='asked-question' onClick={handleQuestion12}>
      <p>How can you make a nomination?</p>
      <i className={click12? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click12? 'question-answer':'displaynone'}>
      <p>With a view to enabling the shareholders to appoint nominees for their shareholding(s), the Companies (Amendment) Act, 1999 has made provision under which a shareholder can now nominate a person in whom the share or debenture or deposit would vest with, in the event of former's death. Pursuant to this provision, the Department of Company Affairs has by Notification No GSR 23(F) dated 12th January, 1999 prescribed Form 2B for making nomination in respect of shares, pursuant to Rules 4CCC and 5D of the Companies (Central Government) General Rules and Forms, 1956.<br/><br/>Hence you can make a nomination by filling in and sending Form 2B singly if you are a sole holder or jointly if you are joint holders to SSIPL. After verifying your signatures your nomination would be registered and an intimation of the same would be sent to you, which you are requested to preserve to avoid any future.</p><br/>
      <h3>Important points to note</h3><br/>
      <p>Always include your complete address along with pin code while filling in the transfer deed/opening an account with a Depository Participant.<br/><br/>Keep photocopies of certificates, transfer deeds and other documents sent by post to SSIPL. In case of a loss in transit, they come handy.</p>
      </div>

      </div>
      </div>

      <div className='adani-faq1'>
      <h2>Transfer</h2>
      <div className='adani-questions'>
      <div className='asked-question' onClick={handleQuestion13}>
      <p>What is the process of getting shares of Adani Enterprises purchased by one, transferred in his name?</p>
      <i className={click13? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click13? 'question-answer':'displaynone'}>
      <p>One should send the share certificates along with the duly filled in and executed share transfer deed to SSIPL. The share transfer deed should bear the share transfer stamps at 0.25% of the market value on the date of execution of the transfer deed or consideration value whichever is higher. The rate per share can be picked up from any newspaper. The date for which the rate is picked up must be the same as the execution date mentioned on the transfer deed.<br/><br/>Electronic transactions do not attract any stamp duty. However, each Depository Participant may levy a transaction charge. The rate should be confirmed with your Depository Participant beforehand.</p>
      </div>

      </div>
      </div>

      <div className='adani-faq1'>
      <h2>Transmission</h2>
      <div className='adani-questions'>
      <div className='asked-question' onClick={handleQuestion14}>
      <p>I am the legal heir/executor in respect of the sole holder who is now deceased. How do I transmit the securities?</p>
      <i className={click14? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click14? 'question-answer':'displaynone'}>
      <p>Please submit the certificates along with the attested copy of the Succession Certificate or Probate of Will or Letter of Administration obtained in respect of the sole holding. You are also required to submit the prescribed transmission form available with SSIPL duly completed and signed by the legal heir(s)/executor(s) whose signature(s) should be verified by his/their bank manager under his official seal stating his full name, designation with name and address of the bank. Attestation on the legal document should be done by a Notary Public under his official seal stating full name, address and registration number.<br/><br/>In case you do not have any such form of Legal Representation, please write to SSIPL for further advice. Dependent upon the type and size of holding, certain documentation may be required for transmission of securities in favor of the legal heirs.</p>
      </div>

      </div>
      </div>

      <div className='adani-faq1'>
      <h2>Miscellaneous</h2>
      <div className='adani-questions'>
      <div className='asked-question' onClick={handleQuestion15}>
      <p>How do I apply for change of name?</p>
      <i className={click15? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click15? 'question-answer':'displaynone'}>
      <p><b>A.Individual</b><br/>Please write to SSIPL, giving the following details<br/>Reason for change of name accompanied by supporting document duly attested<br/>The name(s) of the company (ies) in which you hold shares<br/>Full details of both your old and new names<br/>Your Ref Folio Number -which can be found on your share/debenture certificates or dividend/interest counterfoil</p><br/>
      <p><b>B.Corporate</b><br/>Please write to SSIPL enclosing an original or certified copy of the Certificate of Incorporation on Change of Name</p>
      </div>

      <div className='asked-question' onClick={handleQuestion16}>
      <p>What is Form ISR-4?</p>
      <i className={click16? 'fa-solid fa-minus':'fa-solid fa-plus'}></i>
      </div>
      <div className={ click16? 'question-answer':'displaynone'}>
      <p>SEBI has mandated to issue shares in dematerialized form only while processing service requests relating to physical share certificate i.e. duplicate certificate, Claim from Unclaimed Suspense Account, Transmission and Transposition, Renewal / Exchange / Endorsement / Sub-division / Consolidation/ Splitting of certificates or folios.<br/>Hence, shareholder is required to submit duly filled up <a href='https://www.adanienterprises.com/investors/-/media/Project/Enterprises/Media/Form%20ISR4.pdf' target='_blank' style={{color:'blue'}}>Form ISR-4</a> for processing above requests, as per the format along with the documents / details specified therein.</p>
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

export default Faq
import React,{useState} from 'react'
import './Explore.css'
import Data from './Exploredata'



const Explore = () => {
  const [myData, setMyData] = useState(Data)
  const [click, setClick] = useState(false)
  

  let myList = [...new Set(myData.map((data)=>{
    return data.title}))]


  const filterItem=(listItem)=>{
    const updateData = Data.filter((elem)=>{
    return elem.title ===listItem;});
    setMyData(updateData);
    setClick(true)
    
    }
  

  const [titleList, setTitleList] = useState(myList)

  const defaultlist = Data.filter((list)=>{
    return list.title == 'Strategic Investment' 
  })
  

  return (
    <>
      <section className='explore'>
      <div className='explore-container'>
        <div className='explore-row'>

          <ul>
          { titleList.map((listItem, index)=>{
            return (
              <li  key={index} className={click? 'explore-list a' : 'explore-list'}  onClick={()=>filterItem(listItem)}>{listItem}</li>
            )
          })}
          </ul>

          <div className='explore-subrow'>
          {click? myData.map((item, index)=>{
            return(
          <div className='explore-col' key={index}>
            <img className='explore-img' src={item.img} alt=''></img>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
            )})
            : defaultlist.map((list, index)=>{
            return(
          <div className='explore-col' key={index}>
            <img className='explore-img' src={list.img} alt=''></img>
            <h3>{list.name}</h3>
            <p>{list.desc}</p>
          </div>
            )})}

          </div>
         
         

          <div className='explore-btn'>
          <button className='explore-now'>Explore More</button>
          </div>

        </div>

        </div>
      </section>
    </>
  )
}

export default Explore
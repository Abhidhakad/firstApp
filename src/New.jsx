import React,{useState} from 'react'
import './New.css'
function New(){
  const [color,setColor] = useState("#f2a3f0")

  return(
    <>
    <div className="container" style ={{backgroundColor:color}}>
      <p>Change BackGround</p>
      <div className="wraper">
        <button className="colorName red" onClick={()=> setColor("red")}>Red</button>
        <button className="colorName green" onClick={()=> setColor("green")}>Green</button>
        <button className="colorName blue" onClick={()=> setColor("blue")}>Blue</button>
      </div>
    </div>
    </>
  )
}
export default New;
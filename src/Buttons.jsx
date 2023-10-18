import {useState} from 'react'
import './Buttons.css'
function Buttons () {
  const [rval,setrValue] = useState(0);
  const [gval,setgValue] = useState(0);
  const [bval,setbValue] = useState(0);
  let bcolor = `rgb(${rval},${gval},${bval})`;
  return(
    <>
      <div className="container">
      <div className='box' style={{backgroundColor:bcolor}}></div>
      <div className="wraper">
      
        <div >
          <p>Red({rval})</p>
          <input className="red" type="range" min="0" max="255" step='1' 
          value= 
          {rval} onChange={(event)=>setrValue(event.target.value)} />
        </div>
        <div className="ip green">
          <p>Green({gval})</p>
          <input className="green" type="range" min="0" max="255" step='1' 
          value= 
          {gval} onChange={(event)=>setgValue(event.target.value)} />
        </div>
        <div className="ip blue">
          <p>Blue({bval})</p>
          <input className="blue" type="range" min="0" max="255" step='1' 
          value= 
          {bval} onChange={(event)=>setbValue(event.target.value)} />
        </div>
      
      </div>
    </div>
      
    </>
  )
}
export default Buttons;
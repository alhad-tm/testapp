import React, { useState } from 'react'
import css from "./Meter.module.css"


const Meter = () => {
    const [state,setState]=useState(0)
  return (
    <div className={css.container}>
      <div className={css.circle}>
        <div  className={state===0 ? css.line : css.line1 }>   
        </div>
       
      </div>
      <button onClick={()=>setState(state+1)}> add</button>
    </div>
  )
}

export default Meter

//  timer 3 minute
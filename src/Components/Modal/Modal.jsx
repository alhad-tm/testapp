import React, { useState } from 'react'
import css from "./Modal.module.css"

const Modal = () => {

    const [state,setState]=useState(false)

    const toggle=()=>{
        setState(!state)
    }

  return (
    <div className={css.modal}>

        <button onClick={toggle}>Open</button>
        {
            state&& 
            <div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id! </p>
                <button onClick={toggle}>close</button> 
                 </div>
           
        }
        

      

      
    </div>
  )
}

export default Modal

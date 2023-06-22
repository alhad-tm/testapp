import React, { useState } from 'react'
import css from "./Password.module.css"

const Password = () => {


    const [password,setPassword]=useState(false)

    const handleShow=()=>{
        setPassword(!password)
    }

  return (
    <div className={css.container}>
        <input type={password?"text":"password" }/>
        <label onClick={handleShow} htmlFor=""> show</label>
      
    </div>
  )
}

export default Password
   
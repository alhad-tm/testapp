import React from 'react'
import css from "./Alert.module.css"
import Swal from 'sweetalert2';

const Alert = () => {

    const Pop=()=>{
        // Swal.fire('You have 2 new messages')
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You have 2 new messages',
            showConfirmButton: false,
            height:"100px",
            width:"400px",
            fontsize:"2px",
            // timer: 1500,
            display:"flex",
            gap:"5rem"
          })
    }
   
  return (
    <div className={css.container}> 
    <button onClick={Pop}>hello</button>
      
    </div>
  )
}

export default Alert

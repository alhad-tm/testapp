// import React, { useState } from 'react'
// import "./Accordian.css"
// import { ItemList } from '../../data/questions'

// const Accordian = () => {
//     const [selected,setSelected]=useState(null)

// const toggle=(i)=>{
//     if (selected==i){
//         return setSelected(null)
//     }
//     setSelected(i)
// }

//   return (
//     <div className="container">
      
//       {ItemList.map((data,i)=>(
//         <div className="box">
//             <div className="quest" onClick={()=>toggle(i)}>
//             <h4>{data.question}</h4>
//             <span>{selected===i ? "-":"+"}</span>
//             </div> 
           
       
//         <div className={selected===i? "show":"answ"}>
//             <p>{data.answer}</p>

//         </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Accordian
 
import React, { useState } from 'react'
import css from "./Accordian.module.css"

import { ItemList } from '../../data/questions'

const Accordian = () => {
    const [selected,setSelected]=useState(null)

const toggle=(i)=>{
    if (selected===i){
        return setSelected(null)
    }
    setSelected(i)
   
}

  return (
    <div className={css.container}>
      
      {ItemList.map((data,i)=>(
        <div className={css.box}>
            <div className={css.quest} onClick={()=>toggle(i)}>
            <h4>{data.question}</h4>
            <span>{selected===i ? "-":"+"}</span>
            </div> 
           
       
        <div className={selected===i ? css.show : css.answ} >
            <p>{data.answer}</p>

        </div>
        </div>
      ))}
    </div>   
  )
}

export default Accordian
  
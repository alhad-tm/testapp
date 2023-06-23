import React, { useState } from 'react'
import css from "./Selection.module.css"
import { SelectList } from '../../data/questions'


const Selection = () => {
 
  const[selected,setSelected]=useState(false)

  const handleSubmit=(i)=>{
   if (selected===i){
    return setSelected(false)
   }
   setSelected(i)
  }

  return (
    <div className={css.container}>

      {/* <div className={css.b1}>
      <div onClick={handleSubmit}  className={selected? css.boxeshow : css.boxes } >one</div>
      <div onClick={handleSubmit}  className={selected? css.boxeshow : css.boxes }>two</div>
      <div className={css.boxes}>three</div>
      <div className={css.boxes}>four</div>
      </div>
      <div className={css.b1}>
      <div onClick={handleSubmit}  className={selected? css.boxeshow : css.boxes } >one</div>
      <div onClick={handleSubmit}  className={selected? css.boxeshow : css.boxes } >two</div>
      <div className={css.boxes}>three</div>
      <div className={css.boxes}>four</div>
      </div> 
      <div className={css.b1}>
      <div className={css.boxes}>one</div>
      <div className={css.boxes}>two</div>
      <div className={css.boxes}>three</div>
      <div className={css.boxes}>four</div>
      </div> */}

      {SelectList.map((data,i)=>{
        return(
          <div className={css.bl}>
            <div onClick={()=>handleSubmit(i)} className={selected===i? css.boxeshow: css.boxes}>{data.title}</div>

          </div>
        )
      })}
     
    
      
    </div>
  ) 
}

export default Selection

import React from 'react'
import css from "./Files.module.css"
import Img1 from "../../assets/pf1.png"
import Img2 from "../../assets/pf2.png"
import Img3 from "../../assets/pf3.png"

const Files = () => {
  return (
    <div className={css.container}>
      
      <img className={css.img1} src={Img1} alt="" />
      <img className={css.img2} src={Img2} alt="" />
      <img className={css.img3} src={Img3} alt="" />
   
    </div>
  )
}

export default Files
 
import React, { useEffect, useState } from 'react'
import css from "./Count.module.css"

const Count = () => {
    // const [count,setcount]=useState(0)

    // useEffect=()=>{
    //     const timer=
    //     count>0 && setCount     
    // }

    const [counter, setCounter] = React.useState(59);
    const [minute,setMinute]=React.useState(10)
    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    React.useEffect(() => {
        const timer =
        minute > 0 && setInterval(() => setMinute(minute - 1), 60000);
        return () => clearInterval(timer);
    }, [minute]); 

  return (
    <div className={css.container}>
       <span>{minute}:{counter}</span>
    </div> 
  )
}

export default Count
 

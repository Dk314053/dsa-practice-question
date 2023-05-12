import React from 'react'
import { useState,useEffect } from 'react'

const CleanUpfunc = () => {
const[width,setWidth]=useState(window.screen.width)

const actualWidth=()=>{
    console.log(window.innerWidth)
    setWidth(window.innerWidth)
}


useEffect(()=>{
    console.log("addEvent")
 window.addEventListener("resize",actualWidth);
 return ()=>{
    console.log("removeEvent")
    window.removeEventListener("resize",actualWidth);
 }
})

  return (
    <div style={{fontSize:"40px",marginBottom:"30px"}}>
  <p>The actual size of window is :</p>
  <h>{width}</h>

    </div>
  )
}

export default CleanUpfunc
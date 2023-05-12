import React from "react";
import { useState, useMemo } from 'react'
import '../Component/Memo.css'

export default function Memo() {
  const [value, setValue] = useState(0)
  const [show, setShow] = useState(true)

const getValue=()=>{
    setValue(value+ 1 );  
}  
  const countNumber=(num)=>{
  console.log("cliked me every time",num)
  for(let i=0;i<=100000;i++){}
   return num
}
const checkData =useMemo(()=>{
   return countNumber(value);
},[value])


  return  (
    <div className="main">
      <button className="btn6" onClick={getValue}>Counter</button>
      <p className="para2">My new Number are:{checkData }</p>
     
      <button className="btn7" onClick={()=>setShow(!show)}>
        {show? "You Clicked me ":"Clicked me plz"} </button>
       
    </div>
  );
}


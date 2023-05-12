import React,{useState,useEffect} from 'react'

const UseEffect = () => {

    const[update,setUpdate]=useState(0)
    useEffect(()=>{
      // console.log("I am first")
      if(update>=1){
      document.title=`Chats (${update})`
      }else{
        document.title=`Chats`
      }
    });

//     useEffect(()=>{
//  console.log("I am fine")
//     });
    // console.log("first priority outside useeffect")
  return (
    <>
    <h1>{update}</h1>
    <button onClick={()=>setUpdate(update+1)}>click me</button>
    </>
  )
}

export default UseEffect
import React from 'react'

const UseStateObject = () => {
    const[introduction,setIntroduction]=React.useState({ myname:"Deepak kumar", myage:25,
    branch:"Mechanal",Experience:"2year"
});

const changeUpdate=()=>{
    // Use of spread operator-how to copy introduction part and if we change any
    //  thing then only write those things in setIntroduction part.
    setIntroduction({...introduction,Experience:"3year",myname:"Deepak"});
}
   

  return (
    <div>
       <h1 className='head'>Name:{introduction.myname} && Age:{introduction.myage} && Branch:{introduction.branch}&& Experience:{introduction.Experience} </h1>
       <button onClick={changeUpdate}>Updae</button>
    </div>
  )
}

export default UseStateObject
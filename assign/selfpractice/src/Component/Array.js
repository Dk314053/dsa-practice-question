import React, {useState}from 'react'

const Array = () => {
    const arry=[
        {id:0,name:"deepak",age:28},
        {
            id:1,name:"rahul",age:28
        }
    ]
    // console.log(arry)
    const[change,setChange]=useState(arry)
    const changeClaer=()=>{
        setChange([])
    }
  return (
<div className="new">{
change.map((element)=> <h1 key={element.id}>myname: {element.name} & myage:{element.age} </h1>
)

}
<button onClick={changeClaer}>Clear</button>
</div>
  )
}

export default Array
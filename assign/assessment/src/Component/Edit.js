import React from 'react'
import {useRef} from 'react'
import {useRecoilState} from 'recoil'
import {Atom} from './Atom'
import './Edit.css'
const Edit = () => {
const [data,setData]=useRecoilState(Atom)

const Id=useRef()
const title=useRef();
const author=useRef();
const disc=useRef();

const handleUpdate=()=>{
  const Data=data.map((ele)=>{
    if(ele.id===Id.current.value){
      let obj={
        id:ele.id,
        title:title.current.value,
        author:author.current.value,
        disc:disc.current.value
      }
      return obj
    }else{
      return ele
    }
  })
  setData([...Data])
}

  return (
    <div className='container'>
       <input ref={Id} type ="text" placeholder="Enter ID which you want delete"  />
            <input ref={title} type ="text" placeholder="Enter titel "  />
            <input ref={author} type ="text" placeholder="Enter author "  />
            <input ref={disc} type ="text" placeholder="Enter Disc "  />
            <button className='btn' onClick={handleUpdate}>Update Data</button>

        </div>
  )
}

export {Edit}
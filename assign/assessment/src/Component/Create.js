import React from 'react'
import {useRef} from 'react'
import { Atom } from './Atom'
import {useRecoilState} from 'recoil'
const Create = () => {
    const title=useRef();
    const author=useRef();
    const disc=useRef();
    const Id=useRef();

    const [note,setNotes]=useRecoilState(Atom)
  const handleClick=()=>{
    const obj={
        id:Id.current.value,
        title:title.current.value,
        author:author.current.value,
        disc:disc.current.value
    }
            setNotes(
                [ ...note, obj]
            )

    }
  

  return (
    <div className='container'>
          <input ref={Id} type='text' placeholder='Enter your id' />
          <input ref={title} type='text' placeholder='Enter title' />
          <input ref={author} type='text' placeholder='enter author' />
          <input ref={disc} type='text' placeholder='enter description' />
            <button className='btn' onClick={handleClick}>Submit</button>

    </div>
  )
}

export  {Create}
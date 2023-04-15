import React from 'react'
import { Atom} from './Atom'
import {useRecoilState} from 'recoil'
import {useRef} from 'react'

const Delete = () => {

    const Id=useRef()
    const [value,setValue]=useRecoilState(Atom)
    const handleDelete=()=>{
        const Data=value.filter((ele)=>ele.id!==Id.current.value)
        setValue(
            [...Data]
        )
    }
  return (
    <div className='container'>
        <input ref={Id} type="text" placeholder='Enter Id' />
        <button className='btn' OnClick={handleDelete}>Delete Note</button>
    </div>
  )
}

export  {Delete}
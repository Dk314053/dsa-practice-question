import React from 'react'
import {useRecoilValue} from 'recoil';
import {Atom} from './Atom'
import './Home.css'
const Home = () => {
const data=useRecoilValue(Atom)

  return (
 
    <div>
        <h1 className='head1'> Profile</h1>
        {
            data.map((Data,index)=>{
                return(
                 <div key={index}>
                    <h1> Id:-{Data.id}</h1>
                    <h1>Title:-{Data.title}</h1>
                    <h1>Author:-{Data.author}</h1>
                    <h1>Description:-{Data.disc}</h1>
                 </div>
                )
            })
        }
  
        </div>
       
  )
}

export { Home}
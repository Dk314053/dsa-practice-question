import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
const data=[
    {
        nav:'Home',
        path:'/',
    },
    
    {
        nav:'Create',
        path:'/create',
    },
    {
        nav:'Edit',
        path:'/edit',

    },
    {
        nav:'Delete',
        path:'/delete',
    }
]

  return (
    <div className='main'>
   <ul>
  {
  data.map((ele)=> <li><Link to={ele.path} >{ele.nav}</Link></li>)
  }

   </ul>


    </div>
  )
}

export  {Header}
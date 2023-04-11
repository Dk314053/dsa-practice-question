import React from 'react'
import axios from 'axios'
import './UserProfile.css'

import {useEffect,useState} from 'react'
const UserProfile = () => {
    const[user,setUser]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
              .then((response)=>{
              setUser(response.data);
    })
    },[]);
   
const handleClick=(index)=>{
    user.splice(index,1);
    setUser([...user]);
}

  return (
    <div>
  <h1>Description</h1>

    <table>
        <tr >
            <th>S.No</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
        </tr>
        <tbody>
            {
                user.map((ele,index)=>{
                    return (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.body}</td>
                            <td onClick={()=>handleClick(index)} className='action'>❌</td>
                        </tr>
                    );
                    })}
        </tbody>
    </table>


    </div>
  )
}

export default UserProfile

import React ,{useState} from 'react';
import Array from './Component/Array';
import './App.css';
import UseEffect from './Component/UseEffect';
import App1 from './Component/UseRef'
import UseStateObject from './Component/UseStateObject';
import ShortCirEval from './Component/ShortCirEval';
import Basicform from './Component/Basicform';
import CleanUpfunc from './Component/CleanUpfunc';
import Memo from './Component/Memo.js';
import UseCallback from './Component/UseCallback';
const App = () => {

const [name,setName]=useState("dEEPAK KUMAR");
const changeName=()=>{
  let val=name;
  // if(val=== "dEEPAK KUMAR"){
  //   setName('rAHUL KUMAR');
  // }else{
  //   setName('dEEPAK KUMAR');
  // }
   (val === "dEEPAK KUMAR")?  setName('rAHUL KUMAR'):setName('dEEPAK KUMAR')

}
// console.log(name)
  return (
    <>
    <div className='name1'>
    
        <h1>{name}</h1>
        <button onClick={changeName}>Click me</button>
        <Array /><br/><br/><br/>
        <UseEffect /><br/><br/><br/><br/>
        <App1 /><br/><br/><br/><br/>
        <UseStateObject/><br/><br/><br/><br/>
        <ShortCirEval /><br/><br/><br/><br/>
        <Basicform /><br/><br/><br/><br/>
        <CleanUpfunc  /><br/><br/><br/><br/>
        <Memo />
        <UseCallback />
    </div>
    </>
  )
}
export default App;
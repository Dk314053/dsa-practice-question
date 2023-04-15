import React from 'react'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import{ Home} from './Component/Home';
import {Edit} from './Component/Edit';
import {Header} from './Component/Header';
import {Create} from './Component/Create';
import {Delete} from './Component/Delete';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/delete' element={<Delete/>} />
      </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;

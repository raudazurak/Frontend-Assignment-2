import { useState, useEffect } from 'react'
import { Routes,Route } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Header from './Header';
import Fetches from './Fetches';
import Booking from './Booking';



export default function App() {

    const [Val, setVal] = useState({
      inValue:'',
      idValue:0
    });

    const setV = (key, value) => setVal({ ...Val, [key]: value });
    


  return ( 
    <div className="App">
     
     <Header Val={Val} setV={setV}/>
       <Routes><Route path="/" element={<Fetches Val={Val} setV={setV}/>}></Route>
       <Route path="/booking" element={<Booking Val={Val} setV={setV}/>}></Route>
      </Routes>

    
      
    
    </div>
  )
}

 
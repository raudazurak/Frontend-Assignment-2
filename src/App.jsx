import { useState, useEffect } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from './Header';
import Fetches from './Fetches';





export default function App() {

    const [Val, setVal] = useState({
      inValue:''
    });

    const setV = (key, value) => setVal({ ...Val, [key]: value });
    


  return ( 
    <div className="App">
      <Header Val={Val} setV={setV}/>
      <Fetches Val={Val} setV={setV}/>

    
      
    
    </div>
  )
}

 
import { useEffect, useState } from "react";
import Category from './Category';
export default function Header({Val,setV}) {
      
    const [cat,setCat] = useState('')
  
    return <div className="hid"><nav>
    <div className="leo"><div className="choice" onClick={() => setCat(prev => prev === '' ? <Category {...{Val,setV}}/>:'')
        
       }>
    <h3>Categories</h3>
    </div>
    <div className="premieres">
    <h3>Tickets</h3>
    </div></div>
    <div className="mid-sec">
    <div className="cinema">
    <h3>Feature Flix Cinema</h3>
    </div></div>
    <div className="neo">
    <div className="near">
    <h3>Search</h3>
    </div></div>
    </nav>
    <div className="showCats">{cat}</div>
    </div>
    ;
}
import { useEffect, useState } from "react";
import Category from './Category';
export default function Header({Val,setV}) {
      
    const [cat,setCat] = useState('')
  
    return <div><nav>
    <div className="choice" onClick={() => setCat(prev => prev === '' ? <Category {...{Val,setV}}/>:'')
        
       }>
    <h3>Categories</h3>
    </div>
    <div className="premieres">
    Premier times
    </div>
    <div className="cinema">
    <h3>Feature Flix</h3>
    </div>
    <div className="near">
    Book
    </div>
    <div className="lookup">
    Search
    </div>
    </nav>
    <div className="showCats">{cat}</div>
    </div>
    ;
}
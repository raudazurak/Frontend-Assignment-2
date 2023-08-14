import { useState, useEffect } from 'react'

export default function Category({Val,setV}) {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    // Self-executing asyncronous anonomyous function
    (async () => {
      
      setCategories(await (await (fetch('/api/categories'))).json());
    })();
  }, []);


 
    

    return(

    <div className="info">
    {categories.map(({ id, title}) =>
    <ul className="category" key={id} onClick={()=>setV('inValue',Val.inValue = title)}>
    <li className='cat-detail' >{title}</li>
    </ul>
    )}
    </div> 
    
    )
    
}

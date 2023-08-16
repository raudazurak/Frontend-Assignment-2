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
    <div className="category" key={id} onClick={()=>setV('inValue',Val.inValue = title)}>
    <div className='cat-detail' >{title}</div>
    </div>
    )}
    </div> 
    
    )
    
}

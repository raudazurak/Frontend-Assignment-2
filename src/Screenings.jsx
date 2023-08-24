
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Movie from './Movie';
import './utilities/auto-key-lists'
export default function Screenings({Val,setV,element,screening,movies}) {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let founder = []
  let foundCat = []
  

  let{ date, titles } = element



      for (let index = 0; index < titles.length; index++) {
        const mov = titles[index];
        
        let score = screening.find(item => item.screeningId === mov)

        
        let obj = movies.find(item => item.title === score.movie )

        let timer = new Intl.DateTimeFormat('en-GB', {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(new Date(`${score.screeningTime}`))

  
        obj.showTime = timer
        obj.screenId = score.screeningId
        
  
        founder.push(obj)   
      }
  
    

   

    if(Val.inValue!=''){
    for (let shown of founder ){
      if(shown.description.categories.includes(Val.inValue)){
          foundCat.push(shown)
      }
    
    }

    }else{
      foundCat = founder
    }


    
    return ( 
            <>{(foundCat.length === 0)? null : <h3>{date}</h3>}
            <Carousel responsive={responsive}>{foundCat.map(({ id, title, description, showTime,screenId }) =>    
               <Link className='text-link' to='/booking'><Movie
                key={id}
                {...{ title, description, showTime, Val, setV, screenId }}
                /></Link>
              
          )}
    </Carousel>
          </>
            
             
        
      )
    
}
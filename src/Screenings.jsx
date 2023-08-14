
import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Movie from './Movie';

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

      
      
      //console.log('blue')
      //console.log(movies)

      for (let index = 0; index < titles.length; index++) {
        const mov = titles[index];
        //console.log(mov)
        let obj = movies.find(item => item.title === mov
          )
          //console.log(obj)
        let score = screening.find(item => item.movie === mov)
  
        let timer = new Intl.DateTimeFormat('en-GB', {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(new Date(`${score.screeningTime}`))
  
        obj.showTime = timer
        //console.log(timer)
  
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

    
    
    //console.log(movies)


    //console.log(foundCat)
    
    return ( 
            <><h3>{date}</h3>
            <Carousel responsive={responsive}>{foundCat.map(({ id, title, description, showTime }) =>    
              <Movie
                key={id}
                {...{ title, description, showTime }}
                />
              
          )}
    </Carousel>
          </>
            
             
        
      )
    
}
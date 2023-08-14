
import { useState, useEffect } from 'react'

import Movie from './Movie';
import { Carousel } from 'react-bootstrap';
export default function Screenings({Val,setV,element,screening,movies}) {

  let founder = []
  let foundCat = []
  

  let{ date, titles } = element

      
      
      console.log('blue')
      console.log(movies)

      for (let index = 0; index < titles.length; index++) {
        const mov = titles[index];
        console.log(mov)
        let obj = movies.find(item => item.title === mov
          )
          console.log(obj)
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
        console.log(timer)
  
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

    
    
    console.log(movies)


    console.log(foundCat)
    
    return ( 
            <><h3>{date}</h3>
            <Carousel>{foundCat.map(({ id, title, description, showTime }) =>    
              <Movie
                key={id}
                {...{ title, description, showTime }}
                />
              
          )}
    </Carousel>
          </>
            
             
        
      )
    
}
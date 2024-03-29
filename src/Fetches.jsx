import Screenings from './Screenings';
import { useState, useEffect } from 'react'


export default function Fetches({Val,setV}) {


let binder = []
  let digit = 0
  const [screening, setScreen] = useState([]);
    const [View, setViews] = useState([]);
    const [times, setTimes] = useState([]);
    const [movies, setMovies] = useState([]);
    

    
    useEffect(() => {
        (async () => {
          
          setScreen(await (await (fetch('/api/screenings_overview'))).json());
          setMovies(await (await (fetch('/api/movies'))).json());
    
           
          let withDuplicates = screening.map(screen => 
            new Intl.DateTimeFormat('en-GB', {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              //hour: "numeric",
              //minute: "numeric",
            }).format(new Date(`${screen.screeningTime}`))

            );

         setTimes([...new Set(withDuplicates)])

        
         for (let index = 0; index < times.length; index++) {
          const element = times[index];
          let tim = []


          for (let screen of screening ){

            let gTime = new Intl.DateTimeFormat('en-GB', {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              //hour: "numeric",
              //minute: "numeric",
            }).format(new Date(`${screen.screeningTime}`))

            

          


           
            

    
            if(element === gTime){
               tim.push(screen.screeningId) }}

          binder.push({"id": digit++,"date": element,
          "titles": tim
        }) 
         }
        setViews(binder)
        
        
        })();
      }, [screening]);

     

    return( View.length === 0 ? null:
        <div className='blueRag'>
    
    {View.map(element => 
        <div className='redRag' key={element.id}>
            <Screenings
            {...{ Val, setV }}
            element={element}  
      screening={screening}
      movies={movies}
      
    />

    </div>)}</div>
    )
}
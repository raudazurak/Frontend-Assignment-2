import { useState, useEffect } from 'react'


import Header from './Header';
import Screenings from './Screenings';




export default function App() {
 

  let binder = []
  let digit = 0




    const [Val, setVal] = useState({
      inValue:''
    });
    const [screening, setScreen] = useState([]);
    const [View, setViews] = useState([]);
    const [times, setTimes] = useState([]);
    const [movies, setMovies] = useState([]);
    

    const setV = (key, value) => setVal({ ...Val, [key]: value });

    useEffect(() => {
        // Self-executing asyncronous anonomyous function
        (async () => {
          // Fetch all the movies from the REST api
          // and store them in the state variable movies
          
          setScreen(await (await (fetch('/api/screenings_overview'))).json());
          setMovies(await (await (fetch('/api/movies'))).json());
    
           
          let withDuplicates = screening.map(screen => 
            new Intl.DateTimeFormat('en-GB', {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              /*hour: "numeric",
              minute: "numeric",*/
            }).format(new Date(`${screen.screeningTime}`))

            );

         setTimes([...new Set(withDuplicates)])

         for (let index = 0; index < times.length; index++) {
          const element = times[index];
          let tim = []
          console.log('purple')


          for (let screen of screening ){

            let gTime = new Intl.DateTimeFormat('en-GB', {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              /*hour: "numeric",
              minute: "numeric",*/
            }).format(new Date(`${screen.screeningTime}`))
    
            if(element === gTime){ tim.push(screen.movie) }}

          binder.push({"id": digit++,"date": element,
          "titles": tim
        }) 
         }
        setViews(binder)
        
        
        })();
      }, []);

     

    
 


  return ( 
    <div className="App">
      <Header Val={Val} setV={setV}/>
    <div className='blueRag'>
      
    {View.map(element => 
        <div key={element.id}>
            <Screenings
            {...{ Val, setV }}
            element={element}  
      screening={screening}
      movies={movies}
      
    />

        </div>)}</div>
        
  

  <div className="info">
    {/*Loop through all movies and display each movie*/ }
    {/*movies.map(({ id, title, description }) => <Movie
      key={id}
      title={title}
      description={description}
    />)*/
    }</div>
    
    </div>
  )
}

 
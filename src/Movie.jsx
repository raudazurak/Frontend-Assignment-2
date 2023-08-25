import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export default function Movie(props) {

    // Destructure props into separate variables
    let { title, description,showTime,screenId, Val, setV} = props;
    let { posterImage, length} = description;
    let Hours = Math.floor(length/60)
    let mins = length % 60

    let mTime = 0

    if(Hours > 1){
      mTime = Hours + ' hours ' + mins + ' minutes'
    }else{
      mTime = Hours + ' hour ' + mins + ' minutes'
    }


    
    

  //<div className="movie">

  
    // Add the correct domain to the image path
    posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;
  
    return (
     <div className='movie' onClick={()=>setV('idValue',Val.idValue = screenId)}>
        <img src={posterImage} />
      <div className='caption'>
      <h4>{title}</h4>
      <p>{showTime}</p>
      <p>{mTime}</p></div>   
      </div>

    )
}
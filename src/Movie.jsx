import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Movie(props) {



    // Destructure props into separate variables
    let { title, description,showTime } = props;
    let { posterImage, length} = description;
    

  //<div className="movie">

  
    // Add the correct domain to the image path
    posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;
  
    return (
      <div className='movie'>
        <img src={posterImage} />
      <div className='caption'>
      <h4>{title}</h4>
      <p>{showTime}</p>
      <p>{length}</p></div>   
      </div>

    )
}
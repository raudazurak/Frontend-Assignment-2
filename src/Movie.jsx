import Carousel from 'react-bootstrap/Carousel'



export default function Movie(props) {



    // Destructure props into separate variables
    let { title, description,showTime } = props;
    let { posterImage, length} = description;
    

  //<div className="movie">

  
    // Add the correct domain to the image path
    posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;
  
    return (
      <Carousel.Item className='movie'>
        <img src={posterImage} />
      <Carousel.Caption>
      <h4>{title}</h4>
      <p>{showTime}</p>
      <p>{length}</p>
      </Carousel.Caption>
      
      </Carousel.Item>

    )
}
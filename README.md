#### Title 
## Feature Flix Cinema
Feature Flix Cinema is a website that shows a sorted list of days dates when movies will be shown and under these specific dates are multi-carousels that show a group of the movies that will be shown and these movies can be filtered based on their categories. When a movie is clicked, it takes you to a booking page of the seats.

#### Technologies and libraries used.
The technologies, used in this project include react, vite library, a multi-carousel dependency was used to present the lists of movies show on a particular day. The react router DOM was also used to present the movies as links so that when a movie is clicked, it takes the user to the booking page. 

### Components
#### Header component
In this project there has been the use of many components. The first component that will appear on the screen is the header. This component consists of the nav tag within the nav tag we have a categories, Tickets the name of the company, feature flix cinema and then a search. The only active element in the nav bar is categories and it is used to filter the different movie categories that exist.

#### Category component
The categories element in this navbar is a component on its own. This component fetches from the cinema REST API “/api/categories” and then an array of the categories and their ids is returned. The array is mapped, and each category is displayed on the screen when the categories element is clicked in the navbar on the screen. 

#### Fetches component.
This component fetches the data from the “/api/screenings” and “/api/movies”, and the data is set to arrays. One of the key-value pairs in the object of the screenings array is the screening time of the movie. An array of the movie screening dates is made from the screening times in the screenings array. Then another array called view is made that contains the movie screening dates and the titles of the movies that will be shown on that day, in the return fragment of this component, the view array is being mapped and then there is a screenings component that has children that are parsed to it.

#### Screenings component.
De-structures the view object that consists of date and titles array. From the movies array that was parsed to this component we find the movie objects with same titles from the titles array and then in the return fragment the date and the found movie objects are mapped and their parsed to another component called Movie. In this component there is also the checking of whether a movie has the category that is being clicked from the header. Within the return fragment there is also the showing the movies list in a carousel and each movie is shown as a link.

#### Movie component.
This component first de-structures the props into title, description and showtime. Then the description is de-structured into poster Image and length. The length is then converted to hours and minutes. Finally in the return fragment, we have the poster image, then the name, show time which is the date and time of the movie and then the converted length of the movie.

#### Booking Component.
It is a route in the app component that, redirects user to a new page when a movie is being clicked on.
 
### Installation instructions 
Clone the gitlink of the project.
Open the project in vs code, run npm install in the terminal.
Then, npm run dev and “control” + click the link of the localhost path to the browser to view the project. 



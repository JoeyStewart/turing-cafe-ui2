import Card from '../Card/Card.js';
import './Reservation.css';


function Reservation({reservations}){


const ResCards = reservations.map(res => {
   return (
        <Card
        name={res.name}
        description={res.date}
        time={res.time}
        guests={'Number of guests: ' + res.number} 
        id={res.id}
        key={res.id}
  />
   )
})
 return (
   <div className='reservation-container'>
     {ResCards}
   </div>
 )
}


export default Reservation;
import Card from '../Card/Card.js';
import './Reservation.css';


function Reservation({ reservations, deleteRes }){

const ResCards = reservations.map(res => {
   return (
        <Card
        name={res.name}
        date={res.date}
        time={res.time}
        number={'Number of guests: ' + res.number} 
        id={res.id}
        key={res.id}
        deleteRes={deleteRes}
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
import { useState } from 'react';
import './Form.css';


function Form(addRes){
 const [name, setName] = useState("");
 const [date, setDate] = useState("");
 const [time, setTime] = useState("");
 const [guests, setGuests] = useState("");


 function submitNewRes(event) {
   event.preventDefault()
   const newRes = {
       id: Date.now(),
       name,
       date,
       time,
       guests
   }
   addRes(newRes)
   emptyInput()
}


 function emptyInput(){
   setName("")
   setDate("")
 }
 return (
   <form>
       <input
       type="text"
       placeholder="someShit"
       name="name"
       value={name}
       onClick={event => setName(event.target.value)}
       />
       <input
       type="text"
       placeholder="Date of Reservation"
       name="date"
       value={date}
       onClick={event => setDate(event.target.value)}
       />
        <input
       type="text"
       placeholder="Time of Reservation"
       name="time"
       value={time}
       onClick={event => setTime(event.target.value)}
       />
       <input
       type="text"
       placeholder="Number of Guests"
       name="guests"
       value={guests}
       onClick={event => setGuests(event.target.value)}
       />


       <button onClick = { event => submitNewRes(event)}>Make Reservation</button>
   </form>
 )
}


export default Form
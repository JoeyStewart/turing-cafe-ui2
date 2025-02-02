import { useState } from 'react';
import './Form.css';


function Form({addRes}){
 const [name, setName] = useState("");
 const [date, setDate] = useState("");
 const [time, setTime] = useState("");
 const [number, setNumber] = useState("");


 function submitNewRes(event) {
   event.preventDefault()
   const newRes = {
       id: Date.now(),
       name,
       date,
       time,
       number
   }
   addRes(newRes)
   emptyInput()
}


 function emptyInput(){
   setName("")
   setDate("")
   setTime("")
   setNumber("")
 }
 return (
   <form>
        <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
        />
        <input
        type="text"
        placeholder="Date of Reservation"
        name="date"
        value={date}
        onChange={event => setDate(event.target.value)}
        />
        <input
        type="text"
        placeholder="Time of Reservation"
        name="time"
        value={time}
        onChange={event => setTime(event.target.value)}
        />
        <input
        type="text"
        placeholder="Number of Guests"
        name="guests"
        value={number}
        onChange={event => setNumber(event.target.value)}
        />
        <button onClick={ event => submitNewRes(event)}>Make Reservation</button>
   </form>
 )
}


export default Form
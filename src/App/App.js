import './App.css';
import Reservation from '../Reservation/Reservation.js';
import Form from '../Form/Form.js';
import { useState } from 'react';
import React from 'react';

function App(){

  // const Fakereservations = [
  //   {
  //     id: 1,
  //     name: 'Christie',
  //     date: '12/29',
  //     time: '7:00',
  //     number: 12,
  //   },
  //   {
  //     id: 2,
  //     name: 'Leta',
  //     date: '4/5',
  //     time: '7:00',
  //     number: 2,
  //   },
  //   {
  //     id: 3,
  //     name: 'Pam',
  //     date: '1/21',
  //     time: '6:00',
  //     number: 4,
  //   },
  //   {
  //     id: 4,
  //     name: 'Khalid',
  //     date: '5/9',
  //     time: '7:30',
  //     number: 7,
  //   },
  //   {
  //     id: 5,
  //     name: 'Will',
  //     date: '5/15',
  //     time: '6:30',
  //     number: 2,
  //   },
  //   {
  //     id: 6,
  //     name: 'Eric',
  //     date: '5/30',
  //     time: '6:00',
  //     number: 8,
  //   },
  //   {
  //     id: 7,
  //     name: 'Robbie',
  //     date: '6/5',
  //     time: '5:30',
  //     number: 2,
  //   },
  //   {
  //     id: 8,
  //     name: 'Travis',
  //     date: '6/8',
  //     time: '7:00',
  //     number: 12,
  //   },
  //   {
  //     id: 9,
  //     name: 'Brittany',
  //     date: '9/9',
  //     time: '7:30',
  //     number: 3,
  //   }
  // ];
  const [reservations, setReservations] = useState([])
   
  function addRes (newRes) {
    setReservations([...reservations, newRes])
  }
  
  function deleteRes(id){
    console.log(id);
    const badRes = reservations.filter(res => res.id !== id)
    setReservations(badRes)
  }
 
 
  return(
    <main className='App'>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={addRes}/>
        </div>
        <div className='resy-container'>
          <Reservation reservations={reservations} deleteRes={deleteRes}/>
        </div>
    </main>
  )
 }
 
 
 export default App;

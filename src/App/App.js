import './App.css';
import Reservation from '../Reservation/Reservation.js';
import Form from '../Form/Form.js';
import { useState } from 'react';
import React from 'react';

function App(){

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
          <Reservation reservation={reservations} deleteRes={deleteRes}/>
        </div>
    </main>
  )
 }
 
 
 export default App;

 // function App() {
//   return (
//     <div className="App">
//       <h1 className='app-title'>Turing Cafe Reservations</h1>
//       <div className='resy-form'>
//       </div>
//       <div className='resy-container'>
//       </div>
{/* <Form addIdea={addIdea}/>
<Ideas ideas={ideas} deleteIdea={deleteIdea}/> */}
//     </div>
//   );
// }

// export default App; 
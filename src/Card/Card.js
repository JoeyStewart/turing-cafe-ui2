import './Card.css';

const Card = ({ name, date, time, guests, id, deleteRes }) => {
    return (
      <div className='card'>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time}</p>
        <p>{guests}</p>
        <button onClick={()=> deleteRes(id)}>Cancel</button>
      </div>
    )
  }
  export default Card;
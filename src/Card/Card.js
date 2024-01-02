import './Card.css';

const Card = ({ name, date, time, number, id, deleteRes }) => {
    return (
      <div className='card'>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time}</p>
        <p>{number}</p>
        <button onClick={()=> deleteRes(id)}>Cancel</button>
      </div>
    )
  }
  export default Card;
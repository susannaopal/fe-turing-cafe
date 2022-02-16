import React from 'react';
import './Card.css';

//have to pass the props from the APP to the RESERVATION to the CARD to be able to get the necessary properties onto the card from the data set
const Card = ({id, name, date, time, number}) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <h4>{date}</h4>
      <p>{time}</p>
      <p>{number}</p>
      <button>Cancel</button>
    </div>
  )
}


export default Card;
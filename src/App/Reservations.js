import React from 'react';
import './Reservations.css';
import Card from './Card';

//card still needs to be just 1 res per card (and styling)

const Reservations = ({reservations}) => {
  const reservationCards = reservations.map((reservation) => {
    //maps over the reservations in order to get each on a card 
    //need to pass in the props here for the card from app (parent) to card (child of reservation container)
  //see what the data from the api has properties and also need a key
  })
  return (
      <Card 
        id={reservation.id}
        key={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
  )
}

export default Reservations;
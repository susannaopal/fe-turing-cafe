import React from 'react';
import './Reservations.css';
import Card from './Card';

const Reservations = ({reservations}) => {
  return (
    <div className='reservations-container'>
      <Card />
    </div>
  )
}

export default Reservations;
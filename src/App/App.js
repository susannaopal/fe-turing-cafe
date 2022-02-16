import React, { Component } from 'react';
import './App.css';
import Reservations from './Reservations.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [
      ]
    }
  }

   componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => console.log(data))
    // .then(data => this.setState( {data: data.reservations} ))
    // .then(date => console.log({reservations: data}))
   }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <h1 className='testing'>Insert new reservation below</h1>
        {!this.state.reservations.length && <Reservations reservations={this.state.reservations}/>}
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;

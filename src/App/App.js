import React, { Component } from 'react';
import './App.css';
// import {apiCall} from './apiCall.js';
import './Reservations.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [
        {id: 1, 
        name: "Mary Cat",
        date: "12/9",
        time: "7:00",
        number: 10
      },
       {id: 2, 
        name: "Franny Cat",
        date: "12/12",
        time: "5:00",
        number: 9
      }
      ]
    }
  }

  // componentDidMount = () => {
  //   fetchAllReservations()
  //   .then(data => this.setState({reservations: data.reservations}))
  // }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <h1 className='testing'>Insert new reservation below</h1>
        <div className='resy-form'>
        
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;

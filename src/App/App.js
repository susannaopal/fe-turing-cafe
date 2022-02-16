import React, { Component } from 'react';
import './App.css';
import Reservations from './Reservations.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

   componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    //data below is undefined so not being recieved correctly
    //the url for the api is reservations
    //the data itself is an array with objects within but there isn't a name for either
    .then(data => this.setState( {reservations: data} ))
    .then(data => console.log("data2", data))
   }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {!this.state.reservations.length && <Reservations reservations={this.state.reservations}/>}
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

//note: making this change to push from newly set up repo

export default App;

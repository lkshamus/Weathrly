import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import { data } from './API.js'
import Card from './Card.js'

class App extends Component {
  constructor() {
    super()
    
  this.state = {
    weatherCards: data || [],
    selectedCardCount: 7
  }  
}
  render() {
      return (
        <div className="App">
        <Header />
       <Card 
       weather={this.state.weatherCards}
       selectedCardCount = {this.state.selectedCardCount}/>
      </div>
      )
    }
}


export default App;

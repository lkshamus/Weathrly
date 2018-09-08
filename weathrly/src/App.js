import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import { data } from './API.js';
import SevenHourCard from './SevenHourCard.js';
import CurrentWeatherCard from './CurrentWeatherCard';
import TenDayCard from './TenDayCard';

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
        <CurrentWeatherCard 
        weather={this.state.weatherCards} />
       <SevenHourCard 
       weather={this.state.weatherCards}
       selectedCardCount = {this.state.selectedCardCount}/>
       <TenDayCard 
        weather={this.state.weatherCards} />
      </div>
      )
    }
}


export default App;

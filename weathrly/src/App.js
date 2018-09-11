import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
// import { data } from './API.js';
import SevenHourCard from './SevenHourCard.js';
import CurrentWeatherCard from './CurrentWeatherCard';
import TenDayCard from './TenDayCard';
import apiConfig from './APIkey.js'

class App extends Component {
  constructor(props) {
    super(props)
    
  this.state = {
    weatherCards: [],
    isLoaded: false,
    location: ''
  }  
}

componentDidMount = () => {
  let storedLocation = JSON.parse(localStorage.getItem('weathrly', this.state.location))
  let autoLocation = 'autoip'
    if(storedLocation){
    this.getLocation(storedLocation)
  } else {
    this.fetchApi(autoLocation)
    console.log(storedLocation)
  }
}

updateLocalStorage = (location) => {
    localStorage.setItem('weathrly', JSON.stringify(location))
  }

fetchApi(location) {
  fetch(`http://api.wunderground.com/api/${apiConfig.apiKey}/conditions/hourly/forecast10day/q/${location}.json`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        weatherCards: data,
        location: location
      })
    })
    .catch(error => {
      console.log(error)
    })
}

  getLocation = (location) => {
    this.fetchApi(location)
    this.updateLocalStorage(location)
  }

  render() {
    let {isLoaded} = this.state
      if(!isLoaded){
        return <div> Loading.... </div>
      } else { 
      return (
        <div className="App">
        <Header weather={this.state.weatherCards} 
        getLocation={this.getLocation}/>
        <CurrentWeatherCard 
        weather={this.state.weatherCards} />
       <SevenHourCard 
       weather={this.state.weatherCards}
       selectedCardCount = {this.state.senlectedCardCount}/>
       <TenDayCard 
        weather={this.state.weatherCards} />
      </div>
      )
    }
  }
}


export default App;

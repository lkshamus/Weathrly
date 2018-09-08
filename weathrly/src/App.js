import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
// import { data } from './API.js';
import SevenHourCard from './SevenHourCard.js';
import CurrentWeatherCard from './CurrentWeatherCard';
import TenDayCard from './TenDayCard';
import apiConfig from './APIkey.js'


const weatherInfo = `http://api.wunderground.com/api/${apiConfig.apiKey}/conditions/hourly/forecast10day/q/CO/Denver.json`

class App extends Component {
  constructor(props) {
    super(props)
    
  this.state = {
    weatherCards: [],
    isLoaded: false
  }  
}

componentDidMount(){
  fetch(weatherInfo, {method: 'GET', timeout: 2000})
  .then(data => data.json())
  .then(data => {this.setState({
    isLoaded: true,
    weatherCards: data
  })})
  .catch(error => {
    console.log(error)
  })
}


  render() {
    let {isLoaded, weatherInfo} = this.state
      if(!isLoaded){
        return <div> Loading.... </div>
      } else { 
        console.log("RENDER: ", typeof(this.state.weatherCards))
      return (
        <div className="App">
        <Header />
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

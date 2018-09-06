import React, { Component } from 'react';
import Card from './Card.js'

export default class CurrentWeatherCard extends Card {

  constructor() {
    super();
  }

  getSimpleForecast() {
    let currHour = this.getCurrentHour()
    let currDay = 21
    let currWeatherData = this.props.weather.forecast.simpleforecast.forecastday
    let currData = []

    currWeatherData.map(data => {
      if( (data.date.hour == currHour) && data.date.day == currDay ) {
        currData.push(data)
      }
    })
    return currData
  }

  render() {
    let hourlyData = this.getAPIData()
    let render_data = []
    let currData = this.getSimpleForecast()
    let curr_data = []
      for(let i=0; i < hourlyData.length; i++){
        render_data.push((
        <div className='current-weather'>
        <h1 className='current-weather-city'>{this.props.weather.current_observation.display_location.city} </h1>
        <p className='current-time'> Current Weather</p>
        <p className='current-condition'> {hourlyData[i].condition} 
          <img src={hourlyData[i].icon_url} alt='weather' />
        </p>
        <p className='current-temp'> {hourlyData[i].temp.english}°F </p>
        </div>
        ))
      }

      for(let i=0; i < currData.length; i++) {
        curr_data.push((
        <div>
        <p className='high'> {currData[i].high.fahrenheit}</p>
        <p className='low'> {currData[i].low.fahrenheit} </p>
        </div>
        ))
      }
    return render_data.concat(curr_data).slice(0, 1)
    }
  }

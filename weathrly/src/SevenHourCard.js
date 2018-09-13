import React, { Component } from 'react';
import Card from './Card.js';

export default class SevenHourCard extends Component {

  constructor() {
    super();
  } 

  getCurrentHour() {
    let dateObj = new Date();
    return dateObj.getHours();
  }

  getCurrentDay() {
    let dayObj = new Date();
    return dayObj.getDate();
  }

  getAPIData() {
    let currentHour = this.getCurrentHour();
    let currentDay = this.getCurrentDay();
    let weatherData = this.props.weather.hourly_forecast;
    let hourlyData = [];
    Object.values(weatherData).map(data => {
      hourlyData.push(data);
    });
    return hourlyData;
  }
 
  render() {
    let hourlyData = this.getAPIData();
    let render_data = [];
    for(let i=0; i < hourlyData.length; i++){
      render_data.push((
        <ul className='weather-card'>
          <li className='weather-description'>{this.props.weather.current_observation.display_location.city} </li>
          <li className='weather-description'> {hourlyData[i].FCTTIME.civil} </li>
          <li className='weather-description-card'> {hourlyData[i].condition} 
            <img className='seven-day-logo'src={hourlyData[i].icon_url} alt='weather' />
          </li>
          <li className='weather-description'> {hourlyData[i].temp.english}°F </li>
          <li className='weather-description'> {hourlyData[i].wspd.english}mph</li>
        </ul>
      ));
    }
    return render_data.slice(0, 7);
  }
}



import React, { Component } from 'react';
import Card from './Card.js';

export default class TenDayCard extends Component {

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
      if ( (data.FCTTIME.hour >= currentHour) && data.FCTTIME.mday == currentDay ){
        hourlyData.push(data);
      }
    });
    return hourlyData;
  }

  getTenDay() {
    let tenDayWeather = this.props.weather.forecast.simpleforecast.forecastday;
    let tenDayArray = [];
    tenDayWeather.map(day => {
      tenDayArray.push(day);
    });
    return tenDayArray;
  }

  render() {
    let tenDayData = this.getTenDay();
    let render_tenDay = [];
    for(let i=0; i < tenDayData.length; i++) {
      render_tenDay.push((
        <div className='ten-day'> 
          <h1>{tenDayData[i].date.weekday}</h1>
          <img className='icon-ten-day'src={tenDayData[i].icon_url} alt='weather'/>
          <p>High {tenDayData[i].high.fahrenheit}</p>
          <p>Low {tenDayData[i].low.fahrenheit}</p>
        </div>
      ));
    }
    return render_tenDay;
  }

}
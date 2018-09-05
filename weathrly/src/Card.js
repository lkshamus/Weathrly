import React, { Component } from 'react';

export default class Card extends Component {

  constructor() {
    super()
}

render() {
    return (
      <ul className='weather-card'>
      <li className='weather-description'>{this.props.weather.current_observation.display_location.city} </li>
      <li className='weather-description'> 1:00pm </li>
      <li className='weather-description'> Partly Cloudy </li>
      <li className='weather-description'> 80°F </li>
      <li className='weather-description'> NNE 5 mph</li>
      </ul>
    )

  }
}
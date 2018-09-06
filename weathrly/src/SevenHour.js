import React from 'react';
import Card from './Card.js'

export default function SevenHour (props) {
  return (
      <div>
      {props.weather.map((forecast, index) => {
        return <Card weather={forecast} key={index} />
      })}
      </div>
    )
}

import React from 'react';
import Card from './Card.js'

export default function sevenHour (props) {
  return (
      <div>
      {props.weather.map((forecast, index) => {
        return <Card forecast={forecast} key={index} />
      })}
      </div>
    )
}

        props.questions.map((q, index) => {
          return <Question question={q} key={index} />
        }).slice(0, props.selectedQuestionCount)
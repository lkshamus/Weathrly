import React, { Component } from 'react';

export default class Welcome extends Component {

  constructor() {
    super()
}

render() {
    return (
      <div>
      <h1> Welcome </h1>
        <form>
          <input
            placeholder='Check For Weather'
          />
          <button>Find Weather</button>
        </form>
      </div>
    )

  }
}
import React, { Component } from 'react';

export default class Header extends Component {

  constructor() {
    super()
}

render() {
    return (
      <div>
      <h1>Weathrly
      </h1>
      <form>
        <input 
          placeholder="Show me the weather in... city, zip, or place" />
          <button>Find Me</button>
      </form>
      </div>
    )

  }
}
import React, { Component } from 'react';

export default class Header extends Component {

  constructor() {
    super()
}

render() {
    return (
      <div className='header'>
      <h1 className='title'>Weathrly
      <img src={"/public/thermometer.svg"} />
      </h1>
      <form className='search-form'>
        <input className='search-bar' 
          placeholder="Show me the weather in... city, zip, or place" />
          <button className='search-button'>Find Me</button>
      </form>
      </div>
    )

  }
}
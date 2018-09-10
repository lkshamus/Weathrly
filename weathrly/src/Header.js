import React, { Component } from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state= {
      inputValue: '',
    }
}

  // updateInputValue = (e) => {
  //       this.setState({
  //     inputValue: e.target.value
  //   })

  // }

// if result ===
// this.props.weather.current_observation.display_location.city 
// then return data on that city by populating the state and city in api url


render() {
    return (
      <div className='header'>
      <h1 className='title'>Weathrly
      <img src={"/public/thermometer.svg"} />
      </h1>
      <form className='search-form'>
        <input className='search-bar 
          placeholder="Show me the weather in... city, zip, or place" 
         
          value={this.state.inputValue} onChange={this.updateInputValue}' />
          <button className='search-button'>Find Me</button>
      </form>
      </div>
    )

  }
   
}
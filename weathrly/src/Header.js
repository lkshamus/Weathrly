import React, { Component } from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state= {
      location: ''
    };
}

  handleSubmit(event) {
    console.log('A city was submitted: ' + this.state.value);
    event.preventDefault();

  }


render() {
    return (
      <div className='header'>
      <h1 className='title'>Weathrly
      <img src={"/public/thermometer.svg"} />
      </h1>
      <form className='search-form'>
        <input className='search-bar' 
          placeholder="Show me the weather in... city, zip, or place" 
          
           value={this.state.location} onChange={(event) => {
            this.setState({ location: event.target.value})}} />
          <button className='search-button' onClick={(event) => {
            event.preventDefault();
            this.props.getLocation(this.state.location)}

          }>Find Me</button>
      </form>
      </div>
    )
  }
}
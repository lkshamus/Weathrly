import React, { Component } from 'react';
import Trie from '@lkshamus/completeme';
import { cityData } from './storedCities';
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state= {
      location: '',
      trie: null,
      suggests: null
    };
}

componentWillMount() {
  let trie = new Trie();
  console.log(trie)
  trie.populate(cityData.data)
  this.setState({trie: trie})
  console.log(this.state.trie)
} 

suggestCity = (string) => {
  let suggests = this.state.trie.suggest(string).slice(0, 10);
  this.setState({suggests: suggests})
}

render() {
    return (
      <div className='header'>
      <h1 className='title'>Weathrly
      </h1>
      <form className='search-form'>
        <input className='search-bar' 
          placeholder="Show me the weather in... city, zip, or place" 
          
           value={this.state.location} 
           list='data'
           onChange={(event) => {
        
            this.suggestCity(event.target.value)
            this.setState(
              { location: event.target.value})
            }
          }
           />
          <datalist id="data">
          {
            this.state.suggests &&
            this.state.suggests.map((location, index) =>
            <option value={location} key={index}/>
          )}
        </datalist>

          <button className='search-button' onClick={(event) => {
            event.preventDefault();

            // if (this.props.weather.display_location.full.indexOf(this.state.location) === -1) {
            //   console.log('not valid')
            // }


            this.props.getLocation(this.state.location)
            }
          }
         > Find Me</button>
      </form>
      </div>
    )
  }
}
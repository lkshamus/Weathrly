import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import App from './App';
require('jest-localstorage-mock');
// import CurrentWeatherCard from './CurrentWeatherCard'


// jest.mock('./__mocks__/requests.js')

// describe('CurrentWeatherCard', () => {
//   const mockCity = {'weathrly': 'Denver, CO'}
//   const mockUpdateGroceryList = jest.fn()
//   const mockEvent = { preventDefault: jest.fn() }
//   let renderedComponent

//   beforeEach(() => { 
//     renderedComponent = shallow(<App
//                                   getLocation={getLocation}
//                                 />)
//   })
//     it('resets the state after adding a new location', async () => {
//     renderedComponent.setState({'weathrly': addLocation})
//     await renderedComponent.instance().addLocation(mockEvent)
//     expect(renderedComponent.state('grocery')).toEqual({'weathrly': 'Denver, CO'})
//   })
// })












describe('App', () => {

  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

it('should exist', () => {
  expect(wrapper).toBeDefined();
})

it('should render the Header, CurrentWeatherCard, SevenHourCard, and TenDayCard components', () => {
    wrapper.setState( {location: 'Denver, CO'} )

    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('CurrentWeatherCard').length).toEqual(1);
    expect(wrapper.find('SevenHourCard').length).toEqual(1);
    expect(wrapper.find('TenDayCard').length).toEqual(1);
  })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('should retrieve data from local storage on mount', () =>{

const KEY = 'weathrly',
VALUE = 'Denver, CO'

  const location = [
    {'weathrly': 'Denver, CO'},
  ]

  localStorage.setItem(KEY, VALUE)

  wrapper = mount(<App />);

  expect(wrapper.state().location).toEqual(location);

  console.log('this is the location', location)
})


})
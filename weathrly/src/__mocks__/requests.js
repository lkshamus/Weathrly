export const addLocation = jest.fn()

const http = require('http')

  .mockImplementationOnce(() => ({
    cities: [
      {'weathrly': 'Denver, CO'},
    ],
  }))
  .mockImplementationOnce(() => ({
    cities: [
      {'weathrly': 'Denver, CO'},
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding location'))
  })
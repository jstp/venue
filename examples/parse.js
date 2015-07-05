'use strict'

var example = require('washington')
var Venue = require('../venue')

example('@parse method name into endpoint, and adds as subscriber', function () {
  var ExampleVenue = function () {
    Venue.call(this)
  }

  ExampleVenue.prototype = Object.create(Venue.prototype)

  ExampleVenue.prototype.endpoints = {
    'jstp:GET': function () {}
  }

  var exampleVenue = new ExampleVenue()

  return exampleVenue.subscribers[0].endpoint.match({
    method: 'GET'
  })
})

'use strict'

var Sydney = require('sydney')
var JSTPURI = require('@jstp/uri')

var Venue = function () {
  Object.keys(this.endpoints).forEach(function (endpoint) {
    this.add({
      endpoint: JSTPURI.parse(endpoint),
      callback: this.endpoints[endpoint].bind(this)
    })
  }.bind(this))
}

Venue.prototype = Object.create(Sydney.prototype)

module.exports = Venue

#!/usr/bin/env node

var Placement = require('./lib/Placement.js')

var AWS = require('aws-butler')
var ec2 = new AWS.EC2({ region: 'us-east-1' })

var p = new Placement(Placement.AvailabilityZone.us_east_1a, 'group', 'ten')
console.log('p: ' + p.toString())

// example using promise
ec2.describeInstances()
  .then(function (data) {
    console.log(JSON.stringify(data, null, 2)) // data contains standard AWS response
  })
  .catch(function (err) {
    throw err
  })
  .done()

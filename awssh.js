#!/usr/bin/env node

// var Reservation = require('./lib/Reservation.js')
// var fs = require('fs')

// var json = JSON.parse(fs.readFileSync('./data/aws-butler.json', 'utf8'))
// console.log('json: %j', json[0].Reservations)
// var reservations = new Reservation(json[0].Reservations)
// console.log('i: %j', reservations[2].Instances[0].PublicIpAddress)

var AWS = require('aws-butler')
var ec2 = new AWS.EC2({ region: 'us-east-1' })
var Spinner = require('cli-spinner').Spinner

var spinner = new Spinner('processing.. %s')
spinner.setSpinnerString('|/-\\')
spinner.start()

// example using promise
ec2.describeInstances()
  .then(function (data) {
    spinner.stop(true)
    parseInstances(data)
  })
  .catch(function (err) {
    throw err
  })
  .done()

function parseInstances (reservationJson) {
  let reservations = reservationJson[0].Reservations
  for (var reservation of reservations) {
    let instance = reservation.Instances[0]
    console.log('Instance ID: %j', instance.InstanceId)
    console.log('Instance State: %j', instance.State.Name)
    console.log('Public IP Address: %j', instance.PublicIpAddress)
    console.log('Security Groups: %j', organizeSecurityGroupData(instance.SecurityGroups))
    console.log('Tags: %j', instance.Tags)
    console.log(' ')
  }
}

function organizeSecurityGroupData (securityGroupsArray) {
  var securityGroups = ''
  for (var group of securityGroupsArray) {
    securityGroups = group.GroupName + ', '
  }
  return securityGroups
}

/*
// Instance info to show.  all in the Instance. namespace
State.Name
PublicIpAddress
PublicDnsName
KeyName
InstanceType
Placement.AvailabilityZone
[Tags]
SecurityGroups
[SecurityGroups.Name]

//Metadata to show.
last connection
user to login
*/

// function removeQuotesFromObject (obj) {
//   var noQuoteObj = {}
//   for (var property in obj) {
//     if (obj.hasOwnProperty(property) && obj[property] !== undefined) {
//       console.log(property + ':' + obj[property])
//       noQuoteObj.property = obj[property].replace(/['"]+/g, '')
//       // console.log('value: ' + noQuoteObj.property)
//     }
//   }
//   return noQuoteObj
// }

// function isObject(obj) {
//   return obj === Object(obj);
// }

#!/usr/bin/env node

var AWS = require("aws-butler");
 
var ec2 = new AWS.EC2({ region: "us-east-1" });
 
// example using promise 
ec2.describeInstances()
  .then( function(data) {
    console.log(JSON.stringify(data.Reservations, null, 2)); // data contains standard AWS response 
  })
  .catch( function(err) {
    throw err;
  })
  .done();
 
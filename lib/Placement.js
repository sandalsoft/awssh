#!/usr/bin/env node
// Placement.js


class Placement {

  constructor (availabilityZone, groupName, tenancy) {
    this.availabilityZone = availabilityZone
    this.groupName = groupName
    this.tenancy = tenancy
  }

  toString () {
    return `
      Availability Zone: ${this.availabilityZone} 
      Group Name: ${this.groupName}
      Tenancy: ${this.tenancy}
      `
  }
}

Placement.AvailabilityZone = Object.freeze({
  us_east_1a: 'us-east-1a',
  us_east_1b: 'us-east-1b',
  us_east_1c: 'us-east-1c',
  us_east_1e: 'us-east-1e',
  us_west_1a: 'us-west-1a',
  us_west_1b: 'us-west-1b',
  us_west_2a: 'us-west-2a',
  us_west_2b: 'us-west-2b',
  us_west_2c: 'us-west-2c',
  eu_west_1a: 'eu-west-1a',
  eu_west_1b: 'eu-west-1b',
  eu_west_1c: 'eu-west-1c',
  eu_central_1a: 'eu-central-1a',
  eu_central_1b: 'eu-central-1b',
  ap_southeast_1a: 'ap-southeast-1a',
  ap_southeast_1b: 'ap-southeast-1b',
  ap_southeast_2a: 'ap-southeast-2a',
  ap_southeast_2b: 'ap-southeast-2b',
  ap_southeast_2c: 'ap-southeast-2c',
  ap_northeast_1a: 'ap-northeast-1a',
  ap_northeast_1c: 'ap-northeast-1c',
  sa_east_1a: 'sa-east-1a',
  sa_east_1b: 'sa-east-1b',
  sa_east_1c: 'sa-east-1c',
  Unknown: 'Unknown'
})

module.exports = Placement

// "Placement": {
//   "AvailabilityZone": "us-east-1a",
//   "GroupName": "",
//   "Tenancy": "default"
// }

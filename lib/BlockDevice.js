#!/usr/bin/env node
// BlockDevice.js
'use strict'

class BlockDevice {

  constructor (deviceName, ebs) {
    this.deviceName = deviceName
    this.ebs = ebs
  }

  toString () {
    return `Device Name: ${this.deviceName}\n
            ebs: ${this.ebs}\n
            `
  }
}

module.exports = BlockDevice

// "BlockDeviceMappings": [
//   {
//     "DeviceName": "/dev/xvda",
//     "Ebs": {
//       "VolumeId": "vol-24a182f1",
//       "Status": "attached",
//       "AttachTime": "2016-10-06T03:39:28.000Z",
//       "DeleteOnTermination": true
//     }
//   },
//   {
//    "DeviceName": "/dev/xvdg",
//     "Ebs": {
//       "VolumeId": "vol-24a16661",
//       "Status": "detached",
//       "AttachTime": "2016-10-06T03:39:28.000Z",
//       "DeleteOnTermination": false
//     }
//   }
// ]

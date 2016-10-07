#!/usr/bin/env node
// Ebs.js
'use strict'

class Ebs {

  constructor (volumeId, var2, var3, var4) {
    this.volumeId = volumeId
    this.var2 = var2
    this.var3 = var3
    this.var4 = var4
  }

  toString () {
    return `Var 1: ${this.volumeId}\n
            Var 2: ${this.var2}\n
            Var 3: ${this.var3}\n
            Var 4: ${this.var4}\n
            `
  }
}

module.exports = Ebs

// "Ebs": {
//       "VolumeId": "vol-24a182f1",
//       "Status": "attached",
//       "AttachTime": "2016-10-06T03:39:28.000Z",
//       "DeleteOnTermination": true
//     }

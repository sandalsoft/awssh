#!/usr/bin/env node
// ClassName.js
'use strict'

class ClassName {

  constructor (var1, var2) {
    this.var1 = var1
    this.var2 = var2
  }

  toString () {
    return `Var 1: ${this.var1}\n
            Var 2: ${this.var2}\n
            `
  }
}

module.exports = ClassName

// "Ebs": {
//       "VolumeId": "vol-24a182f1",
//       "Status": "attached",
//       "AttachTime": "2016-10-06T03:39:28.000Z",
//       "DeleteOnTermination": true
//     }

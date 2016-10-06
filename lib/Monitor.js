#!/usr/bin/env node
// Monitor.js
'use strict'

class Monitor {

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

Monitor.stateEnum = Object.freeze({
  Pending: 'Pending',
  Rebooting: 'Rebooting',
  Stopping: 'Stopping',
  Running: 'Running',
  Stopped: 'Stopped',
  ShuttingDown: 'ShuttingDown',
  Terminated: 'Terminated',
  Unknown: 'Unknown'
})

module.exports = Monitor

// "Monitoring": {
// "State": "disabled"
// },
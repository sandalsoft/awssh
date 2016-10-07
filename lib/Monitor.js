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

/*
State — (map)
The current state of the instance.

Code — (Integer)
The low byte represents the state. The high byte is an opaque internal value and should be ignored.

0 : pending
16 : running
32 : shutting-down
48 : terminated
64 : stopping
80 : stopped
Name — (String)
The current state of the instance.

Possible values include:
"pending"
"running"
"shutting-down"
"terminated"
"stopping"
"stopped"

*/
// "Monitoring": {
// "State": "disabled"
// },

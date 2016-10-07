#!/usr/bin/env node
var cliff = require('cliff')
const chalk = require('chalk')

var running = chalk.cyan('●') + 'running'
var rows = [
    ['Name', 'Id', 'Status', 'IP', 'Security Groups', 'Tags'],
    ['webserver', 'i-a0203191', running, '54.166.240.143', '[house (vpc_rule), Everywhere on 80]', '[Environment : dev] [Owner : eric] [Name : webserver]'],
    ['Bob',   'i-a0203191', running, '54.166.240.143', 'house (vpc_rule)', '[Environment : dev] [Owner : eric] [Name : webserver]']

  ]

console.log(cliff.stringifyRows(rows, ['white']))
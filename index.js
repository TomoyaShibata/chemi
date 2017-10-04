#!/usr/bin/env node
'use strict'

const program = require('commander')
const checmicalElements = require('./src/data').checmicalElements

const showResult = (chemicalElement) => {
  if (chemicalElement === undefined) {
    console.log('Not found ￣\\‍_(ツ)_/￣')
    return
  }

  console.log(`z           : ${chemicalElement.z}`)
  console.log(`symbol      : ${chemicalElement.symbol}`)
  console.log(`element     : ${chemicalElement.element}`)
  console.log(`originalName: ${chemicalElement.originName}`)
  console.log(`group       : ${chemicalElement.group}`)
  console.log(`period      : ${chemicalElement.period}`)
  console.log(`wikipedia   : https://en.wikipedia.org/wiki/${chemicalElement.element}`)
}

const findElement = (keyName, value) => {
  showResult(checmicalElements.find(c => c[keyName] == value))
}

program.version('0.0.1')
  .name('chemi')
  .option('-z, --znumber <[znumber]>', 'Find by z number')
  .option('-s, --symbol <[symbol]>', 'Find by symbol')
  .option('-e, --element <[element]>', 'Find by element')
  .parse(process.argv)

let chemicalElement
if (program.znumber) findElement('z', program.znumber)
if (program.symbol) findElement('symbol', program.symbol)
if (program.element) findElement('element', program.element)

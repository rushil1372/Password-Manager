#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk') 
const clip = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Password Generator')

program
    .option('-l,--length <int>','length of password','8')
    .option('-s,--save','save password to password.txt')
    .option('-nn,--no-numbers','no numbers included')
    .option('-ns,--no-symbols','no symbols included')
    .parse()

const {length, save, numbers, symbols} = program.opts()

const generatedPass = createPassword(length,numbers,symbols)

if(save) { 
    savePassword(generatedPass)
}

clip.writeSync(generatedPass)

log(chalk.blue('Generated Password : ') + chalk.bold(generatedPass))
log(chalk.yellow('Copied to clipboard'))
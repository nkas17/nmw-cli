#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
// const program = require('yargs/yargs');
const { program } = require('commander');
const pkg = require('../package.json');

clear();

console.log(
  chalk.greenBright(figlet.textSync('<nmw />', { horizontalLayout: 'full' }))
);
console.log();

program
  .version(pkg.version, '-v, --version', 'display nmw version number')
  .command('create', 'create something', {
    executableFile: 'nmw-create.js',
  })
  .alias('c')
  .command('hello', 'say hi', {
    executableFile: 'hello.js',
  })
  .alias('h');

program.parse(process.argv);

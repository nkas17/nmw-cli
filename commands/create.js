// const cp = require('child_process');

const path = require('path');
const chalk = require('chalk');
const config = require('../config');
const file = require('../lib/file');

const create = {
  project: async ({ title, framework }) => {
    if (title && framework) {
      const src = path.join(config.baseDir, `templates/${framework}-app`);
      const dest = process.cwd();
      await file.copy(src, dest);
      console.log(
        `${chalk.green.bold(title)} created as a ${chalk.green.bold(
          framework
        )} project`
      );
      console.log();
    } else {
      console.log(
        `Missing required options ${chalk.red.bold(
          'title'
        )} and ${chalk.red.bold('framework')}
        `
      );
    }
  },
  file: async ({ name, type }) => {
    if (name) console.log(`created a file named ${chalk.green.bold(name)}`);
    // else console.log(`missing file name option ${chalk.red.bold('fname|n')}`);
    console.log();
    if (type === 'html') {
      // copy from templates to current directory
      const src = path.join(config.baseDir, 'templates/index.html');
      const dest = path.join(process.cwd(), 'index.html');
      if (await !file.exists(dest)) {
        await file.copy(src, dest);
        console.log(`created ${chalk.green.bold('index.html')}`);
      } else {
        console.error(
          `${chalk.redBright.bold('error: index.html already exists')}`
        );
        console.log();
      }
    }
  },
};

module.exports = create;

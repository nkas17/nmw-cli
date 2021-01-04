const cp = require('child_process');
const chalk = require('chalk');
const _ = require('lodash');

const init = {
  command: 'init [dir]',
  desc: 'Create an empty repo',
  builder: {
    dir: {
      default: '',
      describe: 'The directory to initialize',
    },
  },
  handler: (argv) => {
    cp.exec(`git init ${argv.dir}`, (error, stdout) => {
      if (error) console.log(error);
      else console.log(`...${stdout}`);
    });

    // cp.execSync(`npm init ${argv.name} ${argv.description}`);
    console.log(
      `${chalk.cyanBright.bold('git init')} for ${chalk.green(
        argv.dir || _.last(process.cwd().split('/'))
      )} complete.`
    );
    console.log();
  },
};

module.exports = init;

// const inquirer = require('inquirer');

// const create = {
//   async project({ title, framework }) {
//     const titleQuestion = {
//       type: 'input',
//       name: 'title',
//       message: 'Enter the title of your new project:',
//     };
//     const frameworkQuestion = {
//       type: 'list',
//       name: 'framework',
//       message: 'Select your framework of choice:',
//       choices: ['react', 'angular'],
//       default: 'react',
//     };
//     const questions = [];
//     if (!title) questions.push(titleQuestion);
//     if (!framework) questions.push(frameworkQuestion);
//     const answers = await inquirer.prompt([...questions]);
//     console.log(
//       `created ${framework || answers.framework} project named ${
//         title || answers.title
//       }`
//     );
//     console.log();
//   },
// };

// module.exports = create;

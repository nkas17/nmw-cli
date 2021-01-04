const { program } = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version, '-v, --version', 'display nmw version number')
  .name('nmw hello')
  .usage('[cmd] [env]')
  .alias('h')
  .arguments('[cmd] [env]')
  .option('-d, --debug', 'output extra debugging')
  .description('say hello description', {
    cmd: 'command to run',
    env: 'environment to run test in',
  })
  .action((cmd, env) => {
    if (program.debug) console.log('debuggin');
    if (cmd) console.log('command:', cmd);
    if (env) console.log('environment:', env || 'no environment given');
    console.log('hello from nmw');
    console.log();
  });

program.parse(process.argv);

const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version, '-v, --version', 'display nmw version number')
  .name('nmw create')
  .usage('<commands> [options]')
  .alias('c')
  .command('project', 'create a project', {
    executableFile: 'nmw-create-project.js',
  })
  .alias('p')
  .command('file', 'create a file', {
    executableFile: 'nmw-create-file.js',
  })
  .alias('f');

program.parse(process.argv);

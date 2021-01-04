const program = require('commander');
const pkg = require('../package.json');
const create = require('../commands/create');

program
  .version(pkg.version, '-v, --version', 'display nmw version number')
  .name('nmw create|c file')
  .usage('-n, --fname [fname]')
  .alias('f')
  .description('create a new file')
  .option('-n, --fname [fname]', 'name of the file')
  .option('-t, --type [type]', 'type of file')
  .action(async (cmdObj) => {
    await create
      .file({
        name: typeof cmdObj.fname === 'string' ? cmdObj.fname : undefined,
        type: typeof cmdObj.type === 'string' ? cmdObj.type : undefined,
      })
      .catch((error) => console.log(error));
  });

program.parse(process.argv);

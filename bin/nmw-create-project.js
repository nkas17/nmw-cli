const program = require('commander');
const pkg = require('../package.json');
const create = require('../commands/create');

program
  .version(pkg.version, '-v, --version', 'display nmw version number')
  .name('nmw create|c project')
  .usage('-t, --title [title], -f, --framework [framework]')
  .alias('p')
  .description('create a new project')
  .option('-t, --title [title]', 'name of the project')
  .option('-f, --framework [framework]', 'framework of choice (react, angular)')
  .action(async (cmdObj) => {
    await create
      .project({
        title: typeof cmdObj.title === 'string' ? cmdObj.title : undefined,
        framework:
          typeof cmdObj.title === 'string' ? cmdObj.framework : undefined,
      })
      .catch((error) => console.log(error));
  });

program.parse(process.argv);

const fs = require('fs-extra');
const path = require('path');

module.exports = {
  copy: (src, dest) => fs.copy(src, dest),
  exists: (file) => fs.existsSync(file),
  directoryExists: (filePath) => fs.existsSync(filePath),
  getCurrentDirectoryBase: () => path.basename(process.cwd()),
};

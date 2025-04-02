const path = require('path');

module.exports = {
  resolver: {
    // Add support for resolving TypeScript files
    sourceExts: ['tsx', 'ts', 'jsx', 'js', 'json']
  },
  watchFolders: [
    // Include the root folder for Metro to watch
    path.resolve(__dirname)
  ]
};

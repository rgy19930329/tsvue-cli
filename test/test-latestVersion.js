const latestVersion = require('latest-version')

latestVersion('tsvue-cli').then(version => {
  console.log('cli latest version: ' + version)
});
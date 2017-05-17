const fs = require('fs');
const path = require('path');

const getPackagePeerDependencies = (packageName) => {
  const pathString = path.resolve(`./packages/${packageName}/package.json`);
  const dependencies = require(pathString).peerDependencies;
  return dependencies;
}

module.exports = getPackagePeerDependencies;

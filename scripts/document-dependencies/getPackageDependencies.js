const fs = require('fs');
const path = require('path');

const getPackageDependencies = (packageName) => {
  const pathString = path.resolve(`./packages/${packageName}/package.json`);
  const dependencies = require(pathString).dependencies;
  return dependencies;
}

module.exports = getPackageDependencies;

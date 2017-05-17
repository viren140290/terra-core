const fs = require('fs');
const path = require('path');

const getAllTerraPackageNames = () => {
  return fs.readdirSync(path.resolve('./packages/')).filter(item => (/terra/g).test(item));
}

module.exports = getAllTerraPackageNames;

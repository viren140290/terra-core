const fs = require('fs');
const path = require('path');

const getAllTerraPackageNames = require('./getAllTerraPackageNames');
const getPackageDependencies = require('./getPackageDependencies');
const getPackagePeerDependencies = require('./getPackagePeerDependencies');
const reduceUniqueObject = require('./reduceUniqueObject');


const allTerraPackages = getAllTerraPackageNames();
const allTerraPackageDependencies = allTerraPackages.map((mpackage) => getPackageDependencies(mpackage))
const allTerraPackagePeerDependencies = allTerraPackages.map((mpackage) => getPackagePeerDependencies(mpackage));

console.log('\nDependencies:');
console.log(allTerraPackageDependencies);

console.log('\nPeerDependencies:');
console.log(allTerraPackagePeerDependencies);

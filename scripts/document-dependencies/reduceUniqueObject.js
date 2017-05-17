const fs = require('fs');
const path = require('path');

const reduceUniqueObject = (arr) => {
  const newArr =  arr.reduce(function(acc, x) {
    for (var key in x) acc[key] = x[key];
    return acc;
  }, {});
  return newArr;
}

module.exports = reduceUniqueObject;

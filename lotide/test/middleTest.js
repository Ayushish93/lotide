const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');
const eqArrays = require('../eqArrays.js');
const result = middle([1,2,3]);

assertArraysEqual(eqArrays(result,[2]),true);
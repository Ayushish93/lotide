const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), true);
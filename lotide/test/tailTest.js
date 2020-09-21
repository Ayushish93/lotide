const tail = require('../tail.js');
const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');



const result = tail(["Hello","Lighthouse", "Labs"]);
const resultArray = eqArrays(result,["Lighthouse", "Labs"]);
assertEqual(resultArray, false); 
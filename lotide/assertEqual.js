//function to check for two values whether they are equal or not!
const emoji = require('node-emoji');
var pi = emoji.get("pizza");


const assertEqual = function(actual, expected) {
    
    if(actual === expected){
        console.log(pi+"Assertion Passed: "+ actual + " === " + expected);
    }
    else{
        console.log(pi+"Assertion Failed:", actual+ ' !== '+ expected);
    }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

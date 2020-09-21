const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }




function eqArrays(actual, expected) {
    var res = true;
    for (let i = 0; i < actual.length; i++) {
        if(actual[i] !== expected[i]) {
            res = false;
        }
    }
    return res;
}

function assertArraysEqual(arg1,arg2) {
    const check = eqArrays(arg1,arg2);
    
    if(check === true) {
        console.log(`✅Assertion Passed:  ${arg1} ===  ${arg2}`);
    }
    else {
        console.log(`❌Assertion Failed:  ${arg1}  !==  ${arg2}`);
    }
}
// const results1 = map(words, word => word[0]);
// //console.log(results1);
// console.log(assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'mm', 't' ]));
// console.log(results1,[ 'g', 'c', 't', 'mm', 't' ]);



module.exports = map;
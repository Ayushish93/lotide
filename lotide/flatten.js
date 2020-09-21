// function eqArrays(actual, expected) {
//     var res = true;
//     for (let i = 0; i < actual.length; i++) {
//         if(actual[i] !== expected[i]) {
//             res = false;
//         }
//     }
//     return res;
// }

// function assertArraysEqual(arg1,arg2) {
//     const check = eqArrays(arg1,arg2);
//     if(check === true) {
//         console.log(`Assertion Passed:  ${arg1} ===  ${arg2}`);
//     }
//     else {
//         console.log(`Assertion Failed:  ${arg1}  !==  ${arg2}`);
//     }
// }
const flatten = function(arr)    // [1, 2, [3, 4], 5, [6]]
{
    let resultArr = [];
    for(let i = 0; i < arr.length;i++) {
        var isArr = Array.isArray(arr[i]);    // checking if its array or not
        
        if(isArr === true) {                        // if it is true , loop through it
            for(let j=0; j < arr[i].length;j++) {           
                resultArr.push(arr[i][j]);
            }
        }
        else {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}
//console.log(flatten([1, 2, [3, 4], 5, [6]]));


module.exports = flatten;
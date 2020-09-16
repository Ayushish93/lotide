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
    const check = eqArrays(arg1, arg2);
    if(check === true) {
        console.log(`Assertion Passed:  ${arg1} ===  ${arg2}`);
    }
    else {
        console.log(`Assertion Failed:  ${arg1}  !==  ${arg2}`);
    }
}
const middle = function(arr)
{
    middleElement = [];
    let numberOfItems = arr.length;
    let mid = Math.floor(numberOfItems/2);
    if(numberOfItems <= 2)
        return middleElement;
    else {    
    
        if(numberOfItems % 2 === 0) {
            middleElement.push(arr[mid-1], arr[mid]);
        
        }
        else if(numberOfItems % 2 !== 0) {
            middleElement.push(arr[mid]);
        }
        else if(numberOfItems <= 2) {
            middleElement.push(" ");
        }
        return middleElement;
    }
    
}
// console.log(middle([1,2]));
// console.log(middle([1,2,3,4]));
// console.log(middle([1,2,3]));
const original = middle([1,2,3,4]);
console.log(assertArraysEqual(original,[2,3]));


const takeUntil = (data,fun) => {
    let resarr = [];
    for(let i = 0 ; i < data.length; i++) {
        let res = fun(data[i]);
        if(res === true)
            return resarr;
        else
           resarr.push(data[i]);
    }
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



//  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//  const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// //console.log(assertArraysEqual(results1,[1,2,5,7,2]));
// console.log(assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]));
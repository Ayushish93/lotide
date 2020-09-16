const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    let str = sentence.split(" ").join("");
    
    for(let i = 0 ; i < str.length;i++) {
        if(results.hasOwnProperty(str[i])) {
            results[str[i]].push(i);
        }
        else {
            results[str[i]] = [i];
        }
    }

    return results;
  };

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
        console.log(`Assertion Passed:  ${arg1} ===  ${arg2}`);
    }
    else {
        console.log(`Assertion Failed:  ${arg1}  !==  ${arg2}`);
    }
}
assertArraysEqual(letterPositions("hello").e, [1]);

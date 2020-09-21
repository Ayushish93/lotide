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

function without(sourcearr,removearr)
{
    let resarr = [];
    for(var i = 0; i < sourcearr.length;i++) {
        if(!removearr.includes(sourcearr[i]))
        {
            resarr.push(sourcearr[i]);
        }
         
    }
    
    return resarr;
}
//  const words = ["hello", "world", "lighthouse"];
//  console.log(without(words, ["lighthouse"])); 
//  assertArraysEqual(words, ["hello", "world", "lighthouse"]);


 module.exports = without;

const assertEqual = function(actual, expected) {
    
    if(actual === expected){
        console.log(`✅Assertion Passed:  ${actual}   ===   ${expected}`);
    }
    else{
        console.log(`❌ Assertion Failed: ${actual}  !==  ${expected}`);
    }
    
};
const countLetters = function(str)
{
    let newstr = str.split(" ").join('');
    let returnobj = {};
    for(let i of newstr) {
        if(returnobj.hasOwnProperty(i)) {
            returnobj[i] += 1;
        }
        else {
            returnobj[i] = 1;
        }
    }
    return returnobj;
}
console.log(countLetters("lighthouse in the house"));
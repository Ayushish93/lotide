const assertEqual = function(arg1, arg2) {
    
    if(arg1 === arg2){
        console.log(`Pass`);
    }
    else{
        console.log(`fail`);
    }
};

function eqArrays(actual, expected)
{
    var res = true;
    for (let i = 0; i < actual.length; i++)
    {
        if(actual[i] !== expected[i])
        {
            res = false;
        }
    }
    return res;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
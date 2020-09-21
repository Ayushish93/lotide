
function tail(arr)
{
    var resarr =[];
    
     for(var i = 1 ; i < arr.length; i++)
     {
        resarr.push(arr[i]);
    }
    
    return resarr;
    
}
module.exports = tail;

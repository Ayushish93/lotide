function head(arr)
{
    if(arr === undefined)
    {
        return undefined;
        
    }
    else
    {
        return arr[0];
    }
}

module.exports = head;
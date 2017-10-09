function Q1(arr){
    var brr=[];
    var arr=arr.sort();
    for(var i=0;i<arr.length-1;i++){
        var ind=arr.lastIndexOf(arr[i]);
        brr.push(arr[ind])
    }
    return brr;
}
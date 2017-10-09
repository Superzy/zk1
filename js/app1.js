function Q2(arr){
    var n = [arr[0]]; //结果数组
//从第二项开始遍历 
    for(var i = 1; i < arr.length; i++) {
//如果当前数组的第i项在当前数组中第一次出现的位置不是i， 
//那么表示第i项是重复的，忽略掉。否则存入结果数组 
        if (arr.indexOf(arr[i]) == i) n.push(arr[i]);
    }
    return n;
}

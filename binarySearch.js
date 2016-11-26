function binarySearch(data, dest, start, end){
    var end = end || data.length - 1,
        start = start || 0,
        m = Math.floor((start + end) / 2);
    if(data[m] == dest){
        return m;
    }
    if(dest < data[m]){
        return binarySearch(data, dest, 0, m-1);
    }else{
        return binarySearch(data, dest, m+1, end);
    }
   
    return false;
}
function sorting(a,b){
    return a-b;
}
var arr = [-34, 3, 1, 4, 5, 8, 34, 45, 65, 87];
arr=arr.sort(sorting);
var result=binarySearch(arr,3)
console.log(result);
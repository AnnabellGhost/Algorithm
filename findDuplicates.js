
var findDuplicates = function(nums) {
    var result=[];
    function sorting(a,b){return a-b;}
    nums=nums.sort(sorting);
    for(i=0;i<nums.length-1;i++){
        if(nums[i]===nums[i+1]){
            result.push(nums[i]);
            i++;
        }
    }
   return result; 
};
console.log(findDuplicates([4,6,7,4,8,7]));

// console.log(7/2);
//3.5
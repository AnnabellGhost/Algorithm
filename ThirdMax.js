'use strict'
var thirdMax = function(nums) {
    let maxF;
    let maxS;
    let maxT;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]===maxF||nums[i]===maxS||nums[i]===maxT){continue;}
        if(nums[i]>maxF||!maxF){
            let tempF=maxF;
            let tempS=maxS;
            maxF=nums[i];
            // maxT=maxS;
            maxS=tempF;
            maxT=tempS;
        }else if(nums[i]>maxS||!maxS){
            maxT=maxS;
            maxS=nums[i];
        }else if(nums[i]>maxT||!maxT){
            maxT=nums[i];
        }
    }
    if(typeof maxT=='number'){return maxT}
    return maxF;
    
};
console.log(thirdMax([3,3,4,3,4,3,0,3,3]));
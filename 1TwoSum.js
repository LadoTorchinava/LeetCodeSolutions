var twoSum = function(nums, target) {
    const numToIndex = {};  
  
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;  
        if (complement in numToIndex) {
            return [numToIndex[complement], i];
        }
        
        numToIndex[num] = i;
    }


};

console.log(twoSum([1,2,4],6))
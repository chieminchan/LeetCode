
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
// var twoSum = function(nums, target) {
//     for(var i = 0;i<nums.length;i++){
//         for(var j = 0;j<nums.length-1;j++){
//             if(nums[i]+nums[j] == target && i!=j){
//                 return([i,j]);
//             }
//         } 
//     }   
// };

var twoSum = function(nums,target){
    let result = [],   
        temp = {},
        dis=0;
    
    for(let i = 0;i<nums.length;i++){
        dis = target - nums[i];
        if(dis in temp){
            result.push(temp[dis],i);
        }
        temp[nums[i]]=i;
    }
    return result;
}

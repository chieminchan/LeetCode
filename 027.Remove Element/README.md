
思路
=====
比较简单的一题，和remove duplicates from sorted array类型，
对数组进行遍历，比较每一项是否和给定的val相同，相同则采用splice参数将其删除，并i-- (耗时：52ms)

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(var i = 0;i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
```

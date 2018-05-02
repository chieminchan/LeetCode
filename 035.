
思路
====
遍历给定数组nums，对每一项和target进行条件判断。
首先找到最后一个比target大的数，返回当前位置i+1；或者当某项和target值相等时，返回当前位置i；否则则证明数组从第一项开始就比target大，则返回0。（耗时：84ms）
```JavaScript
var searchInsert = function(nums, target) {
    var index=0;
    for(var i = 0;i<nums.length;i++){
        if(nums[i]<target){
            index= i+1;
         }else if(nums[i] === target){
             index= i;
         }
    }
    
 return index;
```
  

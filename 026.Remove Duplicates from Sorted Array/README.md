
思路（JavaScript）
==================

* 原来思路：
  遍历数组，对每一项进行nums.indexOf()配对，如果数组中有重复值，indexOf会返回第一个配对的值的位置，而和多个重复的值的位置不一样，进而采用splice(i,1) 
  对数组重复值进行删除修改。（耗时：314ms）

```JavaScript
		var removeDuplicates = function(nums) {
			// var len =nums.length;
		    for(var i = 0 ;i<nums.length;i++){
		        if(nums.indexOf(nums[i]) !=i){
		            nums.splice(i,1);
		            i--;
		        }
		    }
		    return nums;
		};
		var numsArr = [0,1,0,1,1,2,2,3,3,4,5];
		removeDuplicates(numsArr);
		console.log(numsArr);	
```
* 参考解决方案1:（耗时：164ms）
```JavaScript
    for(var i = 0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            nums.splice(i,1);
            i--;//减掉1，是因为原数组删除了当前位，当前位的后一位被退到当前位，所以位置减一位
        }
    }
    return nums.length;	
```

* 参考解决方案2:（耗时：96ms）
```JavaScript
var removeDuplicates = function(nums) {
    var cur = 0,
        nex = 0;
    
    while(next < nums.length){
        if(nums[next] > nums[cur]){
            firstP++;
            nums[firstP] = nums[secondP];
        }
        secondP++;
    }
    
    return firstP + 1;
    
};
```

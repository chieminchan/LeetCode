
思路（JavaScript）
==================

+原来思路：
遍历数组，对每一项进行nums.indexOf()配对，如果数组中有重复值，indexOf会返回第一个配对的值的位置，而和多个重复的值的位置不一样，进而采用splice(i,1)对数组重复值进行删除修改。

但忽略了splice改变原数组，使在遍历时产生位置发生了变化，不是和想象中的一样固定位置一样，也导致遍历次数的改变。
例子:

```JavaScript
var removeDuplicates = function(nums) {
	for(var i = 0 ;i<nums.length;i++){
		if(nums.indexOf(nums[i]) !=i){
		      console.log(nums[i]);
		      nums.splice(i,1);
		 }
	}
	return nums;
};
var numsArr = [0,1,0,1,1,1,2,2,3,3,4];
removeDuplicates(numsArr);
console.log(numsArr,temp); // [0, 1, 1, 1, 2, 3, 4]		
```
+最终思路

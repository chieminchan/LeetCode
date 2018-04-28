
思路（JavaScript）
==================

* 原来思路：
  遍历数组，对每一项进行nums.indexOf()配对，如果数组中有重复值，indexOf会返回第一个配对的值的位置，而和多个重复的值的位置不一样，进而采用splice(i,1) 
  对数组重复值进行删除修改。（耗时：316ms）

```JavaScript
var removeDuplicates = function(nums) {
	for(var i = 0 ;i<nums.length;i++){
		if(nums.indexOf(nums[i]) !=i){
		      console.log(nums[i]);
		      nums.splice(i,1);
		      i--; //减掉1，是因为原数组删除了当前位，当前位的后一位被退到当前位，所以位置减一位
		 }
	}
	return nums;
};
var numsArr = [0,1,0,1,1,1,2,2,3,3,4];
removeDuplicates(numsArr);
console.log(numsArr,temp); // [0, 1,  2, 3, 4]		
```
* 参考完整理思路

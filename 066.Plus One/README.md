
## 思路

原来错误的思路：<br>
将给定的数组元素连接起来,然后转成数字加1,再转回字符串,切割放回一个新数组,并且返回该新数组.
```javascript
var plusOne = function(digits) {
    var num = +(digits.join(""));  //转成数字的便捷方法
    num += 1;
    var numArr= [];
    String(num).split("").forEach(function(item){
        numArr.push(Number(item));
    });
    return numArr;
};
```
然而,踩坑了....
```javascript
Number.MAX_SAFE_INTEGER.toString().length; //16
Number(digits.join("")).toString().length; //19
```

再想,再想,得出思路：从给定数组的最后一位开始遍历,
(1)首先检验当前数字是否为9,是则变为0,然后继续向前遍历,《br>
(2)若前一位不是9,则将其加1,退出循环并返回该数组(end);
(3)若前一位数字也为9,重复(1)(2),直至退出,
(4)若直至遍历完数组,即第一位也为9,将其变为0,并向数组的顶端添加数字1(满10进1),返回数组(end).

耗时:56 ms

```javascript
var plusOne = function(digits) {
    var len = digits.length;
    for(var i =len-1;i>=0;i--){
        if(digits[i] === 9){
           digits[i] = 0; 
        }else{
            digits[i] +=1;
            return digits;
        }
    }
    
    digits.unshift(1);
    return digits;
};
```

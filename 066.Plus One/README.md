
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
Number.MAX_SAFE_INTEGER.toString().length; //16
Number(digits.join("")).toString().length; //19

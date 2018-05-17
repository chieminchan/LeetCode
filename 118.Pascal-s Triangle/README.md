
## 思路

绘制杨辉三角<br>
(1)首先判断numRows是否为0,为0则返回空数组 [];<br>
(2)根据给出的numRows,建立一个长度为numRows个二维数组;<br>
(3)当numRows为1时,直接设定arr[1] = [1];<br>
(4)当numRows大于1时,对当前行的数组的头部(0)和尾部(length)分别先设为1,并遍历其他项,<br>
   其他项元素等于 (上一行的对应当前项数的数字) 和 (上一行的对应当前项数的前一项的数字) 之和,即arr[i][j] = arr[i-1][j-1]+arr[i-1][j];<br>

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr = [];
    if(numRows === 0){
        return arr;
    }
        
    for(var i = 0;i<numRows;i++){
        
        if(numRows == 1){
            arr[i] = [1];
        }
        
        arr[i] = new Array();
        arr[i][0] = 1;
        arr[i][i] = 1;
        for(var j = 1;j<i;j++){
            arr[i][j] = arr[i-1][j-1]+arr[i-1][j];
        }   
    }
        
    return arr;
    
};
```

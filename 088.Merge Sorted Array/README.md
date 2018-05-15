
## 思路

首先先说一下错误的思路,先将nums2合并至nums1,然后在对nums1进行sort排序处理,但发现,这里有大量负数,没能正确排序....(???)
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length=n;
    Array.prototype.push.apply(nums1,nums2);
    nums1.sort(function(a,b){
        return a>b;
    })
};

参考了一下别人的思路,总结如下：<br>
(1)先改变nums1，nums2长度,将它们有效的元素提取.<br>
(2)对nums2进行遍历,将nums2的每一位元素和nums1进行匹配插入.<br>
   首先y=0,x=0,即将nums2的第一个数字和nums1的第一个数字进行比较,如果nums2的第一个数字比nums1的小,就进行插入处理,并y++开始将nums2的第二个数字和nums1进行匹配操作;
   否则x++,即拿数组2第一位数字继续和数组1的第2位进行比较,以此类推..直到数组2的数字插入到数组1中.
   
耗时：52ms<br>
```javascript
var merge = function(nums1, m, nums2, n) {

    nums1.length = m;
    nums2.length=n;
    
    var x=0,y=0;
    
     while(y < n)
        if(nums2[y] < nums1[x] || nums1[x] === undefined){
            nums1.splice(x, 0, nums2[y]);
            x++;
            y++;    
        } else {
            x++;
        }
    }   
};
```

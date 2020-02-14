### 025 offset系列方法和DOM的文档碎片    -77

offsetWidth    返回值：width + border + padding

offsetHeight   返回值：同上

offsetLeft     返回值：眼睛能看到实际距离第一个有定位的父节点的距离

offsetTop



#### 数组循环：

数组：
    for循环
    for...in快速遍历
    forEach

```
 //对象遍历
        var person = {
            username: "钢铁侠",
            age: 18,
            sex: "男"
        };

        //对象遍历  for...in
        for(var i in person){
            //i是当前遍历到的属性
            document.write("对象的遍历," + i + "," + person[i] + "<br/>")
        }

```


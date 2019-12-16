# CSS复合样式 43

* 一个CSS属性只控制一种样式，叫做单一样式

* 一个CSS属性控制多种样式，叫做复合样式

#### CSS复合样式

- 复合的写法，是通过空格的方式实现的。
- 复合写法有的不需要关心顺序，例如background、border；
- 有的需要关心顺序，例如font

1.background：red url(图片地址) repeat 0 0；

2.border：1px（线的粗细） red  solid/dashed/dotted；

3.font：

​	注：最少要有两个值 size family

​	weight style size family  √

​	style weight size family  √

4.尽量不要混写，如果非要混写的话那么要先写复合样式，再写单一样式。

​			


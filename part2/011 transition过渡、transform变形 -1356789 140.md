### 011 transition过渡、transform变形 -135/136

#### transition过渡：

transition-property：规定设置过渡效果的CSS属性的名称

transition-duration：规定完成过渡效果需要多少秒或毫秒。

transition-delay：定义过渡效果何时开transform始。（延迟（数值为正数），也可提前（数值为负数））

transition-timing-function：规定速度效果的速度曲线

​	 linear

 	ease（默认值）

 	ease-in

 	ease-out

 	ease-in-out

 	cubic-bezier

![image-20200122192520315](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200122192520315.png)



#### transform变形：

translate：位移

​	translateX

​	translateY

​	translateZ（3D）

scale：放缩（值是一个比例值，正常大小是1，以当前元素中心点进行缩放）

​	scaleX

​	scaleY

​	scaleZ （3D）

rotate：旋转（旋转的值，单位是角度deg）

​	rotateX （3D）

​	rotateY （3D）

​	rotateZ（和rotate是等价关系，正值为按顺时针旋转，负值为按逆时针旋转）

skew：斜切

​	skewX：单位也是角度，正值向左倾斜，负值向右倾斜

​	skewY

#### transform的注意事项：

1. 变形操作不会影响到其他元素
2. 变形操作只能添加给`块`元素
3. 复合写法，可以同时添加多个变形操作，执行有顺序：先执行后面的操作，再执行前面的操作。translate会受到rotate、scale、skew的影响
4. transform-origin：基点的位置
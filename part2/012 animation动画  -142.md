### 012 animation动画、animate.css  -142/145

- animation—name：设置动画的名字（自定义）

- animation-duration：动画的持续时间

- animation-delay：动画的延迟时间

- animation-iteration-count：动画的重复次数，默认值是1，infinite无限次数

- animation-timing-function：动画的运动形式

- 注：


​	1.运动结束后，默认情况下会停留在起始位置

​	2.@keyframes from——>0%  , to——>100%

- animation-fill-mode:规定动画播放之前或之后，其动画效果是否可见。

  ​	none (默认值) : 在运动结束之后**回到初始位置**，在延迟的情况下，让0%在延迟后生效

     backwards : 在延迟的情况下，让0%在延迟前生效

     forwards  : 在运动结束的之后，停到结束位置

     both  : backwards和forwards同时生效

- animation-direction : 属性定义是否应该轮流反向播放动画。

     alternate  : 一次正向(0%~100%)，一次反向(100%~0%)

     reverse : 永远都是反向 , 从100%~0%

     normal (默认值) : 永远都是正向 , 从0%~100%



#### animate.css

   一款强大的预设css3动画库。

   官网地址：https://daneden.github.io/animate.css/

基本使用：

 animated : 基类(基础的样式，每个动画效果都需要加)

 infinite : 动画的无限次数
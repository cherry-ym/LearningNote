### CSS默认样式及其重置-70/71

有些标签有默认样式，有些标签没有默认样式。

没有默认样式：

​	div、span、...

有默认样式：

​	body -> margin:8px

​	h1...h6 -> margin:上下 21.44px

​	p -> margin:上下 16px

​	ul -> margin:上下 16px  padding：左 40px

​	ul -> text-decoration：underline；

#### 重置（reset）：

​	*{margin：0；padding：0；}

​		优点：不用考虑哪些标签有默认的margin和padding

​		缺点：稍微的影响性能

​	ul{list-style=none}

​	a:

![image-20200112185043447](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200112185043447.png)

​	img{display:block}（转块以后就没有空隙了）

​		问题的现象：图片跟容器底部有一些空隙

​		img{vertical-align：bottom；}
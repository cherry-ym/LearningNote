### 001 JavaScript    -1

* JavaScript官方概念：是一个跨平台的脚本语言。

  平台：即运行环境，这里一般指操作系统。

  脚本语言特点：不能独立运行，要依赖于网页

  HTML网页的运行离不开浏览器

  JS程序的运行离不开HTML网页

  凡是不能独立执行需要依赖其他程序的，通常都叫做脚本。

* JavaScript组成：

​	1.ECMAScript  3，4，5，6，7

​	2.DOM 文档:提供访问和操作网页内容的方法和接口

​	3.BOM :浏览器,提供与浏览器交互的方法和接口

* 所有的js代码在一个script标签中编写

  script属性：

  ​	1.type = 'text/javascript'  声明当前标签内写的文本格式

  ​	2.src = 'demo.js' 引入外部的js文件

  外联script写法：

  <script src="相对路径"></script>//该链接可以放在html页面的任意位置，不用和link标签一样一定放在head部分;

  那么相对路径对应的应该为后缀为.js的文件。 例如：index.js

  内部script写法：

  <script>
            alert('hello world') //js脚本
  </script>

  ​	3.可以有多个script标签，多个script标签是自上而下顺序执行

* alert（） 在当前页面上弹出一个警告框，警告框中显示要显示的内容

* 一个script标签只能做一个事情

* 向页面中输出内容：

  document.write('这是一些内容');

* 在控制台中输入内容：

  console.log("hello world"); 一般用于代码调试

* 转义字符:

![image-20200205171556527](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200205171556527.png)

* 要在每一行结束时加 ；
### 003  localStorage    -97

本地存储技术:
   localStorage(IE8以下不兼容)
      1、永久存储
      2、最大可以存储5M   客户端的一个微型数据库
      3、只能存储string

​	  4、不能被爬虫爬取

   cookie
      1、可以设置过期时间
      2、最大可以存4KB
      3、每一个域名下面最多可以存储50条数据

   sessionStorage（结合后台使用）

   localStorage 对象（本地存储对象）
      setItem(name, value);   name和value都必须是字符串

```
这三种方式都可以	
	localStorage.setItem("a", "1");
    localStorage.b = '2';
    localStorage['c'] = '3';
```

​      getItem(name);
​      removeItem(name);
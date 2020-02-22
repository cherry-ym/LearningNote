### 006  Ajax的get和post     -132

#### form表单get请求：

action   点击submit以后跳转到的url
method   表单的提交数据的方式
          get(默认)
        http://localhost/code14/1.get.php?username=xxxx&age=18&password=123abc
  提交方式：是直接将数据拼接在url后面进行提交，通过?进行拼接，查询字符串。
     好处： 简单
     缺点：
        1、不安全
        2、最大2kb
        3、没法实现上传

#### form表单post请求：

   提交方式：post提交通过浏览器内部进行提交。
   好处：
      1、安全
      2、理论上没有上限
      3、上传
   缺点：比get复杂



#### Ajax的get和post：

get提交的数据，需要通过open方法进行提交



post提交的数据，需要通过send方法进行提交

    ?name1=value&name2=value2  search
    name1=value&name2=value2   querystring
必须在send方法之前，去设置请求的格式:如下

   ```
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
   ```


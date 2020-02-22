### 005 Ajax的onreadystatechange    -131

1.创建Ajax对象

   var xhr = new XMLHttpRequest();



2.调用open

   (第一个参数：请求方式 get、post 第二个参数：url 第三个参数：是否异步 true表示异步，false表示同步)

​    xhr.open("get", "1.txt", true);

3.调用send（);

​    xhr.send();

4.等待数据响应

​    xhr.onreadystatechange = function(){

​       if(xhr.readyState == 4){

​          alert(xhr.responseText);

​       }

​    }

readystatechange 事件类型
     xhr.readyState  发生变化的时候调用
     0  （初始化）调用open方法之前
     1  （载入）调用你send方法之后，发送请求
     2  （载入完成）send方法完成，已经接受到所有的响应内容
     3  （解析）正在解析下载到的数据
     4  （完成）解析完成



HTTP 状态码 ajax.status

200——交易成功

400——错误请求，如语法错误

404——没有发现文件、查询或URl
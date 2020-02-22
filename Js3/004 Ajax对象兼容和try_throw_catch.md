### 004 Ajax对象兼容和try_throw_catch

1.创建Ajax对象

   var xhr = new XMLHttpRequest();



2.调用open

   (第一个参数：请求方式 get、post 第二个参数：url 第三个参数：是否异步 true表示异步，false表示同步)

​    xhr.open("get", "1.txt", true);

 

XMLHttpRequest  IE8以下不兼容
IE8以下声明ajax的方法是                            		    ActiveXObject("Microsoft.XMLHTTP");



#### try_catch:

try{
     尝试执行的代码
}catch(error){
     error 错误对象，try括号中代码执行的异常信息;
     补救代码;
}

执行过程：

​    1、先去执行try中的代码

​    2、如果try中的代码执行正常，catch中的代码就不执行了

​    3、如果try中的代码执行异常，直接执行catch中的代码进行补救 

 【注】更多的用在代码调试和后期维护。

try_throw_catch
     throw 手动抛出异常
     格式：
try{
    尝试执行的代码
    throw new Error("异常信息文本")
}catch(error){
    error 错误对象，try括号中代码执行的异常信息;
    补救代码;
}
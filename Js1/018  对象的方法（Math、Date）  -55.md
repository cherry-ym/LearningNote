### 018  对象的方法（Math、Date）  -55

Math对象：

在JS中一切皆对象。

【注】在JS，很多关系数学运算的函数，直接一个Math对象提供。


       【注】查阅文档。
                ■Math.random() //返回0-1之间的随机数
                ■Math.max(num1, num2) //返回较大的数
                ■Math.min(num1, num2)  //返回较小的数
                ■Math.abs(num)  //绝对值
                ■Math.round() 四舍五入(成整数，只看小数点后一位)
                ■Math.ceil(19.3)  //向上取整
                ■Math.floor(11.8)  //向下取整
                ■Math.pow(x,y)  //x的y次方
                ■Math.sqrt(num)  //开平方
                传入的参数是：弧度
                    Math.sin()  正弦
                    Math.cos()  余弦
    
                    Math.PI = 180弧度
                    1弧度 = Math.PI / 180;
                document.write(Math.sin(30 * Math.PI / 180));
Date对象：

日期对象声明
    1、没有传入参数，默认当前系统时间
    Mon Feb 10 2020 20:55:34  GMT+0800 (中国标准时间)
    GMT 格林尼治时间
    2、传入参数
       "2000-01-01"

​		var t = new Date("1999-09-09");

​       "2000/01/01"
​       按照顺序，分别传入参数  年 月 日 时 分 秒 毫秒
​       【注】在国外月份是从0开始数的 0~11
​       直接传入毫秒数   1秒 = 1000毫秒  （已1970年1月1日 0:0:0 为参照时间点去进行换算）

![image-20200210210811493](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200210210811493.png)



```
重点记忆
set/getDate() 从Date对象中返回一个月中的某一天(1~31)
getDay() 从Date对象返回一周中的某一天(0~6)
set/getMonth() 从Date对象中返回月份(0~11)
set/getFullYear() 从Date对象以四位数返回年份
set/getHours() 返回Date对象的小时(0~23)
set/getMinutes() 返回Date对象的分钟(0~59)
set/getSeconds() 返回Date对象的秒数(0~59)
set/getMilliseconds()   返回Date对象的毫秒
set/getTime() 返回1970年1月1日至今的毫秒数
getTimezoneOffset()     返回本地时间与格林威治标准时间(GMT)的分钟差
```

所有的参照时间点都是1970年
   Date.parse()
      格式：Date.parse(日期对象)
      功能：可以将日期对象转成毫秒数

   d.getTime()/d.setTime();
      格式：日期对象.getTime/setTime
      功能：将当前日期对象转成毫秒数



定时器
    格式：var timer = setInterval(函数, 毫秒数);
    功能：每隔对应的毫秒数，执行一次传入的函数。
    返回值：启动定时器的，系统分配的编号。

​	clearInterval(timer);  取消定时器
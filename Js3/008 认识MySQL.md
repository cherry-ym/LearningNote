### 008	认识MySQL  

shell 壳
    core  核
   【注】shell编程。


    1、DOS界面：不是内部或者外部命令
         解决办法：配置环境变量。
         我的电脑右键 => 属性 => 高级系统设置 => 环境变量 => PATH
    
         处理服务器或者数据库链接失败
         我的电脑右键 => 管理 => 服务和应用程序 => 服务 => 启动程序
    
    2、登录mySQL
         mysql -u root -p  +  回车
    
         ctrl + C 终止当前程序
    
    3、查看数据库(接下来输入的mysql命令操作都要加分号)
         show databases;
    
    4、创建数据库
         create database db2 character set utf8;
    
    5、选择数据库
         use 数据库名字;
    
    6、创建表(一定要设置id))
         CREATE TABLE 表名(
            字段名1 数据类型,
            字段名2 数据类型,
            …
            字段名n 数据类型
            )character set 字符集 collate 校对规则;
    
    7、数据类型
          int    整形
          float  浮点数
    
          char(10)
          varchar(30)
    
          date  日期  格式："1999-09-09"
    
          text  文本（理论上没有上线）
    8、查看当前数据库下的表
          show tables;
                
    9、查看表结构
          desc 表名;
          
    10、插入操作
          INSERT INTO 表名(字段1, 字段2,...) VALUES(具体的值1, 具体的值2…);
    
    11、查找表下面所有的数据
          SELECT * FROM 表名;
                
    12、修改操作
          UPDATE 表名 SET 字段名1 =新值, 字段名2=新值... WHERE 条件；
                
    13、删除操作
          DELETE FROM 表名 WHERE 条件;
          【注】通过delete语句只会将表中的数据删除，并不会将整个表删除。
          
    14、删除表
          drop table 表名;
          
    15、删除数据库
          drop database [if exists] 数据库名;
                
    16、查询操作
          SELECT 字段1,字段2... FROM 表名 WHERE 条件;
    
    17、排序
          SELECT 字段名1,字段名2... FROM 表名 WHERE 条件 ORDER BY 字段 [asc|desc]



![image-20200223182955375](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200223182955375.png)

MySQLdbms：数据库管理器   相当于管理员

DB：数据库 
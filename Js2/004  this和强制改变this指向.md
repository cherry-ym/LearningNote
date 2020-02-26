### 004  this和强制改变this指向

​	每一个函数中都有一个内置的变量this，this指向当前函数的主人，函数的主人要根据上下文关系进行判断。
 【注】this指向当前函数的主人

#### 常见this

```
1.全局函数
        function show(){
            alert(this);			//this指向window
        }
        show();
2.        
var person = {
            username: "钢铁侠",
            show: function(){
                alert(person.username);
                alert(this.username);	//this指向person
            }
        }

        person.show();
        
3.
 oBtn.onclick = function(){
                alert(this.innerHTML);	//this指向oBtn
            }
```



#### 强制改变this指向：

+ call
  格式：函数名.call();
  参数：
   第一个参数：传入该函数this指向的对象，传入什么强制指向什么
   第二个参数开始：将原函数的参数往后顺延一位。

+ apply
  格式：函数名.apply()
  参数：  
   第一个参数：传入该函数this指向的对象，传入什么强制指向什么
   第二个参数：数组  数组，放入原有所有的参数

+ bind   预设this指向
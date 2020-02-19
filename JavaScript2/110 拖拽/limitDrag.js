//限制出界的拖拽，要拥有拖拽原有的所有功能

function LimitDrag(id){
    //继承父一级所有的属性 构造函数的伪装
    Drag.apply(this, [id]);
}

//继承方法   原型链
for(var funcName in Drag.prototype){
    LimitDrag.prototype[funcName] = Drag.prototype[funcName];
}
//多态
LimitDrag.prototype.funcMove = function(ev){
    var e = ev || window.event;
    var l = e.clientX - this.offsetX;
    var t = e.clientY - this.offsetY;
    //浏览器获取宽的兼容方式
    var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(l <= 0){
        l = 0;
    }
    if(l >= windowWidth - this.oDiv.offsetWidth){
        l = windowWidth - this.oDiv.offsetWidth;
    }

    if(t <= 0){
        t = 0;
    }
    if(t >= windowHeight - this.oDiv.offsetHeight){
        t = windowHeight - this.oDiv.offsetHeight;
    }
    
    this.oDiv.style.left = l + 'px';
    this.oDiv.style.top = t + 'px';
}
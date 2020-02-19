function Drag(id){
    this.oDiv = document.getElementById(id);
    var _this = this;
    this.oDiv.onmousedown = function(ev){
        _this.funcDown();
    };
    document.onmouseup = this.funcUp;
}

Drag.prototype.funcDown = function(ev){
    var e = ev || window.event;
    this.offsetX = e.clientX - this.oDiv.offsetLeft;
    this.offsetY = e.clientY - this.oDiv.offsetTop; 

    var _this = this;
    document.onmousemove = function(ev){
        _this.funcMove();
    }
}

Drag.prototype.funcMove = function(ev){
    var e = ev || window.event;
    this.oDiv.style.left = e.clientX - this.offsetX + 'px';
    this.oDiv.style.top = e.clientY - this.offsetY + 'px';
}

Drag.prototype.funcUp = function(){
    document.onmousemove = null;
}
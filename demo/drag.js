function drag(id){
    var _this = this;
    this.dragId = document.getElementById(id);
    this.dw = 0;
    this.dh = 0;
    this.dragId.onmousedown = function(){//鼠标按下
        _this.dragDown();
    }
}
drag.prototype.dragDown = function(e){
    var _this = this;
    var ove = e || event;
    this.dw = ove.clientX - this.dragId.offsetLeft;//鼠标在盒子内距离左侧大小
    this.dh = ove.clientY - this.dragId.offsetTop;//鼠标在盒子内距离上大小

    document.onmousemove = function(){//鼠标按下移动
        _this.dragMove();
    }
    document.onmouseup = function(){//鼠标松开
        _this.dragUp();
    }
}
drag.prototype.dragMove = function(e){
    var ove = e || event;
    var left = ove.clientX - this.dw;
    var top = ove.clientY - this.dh;

    if(left<0){
        left = 0;
    }else if(left>document.documentElement.clientWidth-this.dragId.offsetWidth){
        left = document.documentElement.clientWidth-this.dragId.offsetWidth;
    }
    if(top<0){
        top = 0;
    }else if(top>document.documentElement.clientHeight - this.dragId.offsetHeight){
        top=document.documentElement.clientHeight - this.dragId.offsetHeight;
    }
    this.dragId.style.left = left+'px';
    this.dragId.style.top = top +'px';
}
drag.prototype.dragUp = function(){
    document.onmousemove = null;
    document.onmouseup = null;
    
}

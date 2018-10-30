function tab(id){
    var tabBox = document.getElementById(id);
    this.bts = tabBox.getElementsByClassName('btn');
    this.bxs = tabBox.getElementsByClassName('box');
    for(var i=0;i<this.bts.length;i++){
        var _this = this;
        this.bts[i].index = i;
        this.bts[i].onclick = function(){
            _this.clickBtn(this);
        }
    }
}

tab.prototype.clickBtn=function(btn){
    for(var j=0;j<this.bts.length;j++){
        this.bts[j].className = 'btn';
        this.bxs[j].className = 'box';
    }
    btn.className = 'btn active';
    this.bxs[btn.index].className = 'box showBox';
}
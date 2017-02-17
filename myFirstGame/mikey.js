function mikey(x, y){
    this.mikeyX =x;
    this.mikeyY =y;
    var self= this;
    document.addEventListener("keydown", function (e){
        console.log(e.keyCode);

        if (e.keyCode===37) self.mikeyX -=5;
        if (e.keyCode===38) self.mikeyY -=5;
        if(e.keyCode===39) self.mikeyX +=5;
        if (e.keyCode===40) self.mikeyY +=5;

    });

}
mikey.prototype.draw =function(ctx){
    var x =this.mikeyX;
    var y= this.mikeyY;
    ctx.beginPath();
    ctx.ellipse(x, y, 50, 50, 0, 0, 2  * Math.PI);
    ctx.fill();
    ctx.ellipse(x-56, y-56, 30, 30, 0, 0, 2  * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.ellipse(x+55, y-56, 30, 30, 0, 0, 2  * Math.PI);
    ctx.fill();

}
module.exports=mikey;

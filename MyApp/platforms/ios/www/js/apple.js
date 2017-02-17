const Apple= function(xpos,ypos ,speed, ctx){
    this.xpos= xpos;
    this.ypos= ypos;
    this.ctx= ctx;
    this.width=90;
    this.height= 64;
    this.speed = speed;
    this.death= false;
    this.bgapple= new Image();
    var localPath= window.location.pathname.substring(0, window.location.pathname.length-10);
    this.bgapple.src= localPath+"img/apple.png";
    var self= this;
    this.bgapple.onload= function(){
        self.isLoadedAp= true;
    }

};

Apple.prototype.update = function(bird){
    this.xpos -= this.speed;
    checkAppleCollisions(bird, this);
    console.log("dgdhhe");
};

Apple.prototype.render= function(){
    if (!this.death){
        this.ctx.drawImage(this.bgapple, this.xpos-this.width/2 , this.ypos-this.height/2);

    }


}

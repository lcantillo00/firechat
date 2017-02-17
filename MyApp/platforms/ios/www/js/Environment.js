const Environment = function(c, ctx){
  this.c = c;
  this.ctx = ctx;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 2;
  this.bgWidth = 450;
  this.bgheight=600;
  this.bgImg = document.getElementById('bg');

 var self =this;

var localPath= window.location.pathname.substring(0, window.location.pathname.length-10);
  this.bgImg =new Image();
  this.bgImg.src = localPath+"img/bg.png";
  this.bgImg.onload = function (){
    self.isloaded= true;
  }
};

Environment.prototype.update = function(){
  this.bgPos -= this.bgSpeed;
  if (this.bgPos < -this.bgWidth)
    this.bgPos = 0;
};
Environment.prototype.render = function(){
  for(let i =0; i <= this.c.width/this.bgWidth+1; i++)
    this.ctx.drawImage(this.bgImg, this.bgPos+i*this.bgWidth, 0);
};

const Bird = function(x, y, ctx){
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.velY = 0;
  this.width = 90;
  this.height = 64;
  this.ticks = 0;
  this.score=0;
  this.spriteIndex = 0;
  // this.sprites = [document.getElementById('bird1'),
  //       document.getElementById('bird2'),
  //       document.getElementById('bird3')];




  this.sprites =[new Image(), new Image(),  new Image()];
  var localPath = window.location.pathname.substring(0, window.location.pathname.length-10);
  this.sprites[0].src = localPath+"img/bird1.png";
  this.sprites[1].src = localPath+"img/bird2.png";
  this.sprites[2].src = localPath+"img/bird3.png";

  var self = this;
  var numLoaded= 0;
  this.sprites[0].onload =loadHandler;
  this.sprites[1].onload =loadHandler;
  this.sprites[2].onload =loadHandler;

   function loadHandler(){
       numLoaded ++;
       if (numLoaded==3) self.spritesLoaded = true;
   }
  window.addEventListener('keydown', function(e){
    if (e.keyCode === 32){
      self.velY = -8;
    }
  });

  window.addEventListener('touchstart', function(e){
     self.velY = -8;

  });
};
Bird.prototype.update = function(){
  this.ticks++;
  if (this.ticks % 15 === 0) this.spriteIndex = (this.spriteIndex+1) % this.sprites.length;
  this.y += this.velY;
  this.velY += 0.50;
};

Bird.prototype.render = function(){
  let renderX = this.x - this.width/2;
  let renderY = this.y - this.height/2;
  this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY);
  this.ctx.font = '48px serif';
  this.ctx.strokeText("Score: "+ this.score, 40, 40);
};

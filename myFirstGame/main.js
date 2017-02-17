var c= document.getElementById("canvas");
var ctx =c.getContext("2d");
c.width= window.innerWidth;
c.height=window.innerHeight*0.98;
var Mikey= require('./mikey.js');
var player =new Mikey(200, 200);

function  gameLoop(){
    ctx.clearRect(0,0, c.width, c.height);
    player.draw(ctx);
    window.requestAnimationFrame(gameLoop);
}
 gameLoop();
 

function drawMickey(x,y){

}

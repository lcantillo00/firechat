(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./mikey.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);

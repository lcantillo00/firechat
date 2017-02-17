window.onload = function(){
   const c = document.getElementById('canvas');
   c.width = window.innerWidth;
   c.height = 600;

   const ctx = c.getContext('2d');

   const environment = new Environment(c, ctx);
   const bird = new Bird(250, 300, ctx);
   const pipes = [];

   var apple= new Apple(450, 300, 2, ctx);
   setInterval(function(){
      apple = new Apple ((Math.random()*200)+250, (Math.random()*200)+300, 2, ctx);
  },3000);



   let pipeSet = generateRandomPipes(ctx, c.width, c.height);
   pipes.push(pipeSet.top, pipeSet.bottom);
   setInterval(function(){
     let pipeSet = generateRandomPipes(ctx, c.width, c.height);
     pipes.push(pipeSet.top, pipeSet.bottom);
   }, 2600);
   gameLoop();


   /*
    MAIN GAME LOOP
   */
   function gameLoop(){
     //ctx.fillRect(0,0,c.width,c.height);
     bird.update(pipes);
     if (!bird.dead){
       environment.update();

       pipes.forEach(function(pipe1){
         pipe1.update();
       });
     }
     environment.render();
     pipes.forEach(function(pipe1){
       pipe1.render();
     });
     bird.render();
     if (bird.dead){
       drawGameOver(ctx, c);
     }


     apple.update(bird);
     apple.render();
     if(checkCanvasCollision(bird)){
        console.log("you lose");
    }

    if(checkCanvasCollision(bird)){
        console.log("you lose");

    }

     window.requestAnimationFrame(gameLoop);
   }
 };

 function generateRandomPipes(ctx, canvasWidth, canvasHeight){
   let lengthTop = Math.round(Math.random()*200+50);
   let lengthBottom = canvasHeight - 200 - lengthTop;
   let returnVal = { };
   returnVal.top = new Pipe(canvasWidth, -5, lengthTop, 4, ctx);
   returnVal.bottom = new Pipe(canvasWidth, canvasHeight+5-lengthBottom, lengthBottom, 4, ctx);
   return returnVal;
 }


 function checkAppleCollisions(bird, apple){
     let dx = apple.xpos-bird.x;
     let dy= apple.ypos-bird.y;
     let distance= Math.sqrt(dx*dx+dy*dy);
     let distcollision=(bird.width/2+apple.width/2);
     if (distance < (distcollision-40) && apple.death===false){
         bird.score +=2 ;
         apple.death=true;
        return true;
     }

}
 function checkCanvasCollision(bird){
     let bottomdist= bird.y + bird.height/2;

     if (bottomdist>= 600){
         return true;
     }


 }


function drawGameOver(ctx, c){
  ctx.font="30px Verdana";
  ctx.textAlign="center";
  ctx.fillText("Game Over!!",c.width/2 , c.height/2);
}


window.onload = () =>{
    let ctx;
    drawRandom()
    let x = 0;
    window.requestAnimationFrame(()=>{
        rectangleAnimation(x);
    });  
}

function drawRandom(){
    ctx = document.getElementById("myCanvas").getContext("2d");
    let shape = Math.floor((Math.random() * 3) + 1);
    switch (shape) {
        //circle
        case 1:
            ctx.beginPath();
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        //square
        case 2:
            ctx.strokeRect(100, 100, 50, 50);
            break;
        //triangle
        case 3:
            ctx.beginPath();
            ctx.moveTo(200, 200);
			ctx.lineTo(200, 400);
            ctx.lineTo(400, 400);
            ctx.stroke();
            ctx.fill();
            break;
      }
}

function rectangleAnimation(x){
    let canvas = document.getElementById("rectangle-canvas");
    ctx = canvas.getContext("2d");
    if(x<=canvas.width){ 
        ctx.save();
        ctx.clearRect(0,0,300,150);
        ctx.fillStyle = "rgba(0, 200, 0, 1)";
        ctx.fillRect(x, 0, 50, 30);
        ctx.strokeRect(x, 0, 50, 30);
        ctx.restore();
        x+=5;
        window.requestAnimationFrame(()=>{
            rectangleAnimation(x);
        });
    }else{
        x = 0;
        window.requestAnimationFrame(()=>{
            rectangleAnimation(x);
        });
    }
   
       
}
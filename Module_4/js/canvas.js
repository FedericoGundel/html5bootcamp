
window.onload = () =>{
    let ctx;
    drawRandom()
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
            ctx.strokeRect(50, 50, 50, 50);
            break;
        //triangle
        case 3:
            ctx.beginPath();
            ctx.moveTo(100, 100);
			ctx.lineTo(100, 300);
            ctx.lineTo(300, 300);
            ctx.stroke();
            ctx.fill();
            break;
      }
}
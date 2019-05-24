import Movie from "./movie";
import Actor from "./actor";

let alien = new Movie("alien",1993,"1:45 hs");
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");

alien.on("play",alien.play);
playButton.addEventListener("click",()=>{
    alien.emit("play");
    alien.on("pause",alien.pause);
    
});
pauseButton.addEventListener("click",()=>{
    alien.emit("pause");
    alien.off("play");
    alien.on("resume",alien.resume);
});
playButton.addEventListener("click",()=>{
    alien.emit("resume"); 
});



let actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

alien.addCast(actors);
console.log(alien.cast[1].name);


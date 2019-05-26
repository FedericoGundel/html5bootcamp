import Movie from "./movie";
import Actor from "./actor";
import Logger from "./logger";

let Social= {
    share(friendName){
        console.log(friendName+" shares "+this.title);
    },
    like(friendName) { 
        console.log(friendName+" likes "+this.title); 
    }
}

Object.assign(Movie.prototype,Social);

let alien = new Movie("alien",1993,"1:45 hs");



let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");

const log = new Logger();

alien.on("play",()=>{
    log.log("the play event has been triggered")
});
alien.on("play",alien.play);

playButton.addEventListener("click",()=>{
    alien.emit("play");
    alien.off("play");
    alien.on("pause",alien.pause);
    
});

pauseButton.addEventListener("click",()=>{
    alien.emit("pause");
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




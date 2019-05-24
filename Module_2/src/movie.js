import EventEmitter from "./EventEmitter";
export default class Movie extends EventEmitter{
    constructor(title, year, duration) {
      super();
      this.title = title;
      this.year = year;
      this.duration = duration;
      this.cast = [];
    }
    play(){
      console.log ("the movie has started");
    }
    pause(){
      console.log ("the movie is paused");
    }
    resume(){
      console.log ("movie continues");
    }
    addCast(actors){
      this.cast = actors;
    }
    
  }
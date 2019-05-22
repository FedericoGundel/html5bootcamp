export default class Movie {
    constructor(title, year, duration) {
      this.title = title;
      this.year = year;
      this.duration = duration;
    }
    play(){
      console.log("movie has started");
    }
    pause(){
      console.log("movie is paused");
    }
    resume(){
      console.log("movie continues");
    }
  }
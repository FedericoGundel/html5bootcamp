export default class Logger {
    constructor() {
      
    }
    log(info){
        console.info(info);
    }
    update(observable){
        this.log(observable.play());
    }
  }
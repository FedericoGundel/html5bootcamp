
export default class EventEmitter{

    constructor() {
      this.events=[];
    }
 
    on(eventName,callback){
        let event = callback;
        this.events[eventName]= event;
    }
    emit(eventName){
        this.events[eventName]();
    }
    off(eventName){
        this.events[eventName]= null;
    }
}
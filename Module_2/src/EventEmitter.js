
export default class EventEmitter{

    constructor() {
      this.events=[];
    }
 
    on(eventName,callback){
        if(this.events[eventName]==null){
            this.events[eventName]=[callback];
        }
        else{
            this.events[eventName].push(callback);
        }
    }
    emit(eventName){
        if(!this.events.includes(eventName)){
            for(let ev of this.events[eventName]){
                ev();
            }
        }        
    }
    off(eventName){
        this.events[eventName]--;
    }
}
class EventEmitter {
    events: object;

    constructor() {
        this.events = Object.create(null)
        // this.events = {}
        console.log(this.events)
    }
}


const eventEmitter: EventEmitter = new EventEmitter();

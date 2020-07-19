const events = require("events");
const event = new events.EventEmitter();

event.on('click',()=>{
    console.log("event create")
});
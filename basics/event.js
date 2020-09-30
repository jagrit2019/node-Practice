const events = require("events");
const event = new events.EventEmitter();

event.on('click',()=>{.          // this way was introduced in ES6
    console.log("event create")
});

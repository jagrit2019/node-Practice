const EventEmitter = require('events');
const http = require('http')
 const myEmitter = new EventEmitter();
const remain=5;

//best practice to create class

class Sales extends EventEmitter{
    constructor(){
        super();

    }
}
 myEmitter.on('newSale',()=>{
     console.log("There was a new sale ")
 })

 myEmitter.on("newSale",()=>{
     console.log("customer was jagrit")
 })
 myEmitter.on('newSale',remain =>{
    console.log(`the remaining items are now ${remain}`)
})

 myEmitter.emit('newSale',remain-1);

 
 myEmitter.emit('newSale',remain-1);
 myEmitter.on('newSale',remain =>{
    console.log(`the remaining items are now ${remain}`)
})

 myEmitter.emit('newSale',remain-1);

 myEmitter.emit('newSale',remain-1);

 myEmitter.emit('newSale',remain-1);


//////////////////////


const server = http.createServer();
server.on('request',(req,res)=>{
    console.log("request recieved")
    res.end('Request recieved');
})
server.on('request',(req,res)=>{

    console.log("request recieved 😅")
    console.log(req.url);
    res.end('Request recieved😍');
})
server.on('request',(req,res)=>{
    console.log("request recieved😅")
    // res.end('Request recieved ');
})

server.on('close',()=>{
    console.log("server is closed")
})
server.listen(8000,'127.0.0.1',()=>{
    console.log("wating for the request")
});

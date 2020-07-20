const fs = require('fs')
const crypto = require('crypto');
const { request } = require('http');

const  start = Date.now();

// process.env.UV_THREADPOOL_SIZE =1;
//change the threadpool size 
process.env.UV_THREADPOOL_SIZE=10;

setTimeout(()=> console.log("timer 1 finished"),0);
setImmediate(()=>console.log("Immidate 1 finished"))
fs.readFile('test-file.txt',()=>{
    process.nextTick(()=>{
        console.log('process.nextTick3')
    })
    console.log("I/O finished")

    process.nextTick(()=>{
        console.log('process.nextTick1')
    })
    setTimeout(()=> console.log("timer 2 finished"),0);
    setTimeout(()=> console.log("timer 3 finished"),3000);
setImmediate(()=>console.log("Immidate 2 finished"))
process.nextTick(()=>{
    console.log('process.nextTick2')
})
//see that first 4 have have almost same time because by default 4 threadpool are there where they divide the task 
// but to change the size max can be 128

// this is syncronous so it will lead to blocking of other request

crypto.pbkdf2Sync("password","salt",10000,1023,"sha512",()=>{
    console.log(Date.now()-start,"password encypted successfully");
})
crypto.pbkdf2("password","salt",10000,1023,"sha512",()=>{
    console.log(Date.now()-start,"password encypted successfully");
})
crypto.pbkdf2("password","salt",10000,1023,"sha512",()=>{
    console.log(Date.now()-start,"password encypted successfully");
})
crypto.pbkdf2("password","salt",10000,1023,"sha512",()=>{
    console.log(Date.now()-start,"password encypted successfully");
})
crypto.pbkdf2("password","salt",10000,1023,"sha512",()=>{
    console.log(Date.now()-start,"password encypted successfully");
})
crypto.pbkdf2("password","salt",10000,1023,"sha512",()=>{
    console.log(Date.now()-start,"password encypted successfully");
})
})
console.log("hello from the top level code");

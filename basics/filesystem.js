const fs = require("fs");
const http = require("http");
let PORT=3232;
const server=http.createServer(function(res,req){

// console.log(fs);
fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
if(err) throw err;
console.log(data);
});
//to delete the file
// fs.unlink(__dirname+"/hello.txt",(err,data)=>{
//     if(err) throw err;
//     console.log("file deleted"+data)
// })
}).listen(PORT,()=>{console.log("server is running on "+PORT)});

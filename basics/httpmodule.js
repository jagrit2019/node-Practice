const http = require("http");
const { executionAsyncResource } = require("async_hooks");
const { RSA_NO_PADDING } = require("constants");
const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html "});
    // res.writeHead(200,{"content-type":"text/plain "});
    res.write("Node js practice")
    res.write("<h1>html is now working</h1>")
    res.write("this is working fine")
res.end()
}).listen(3001,()=>console.log("server running"));

const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    //solution 1
//     fs.readFile('test-file.txt',(err,data)=>{
//         if(err) throw err;
//         res.end(data);
//     })
// })
//solution 2: Stream
// const readable = fs.createReadStream('test-file.txt')
// readable.on('data',chunk =>{
//     res.write(chunk);
// })
// readable.on('end',()=>{
//     res.end();
// })

// solution 3:pipe
const readable = fs.createReadStream("test-file.txt");
readable.pipe(res);

readable.on("error",(err)=>{
    console.log(err)
    res.statusCode(500);

    res.end('File not found');
})
})

server.listen(8000,()=>{
    console.log("go check it is running");
})

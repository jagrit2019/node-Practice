const fs = require("fs");

//blocking synchronous way

// const textin= fs.readFileSync("./1-node-farm/starter/txt/input.txt","utf-8")
// console.log(textin);

// const textOut = `This is what i know about avocardo: ${textin}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./output.txt',textOut);
// console.log("file written")

//Non-blocking Asynchronous way
// fs.readFile("./1-node-farm/starter/txt/start.txt",'utf-8',(err,text)=>{
//     if (err) throw err;
// console.log(text);
// });
// console.log("Will read this");
// this is a callback hell
fs.readFile('./1-node-farm/starter/txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8',(err,data2)=>{
        if (err ) throw err;
        console.log(data2);

        fs.readFile('./1-node-farm/starter/txt/append.txt','utf-8',(err,data3)=>{
            if(err) throw err;
            console.log(data3);
            fs.writeFile('./1-node-farm/starter/txt/merged.txt',`${data2}\n${data3}`,'utf-8',err =>{
                if(err) throw err;
                console.log("Your file has been written !!")

            })
        });
       
    });

});
console.log("will read this no issues")

// old fasion function
// function name(params) {
    
// }
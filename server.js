const { readFileSync } = require("fs");

const fs = require('fs');
const http = require('http');
const slugify = require('slugify');
const url = require('url');


//////////////////////////////////////////////
// //////////////////server ////////////////// //


const server = http.createServer((req,res)=>{
    console.log(req.url);
    // console.log(req);
    const pathName= req.url;
    // const tempOverview = fs.readFileSync(`${__dirname}/1-node-farm/starter/templates/template-overview.html`,'utf-8')
    // const tempCard = fs.readFileSync(`${__dirname}/1-node-farm/starter/templates/template-card.html`,'utf-8')
    // const tempProduct = fs.readFileSync(`${__dirname}/1-node-farm/starter/templates/template-product.html`,'utf-8')
   

    if(pathName=='/overview' || pathName=="/"){
        // res.writeHead(200,{
        //     'Content-type':'text/html'});
        // res.end(tempOverview);
        res.end("this is our overview")
    }
    else if(pathName=="/product"){
        res.end("This is product");
    }else if(pathName=="/api"){
        fs.readFile(`${__dirname}/1-node-farm/starter/dev-data/data.json`,(err,data)=>{
      const productData= JSON.parse(data);
      console.log(productData);
      res.writeHead(200,{'Content-type':'application/json'})    
      res.end(data);
        });
        
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        });
        res.end("<h1> page could not be found</h1>")
    }
    

});

server.listen(3232,'127.0.0.1',()=>{
    console.log("Listinig on the port 3232")
});
//////////// ROUTNING///////////////////


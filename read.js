const fs = require("fs");

const textin= fs.readFileSync("./1-node-farm/starter/txt/input.txt","utf-8")
console.log(textin);

const textOut = `This is what i know about avocardo: ${textin}.\n Created on ${Date.now()}`;
fs.writeFileSync('./output.txt',textOut);
console.log("file written")
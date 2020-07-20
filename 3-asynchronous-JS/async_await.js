const { readFileSync } = require("fs")

const getDogPic= async ()=>{
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed:,${data}`);
}
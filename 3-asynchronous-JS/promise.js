const fs = require('fs')
const superagent = require('superagent');
const { resolve } = require('path');
const { rejects } = require('assert');

const readFIlePro = file=>{
    return new Promise((resolve,reject) =>{
        fs.readFile(file,(err,data)=>{
            if (err) reject("i could now find the file😢")
            resolve(data);

        })
    })
};

    readFIlePro(`${__dirname}/dog.txt`).then(data =>{
        console.log(`Breed: ${data}`);
    
        superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .end((err,res)=>{
            if(err) return console.log(err.message);
            console.log(res.body.message);
    
            fs.writeFile('dog-img.txt',res.body.message,err =>{
    
            console.log("Random image stored")
        })
        });
    
    })

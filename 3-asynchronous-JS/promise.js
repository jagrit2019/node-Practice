const fs = require('fs')
const superagent = require('superagent');
//data is not yet there then it is a pending promise
// if data is fetched then it is resolved promise

fs.readFile(`./starter/dog.txt`,(err,data)=>{
    console.log(`Breed: ${data}`);
    
    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`).then(
        res=>{
            console.log(res.body.message);
    
            fs.writeFile('dog-img-promise.txt',res.body.message,err =>{
    
            console.log("Random image stored")
        });
    

    }).catch(err=>{
        console.log(err.message)
    })

})
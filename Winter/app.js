const path = require('path');

fs = require('fs'); //synchronous
Path = require("path")

console.log(__dirname)
console.log(process.cwd())
console.log(process.argv)

const dirPath = path.join(process.cwd(), "../BackToFuture/views")

console.log(dirPath);

fs.readdir(dirPath, function(err, files){
    if(err){
        console.log(err);
        return;
    }
    console.log(files); 
})

function addition(a,b){
    return a + b 

}


const first = parseInt(process.argv[2])
const second = parseInt(process.argv[3])

console.log(addition(first,second))

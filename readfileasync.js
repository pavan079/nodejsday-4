const fs = require("fs")

console.log("script is started");

fs.readFile("test.txt", function(err,data){
    if(err){
        console.log(err)
    }

    else{
        console.log("file read succesfully")
    }
})
 
console.log("script is stopped")
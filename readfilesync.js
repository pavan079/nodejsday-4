const fs = require("fs");

console.log("script is started");

try{
    const data = fs.readFileSync("test.txt");
    console.log("file read completed")

}
catch(err){
    console.log(err)
}

console.log("scripted is stopped")

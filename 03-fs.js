var fs = require("fs");

var contentBuffer = fs.readFileSync("./03-input.txt");

// if (contentBuffer.toString().indexOf("\n") != -1) {
// 	console.log("Found new line");	
// }

console.log(contentBuffer[2].char());
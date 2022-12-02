var fs = require('fs');
var input = fs.readFileSync('input.txt', "utf-8").toString().split("\n")

let elfCount = 0
let elfCarry = []
let currentCount = 0
for(let i=0;i<input.length;i++){
    if(input[i] == ''){
        elfCount++;
        elfCarry[elfCount] = 0;
        currentCount = 0;
        continue;
    }
    
    elfCarry[elfCount] += parseInt(input[i])
}
let sorted = elfCarry.sort((a, b) => b-a)

console.log(sorted);

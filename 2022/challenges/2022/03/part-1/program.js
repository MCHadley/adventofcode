var fs = require('fs');
var data = fs.readFileSync('../input.txt', "utf-8").toString().split("\n")

//loop through all data
//loop through individual item
//seperate into 2 sacks
//find what is in sack more than once
// calulate value based on letter position and count
//print out sack and value
const dataMap = data.map(function(value, key) {
    const sackLength = value.length
    const containerNum = sackLength/2
    const sack1 = value.substring(0,containerNum)
    const sack2 = value.substring(containerNum)
    let item;
    [...sack1].forEach(letter => {
        if(sack2.includes(letter)){
            if(letter == letter.toLowerCase()){
                item = letter.charCodeAt(0) - 96
            }
            if(letter == letter.toUpperCase()){
                item = letter.charCodeAt(0) - 38
            }
        }
    
    });
    return item;
})
console.log(dataMap);

let sum = 0
for(let i=0;i<dataMap.length;i++){
    sum += dataMap[i]
}
console.log(sum);

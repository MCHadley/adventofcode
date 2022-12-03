var fs = require('fs');
var data = fs.readFileSync('../input.txt', "utf-8").toString().split("\n")

const chunkSize = 3
let groups = []
for(let i=0; i<data.length; i+=chunkSize){
    const group = data.slice(i, i+chunkSize)
    groups.push(group)
}

const result = groups.map(function(group, key){
   const firstItem = group[0]
   let item;
   for(let i=0;i<firstItem.length; i++){
    const letter = firstItem[i]
    if(group[1].includes(letter) && group[2].includes(letter)){
        if(letter == letter.toLowerCase()){
            item = letter.charCodeAt(0) - 96
        }
        if(letter == letter.toUpperCase()){
            item = letter.charCodeAt(0) - 38
        }
     }
   }
   return item;
})
let sum = 0;
for(let i=0;i<result.length;i++){
    sum += result[i]
}
console.log(sum);
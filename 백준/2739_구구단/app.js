const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filepath).toString();
const key = Number(input)

function main(){
   [1,2,3,4,5,6,7,8,9].map(item =>{
       console.log(`${key} * ${item} = ${key*item}`)
   })
}
main()

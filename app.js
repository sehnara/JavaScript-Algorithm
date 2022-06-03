const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n");
const N = Number(input[0]);

function main(){
   answer = [1,2,3,4,5,6,7,8,9]
   console.log(answer.filter(i => i !==1))
   
}
main()

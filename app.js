const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString()

function solution() {
   const n = input *1
   let a = 1
   let b = 3
   let count = 0;

   function hanio(n,a,b){
    if(n>1){
        hanio(n-1, a, 6-a-b) 
    }
    console.log(`${a} ${b}`);    
    if(n>1){
        hanio(n-1, 6-a-b, b)
    }
   }
   if(n <= 20){
    hanio(n,a,b)
   }
}
solution()

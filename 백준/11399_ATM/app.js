const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split("\n")

// 오름차순 정렬

function solution() {
  const N = input[0]*1
  let T = 0;
  const NUMS = input[1].split(" ").map(i => {return i*1});
  NUMS.sort((a,b)=>a-b)
  
  for(let i = 0; i < NUMS.length; i++){
    for(let j = 0; j <=i ; j++){
        T += NUMS[j]
    }  
}
console.log(T)
}
solution()

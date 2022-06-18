// 1번째 풀이
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './그리디_큰수의법칙.txt';
const input = fs.readFileSync(filepath).toString().split("\n");

function main(){
  const src = input[0].split(" ").map(i=> {return i*1});
  const N = src[0]
  const M = src[1]
  const K = src[2]

  const nums = input[1].split(" ").map(i => {return i*1});
  nums.sort((a,b) => {return b-a})
  
  const result = Math.floor(M / (K+1)) * (nums[0]*K + nums[1]) + (M%(K+1)) * nums[0];
  console.log(result);
}
main()


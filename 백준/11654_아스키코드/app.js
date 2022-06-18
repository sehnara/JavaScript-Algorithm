const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString()


function solution() {
  console.log(input.charCodeAt(0))
}
solution()
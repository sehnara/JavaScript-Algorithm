const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filepath).toString().split('\n');
const n1 = Number(input[0]);
const n2 = input[1];

console.log(n1 * Number(n2[2]))
console.log(n1 * Number(n2[1]))
console.log(n1 * Number(n2[0]))
console.log(n1 * Number(n2))
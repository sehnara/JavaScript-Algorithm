const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filepath).toString().split(' ');
const n1 = Number(input[0]);
const n2 = Number(input[1]);

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(Math.trunc(n1 / n2))
console.log(n1 % n2)
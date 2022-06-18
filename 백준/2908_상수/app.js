const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().split(' ')

function solution() {    
    const n1 = (input[0][2] + input[0][1] + input[0][0]) *1
    const n2 = (input[1][2] + input[1][1] + input[1][0]) *1
    console.log(n1 > n2 ? n1 : n2)
}
solution()
'use strict';
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n")

function solution() {
    let arr = input[0]
    const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
    for(let i = 0 ; i < croatia.length ; i++){
       arr = arr.split(croatia[i]).join("A")
    }
    console.log(arr.length)

}
solution()
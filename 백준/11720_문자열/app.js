'use strict';
const { captureRejectionSymbol } = require('events');
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n")

function solution() {   
    const N = input[0] *1
    const nums = input[1].split("").map(i => {return i*1})
    console.log(nums.reduce((a,b)=> {return a+b}))
}
solution()
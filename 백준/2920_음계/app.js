'use strict';
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString()
function solution() {   
 const nums = input.split(" ").map(i => {return i*1})
 let ascending = 0
 let descending = 0
 for(let i = 1; i < nums.length; i++){
    let t = nums[i] - nums[i-1]
    if(t === -1){
        descending ++;
    }
    else if(t === 1){
        ascending ++;
    }
 }

 if(ascending ===7){
    console.log('ascending')
 }
 else if(descending === 7){
    console.log('descending')
 }
 else{
    console.log('mixed')
 }
}
solution()

// 1. 단순 string 비교 - 오답
// const nums = input.split(" ")
//  const rel = nums.join('')
//  if(rel === '12345678'){
//     console.log('ascending')
//  }
//  else if(rel === '87654321'){
//     console.log('descending')
//  }
//  else{
//     console.log('mixed')
//  } 
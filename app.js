'use strict';
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filepath).toString()

function solution() {   
  const N = input*1
  let count = 0;
  for(let i =666; i<= 6660000 ; i++){
    if(i.toString().includes('666')){
        count++
    }
    if(count == N){
        console.log(i)
        return
    }
  }
}
solution()
